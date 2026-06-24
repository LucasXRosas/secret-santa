import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import { SecretSantaEvent } from './event.service';

/** Um participante convidado para um sorteio, como gravado na tabela `participants`. */
export interface Participant {
  id: string;
  event_id: string;
  email: string;
  name: string | null;
  status: 'pending' | 'joined';
  invited_at: string;
  drawn_participant_id?: string | null;
}

/**
 * [ID20] ParticipantService — requisições assíncronas com `fetch` nativo + `async/await`
 * contra a API REST (PostgREST) do Supabase. Mesma técnica do EventService.
 */
@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  private authService = inject(AuthService);

  private readonly baseUrl = `${environment.supabaseUrl}/rest/v1`;

  private async buildHeaders(extra: HeadersInit = {}): Promise<HeadersInit> {
    const token = await this.authService.getAccessToken();
    return {
      apikey: environment.supabaseKey,
      Authorization: `Bearer ${token ?? environment.supabaseKey}`,
      'Content-Type': 'application/json',
      ...extra,
    };
  }

  /** Lança um Error com a mensagem do PostgREST quando a resposta não é ok. */
  private async ensureOk(res: Response, contexto: string): Promise<void> {
    if (res.ok) return;
    let detalhe = `${res.status} ${res.statusText}`;
    try {
      const body = await res.json();
      if (body?.message) detalhe = body.message;
      // Conflito de chave única (e-mail repetido) vem como código 23505.
      if (body?.code) (res as any)._pgcode = body.code;
    } catch {
      /* corpo vazio ou não-JSON */
    }
    const erro = new Error(`${contexto}: ${detalhe}`) as Error & { code?: string };
    erro.code = (res as any)._pgcode;
    throw erro;
  }

  /** Lista os participantes de um evento, dos mais recentes para os mais antigos. */
  async listByEvent(eventId: string): Promise<Participant[]> {
    const res = await fetch(
      `${this.baseUrl}/participants?event_id=eq.${eventId}&select=*&order=invited_at.desc`,
      { headers: await this.buildHeaders() }
    );
    await this.ensureOk(res, 'Erro ao listar participantes');
    return (await res.json()) as Participant[];
  }

  /** Convida (adiciona) um participante por e-mail. */
  async invite(eventId: string, email: string, name?: string): Promise<Participant> {
    const res = await fetch(`${this.baseUrl}/participants`, {
      method: 'POST',
      headers: await this.buildHeaders({ Prefer: 'return=representation' }),
      body: JSON.stringify({
        event_id: eventId,
        email: email.trim().toLowerCase(),
        name: name?.trim() || null,
      }),
    });
    await this.ensureOk(res, 'Erro ao convidar participante');
    const rows = (await res.json()) as Participant[];
    return rows[0];
  }

  /** Remove um participante do evento. */
  async remove(participantId: string): Promise<void> {
    const res = await fetch(`${this.baseUrl}/participants?id=eq.${participantId}`, {
      method: 'DELETE',
      headers: await this.buildHeaders(),
    });
    await this.ensureOk(res, 'Erro ao remover participante');
  }

  /**
   * Realiza o sorteio do amigo secreto usando o algoritmo de embaralhamento de Fisher-Yates
   * e formando um único ciclo fechado onde A tira B, B tira C, e o último tira A.
   */
  async performDraw(eventId: string, participants: Participant[]): Promise<void> {
    if (participants.length < 3) {
      throw new Error('O sorteio requer pelo menos 3 participantes.');
    }

    // Embaralha uma cópia do array (Fisher-Yates Shuffle)
    const shuffled = [...participants];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Cria o mapa de "quem tirou quem" formando um ciclo fechado
    // Ex: shuffled = [A, B, C] => A tira B, B tira C, C tira A
    const updates = shuffled.map((p, index) => {
      const nextParticipant = index === shuffled.length - 1 ? shuffled[0] : shuffled[index + 1];
      return {
        id: p.id,
        drawn_participant_id: nextParticipant.id,
      };
    });

    const headers = await this.buildHeaders();

    // Cada participante é atualizado individualmente via PATCH no PostgREST.
    // Disparamos em paralelo com Promise.all (cada update é independente).
    const requests = updates.map((u) =>
      fetch(`${this.baseUrl}/participants?id=eq.${u.id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ drawn_participant_id: u.drawn_participant_id }),
      })
    );

    const results = await Promise.all(requests);
    const falha = results.find((r) => !r.ok);
    if (falha) {
      await this.ensureOk(falha, 'Erro ao realizar o sorteio');
    }
  }

  private async buildAdminHeaders(extra: HeadersInit = {}): Promise<HeadersInit> {
    const serviceRoleKey = (environment as any).supabaseServiceRoleKey;
    return {
      apikey: environment.supabaseKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      ...extra,
    };
  }

  /** Busca todos os convites pendentes de um determinado e-mail. */
  async listInvitations(email: string): Promise<(Participant & { event_name?: string })[]> {
    const headers = await this.buildAdminHeaders();
    const res = await fetch(
      `${this.baseUrl}/participants?email=eq.${encodeURIComponent(email.trim().toLowerCase())}&status=eq.pending&select=*,events(name)`,
      { headers }
    );
    await this.ensureOk(res, 'Erro ao buscar convites');
    const rows = await res.json();
    return rows.map((row: any) => ({
      ...row,
      event_name: row.events?.name || 'Sorteio Sem Nome',
    }));
  }

  /** Aceita um convite alterando o status para 'joined'. */
  async acceptInvitation(participantId: string): Promise<void> {
    const headers = await this.buildAdminHeaders();
    const res = await fetch(`${this.baseUrl}/participants?id=eq.${participantId}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ status: 'joined' }),
    });
    await this.ensureOk(res, 'Erro ao aceitar convite');
  }

  /**
   * Busca todos os eventos em que o usuário participa como convidado aceito.
   * Usa service role para contornar o RLS (que filtraria apenas eventos do owner).
   */
  async listParticipatingEvents(email: string): Promise<SecretSantaEvent[]> {
    const headers = await this.buildAdminHeaders();
    const res = await fetch(
      `${this.baseUrl}/participants?email=eq.${encodeURIComponent(email.trim().toLowerCase())}&status=eq.joined&select=events(*)`,
      { headers }
    );
    await this.ensureOk(res, 'Erro ao buscar eventos participados');
    const rows = (await res.json()) as { events: SecretSantaEvent }[];
    return rows.map((r) => r.events).filter(Boolean);
  }

  /** Recusa um convite removendo o participante do sorteio. */
  async declineInvitation(participantId: string): Promise<void> {
    const headers = await this.buildAdminHeaders();
    const res = await fetch(`${this.baseUrl}/participants?id=eq.${participantId}`, {
      method: 'DELETE',
      headers,
    });
    await this.ensureOk(res, 'Erro ao recusar convite');
  }
}
