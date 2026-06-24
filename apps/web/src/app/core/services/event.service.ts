import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

/** Um evento de amigo secreto, como está gravado na tabela `events`. */
export interface SecretSantaEvent {
  id: string;
  owner_id: string;
  name: string;
  budget: number | null;
  draw_date: string | null; // ISO date (yyyy-MM-dd)
  created_at: string;
  organizer_name: string | null;
  location: string | null;
}

/** Dados necessários para criar um novo evento (owner e created_at são preenchidos automaticamente). */
export interface NewEvent {
  name: string;
  budget?: number | null;
  draw_date?: string | null;
  organizer_name?: string | null;
  location?: string | null;
}

/**
 * [ID20] EventService — fala com a API REST do Supabase (PostgREST) usando a
 * API NATIVA `fetch` + `async/await`, sem o SDK supabase-js nas queries de dados.
 *
 * O Supabase expõe cada tabela como um endpoint REST em /rest/v1/<tabela>.
 * O SDK é apenas um embrulho sobre isso; aqui chamamos o HTTP diretamente para
 * deixar a requisição assíncrona explícita (critério ID20).
 */
@Injectable({
  providedIn: 'root',
})
export class EventService {
  private authService = inject(AuthService);

  /** Base do PostgREST: https://<projeto>.supabase.co/rest/v1 */
  private readonly baseUrl = `${environment.supabaseUrl}/rest/v1`;

  /**
   * Headers exigidos pelo PostgREST:
   * - apikey: a anon key do projeto (identifica a aplicação).
   * - Authorization: Bearer <JWT do usuário> para que o RLS reconheça quem está logado.
   * - Content-Type: JSON nas escritas.
   */
  private async buildHeaders(extra: HeadersInit = {}): Promise<HeadersInit> {
    const token = await this.authService.getAccessToken();
    return {
      apikey: environment.supabaseKey,
      Authorization: `Bearer ${token ?? environment.supabaseKey}`,
      'Content-Type': 'application/json',
      ...extra,
    };
  }

  /** Busca um único evento pelo id (respeitando o RLS do usuário logado). */
  async getEvent(id: string): Promise<SecretSantaEvent | null> {
    const res = await fetch(
      `${this.baseUrl}/events?id=eq.${id}&select=*`,
      { headers: await this.buildHeaders() }
    );
    if (!res.ok) {
      throw new Error(`Erro ao buscar evento: ${res.status} ${res.statusText}`);
    }
    const rows = (await res.json()) as SecretSantaEvent[];
    return rows[0] ?? null;
  }

  /** Lista os eventos do usuário logado, dos mais recentes para os mais antigos. */
  async listMyEvents(): Promise<SecretSantaEvent[]> {
    const res = await fetch(
      `${this.baseUrl}/events?select=*&order=created_at.desc`,
      { headers: await this.buildHeaders() }
    );
    if (!res.ok) {
      throw new Error(`Erro ao listar eventos: ${res.status} ${res.statusText}`);
    }
    return (await res.json()) as SecretSantaEvent[];
  }

  /** Cria um novo evento para o usuário logado. */
  async createEvent(event: NewEvent): Promise<SecretSantaEvent> {
    const user = this.authService.currentUser();
    if (!user) {
      throw new Error('É preciso estar logado para criar um evento.');
    }

    const res = await fetch(`${this.baseUrl}/events`, {
      method: 'POST',
      // Prefer: return=representation faz o PostgREST devolver a linha criada.
      headers: await this.buildHeaders({ Prefer: 'return=representation' }),
      body: JSON.stringify({
        owner_id: user.id,
        name: event.name,
        budget: event.budget ?? null,
        draw_date: event.draw_date ?? null,
        organizer_name: event.organizer_name?.trim() || null,
        location: event.location?.trim() || null,
      }),
    });

    if (!res.ok) {
      throw new Error(`Erro ao criar evento: ${res.status} ${res.statusText}`);
    }
    // PostgREST devolve um array com a(s) linha(s) afetada(s).
    const rows = (await res.json()) as SecretSantaEvent[];
    return rows[0];
  }

  /** Exclui um evento existente. */
  async deleteEvent(id: string): Promise<void> {
    const res = await fetch(`${this.baseUrl}/events?id=eq.${id}`, {
      method: 'DELETE',
      headers: await this.buildHeaders(),
    });
    if (!res.ok) {
      throw new Error(`Erro ao excluir evento: ${res.status} ${res.statusText}`);
    }
  }
}
