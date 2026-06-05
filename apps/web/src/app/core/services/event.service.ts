import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';

/** Um evento de amigo secreto, como está gravado na tabela `events`. */
export interface SecretSantaEvent {
  id: string;
  owner_id: string;
  name: string;
  budget: number | null;
  draw_date: string | null; // ISO date (yyyy-MM-dd)
  created_at: string;
}

/** Dados necessários para criar um novo evento (owner e created_at são preenchidos automaticamente). */
export interface NewEvent {
  name: string;
  budget?: number | null;
  draw_date?: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private authService = inject(AuthService);

  /** Garante que o Supabase está configurado antes de qualquer query. */
  private getClient() {
    const client = this.authService.client;
    if (!client) {
      throw new Error('Supabase não configurado. Verifique o environment.');
    }
    return client;
  }

  /** Busca um único evento pelo id (respeitando o RLS do usuário logado). */
  async getEvent(id: string): Promise<SecretSantaEvent | null> {
    const { data, error } = await this.getClient()
      .from('events')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw error;
    return (data as SecretSantaEvent) ?? null;
  }

  /** Lista os eventos do usuário logado, dos mais recentes para os mais antigos. */
  async listMyEvents(): Promise<SecretSantaEvent[]> {
    const { data, error } = await this.getClient()
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data ?? []) as SecretSantaEvent[];
  }

  /** Cria um novo evento para o usuário logado. */
  async createEvent(event: NewEvent): Promise<SecretSantaEvent> {
    const user = this.authService.currentUser();
    if (!user) {
      throw new Error('É preciso estar logado para criar um evento.');
    }

    const { data, error } = await this.getClient()
      .from('events')
      .insert({
        owner_id: user.id,
        name: event.name,
        budget: event.budget ?? null,
        draw_date: event.draw_date ?? null,
      })
      .select()
      .single();

    if (error) throw error;
    return data as SecretSantaEvent;
  }
}
