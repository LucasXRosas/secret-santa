import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
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
  /** [ID23] HttpClient permite que os Functional Interceptors (auth + error) atuem nas requisições. */
  private http = inject(HttpClient);

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

  /**
   * Lista os eventos do usuário logado, dos mais recentes para os mais antigos.
   * [ID23] Usa HttpClient para que o authInterceptor injete o Bearer token automaticamente
   * e o errorInterceptor trate erros 401/403/500 de forma centralizada.
   */
  async listMyEvents(): Promise<SecretSantaEvent[]> {
    return firstValueFrom(
      this.http.get<SecretSantaEvent[]>(
        `${this.baseUrl}/events?select=*&order=created_at.desc`,
        { headers: { apikey: environment.supabaseKey } }
      )
    );
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

  /** Atualiza um evento existente. */
  async updateEvent(id: string, event: Partial<NewEvent>): Promise<SecretSantaEvent> {
    const body: Record<string, unknown> = {};
    if (event.name !== undefined) body['name'] = event.name;
    if (event.budget !== undefined) body['budget'] = event.budget ?? null;
    if (event.draw_date !== undefined) body['draw_date'] = event.draw_date ?? null;
    if (event.organizer_name !== undefined) body['organizer_name'] = event.organizer_name?.trim() || null;
    if (event.location !== undefined) body['location'] = event.location?.trim() || null;

    const res = await fetch(`${this.baseUrl}/events?id=eq.${id}`, {
      method: 'PATCH',
      headers: await this.buildHeaders({ Prefer: 'return=representation' }),
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`Erro ao atualizar evento: ${res.status} ${res.statusText}`);
    }
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
