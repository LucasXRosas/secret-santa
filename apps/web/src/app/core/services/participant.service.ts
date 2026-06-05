import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';

/** Um participante convidado para um sorteio, como gravado na tabela `participants`. */
export interface Participant {
  id: string;
  event_id: string;
  email: string;
  name: string | null;
  status: 'pending' | 'joined';
  invited_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  private authService = inject(AuthService);

  private getClient() {
    const client = this.authService.client;
    if (!client) {
      throw new Error('Supabase não configurado. Verifique o environment.');
    }
    return client;
  }

  /** Lista os participantes de um evento, dos mais recentes para os mais antigos. */
  async listByEvent(eventId: string): Promise<Participant[]> {
    const { data, error } = await this.getClient()
      .from('participants')
      .select('*')
      .eq('event_id', eventId)
      .order('invited_at', { ascending: false });

    if (error) throw error;
    return (data ?? []) as Participant[];
  }

  /** Convida (adiciona) um participante por e-mail. */
  async invite(eventId: string, email: string, name?: string): Promise<Participant> {
    const { data, error } = await this.getClient()
      .from('participants')
      .insert({
        event_id: eventId,
        email: email.trim().toLowerCase(),
        name: name?.trim() || null,
      })
      .select()
      .single();

    if (error) throw error;
    return data as Participant;
  }

  /** Remove um participante do evento. */
  async remove(participantId: string): Promise<void> {
    const { error } = await this.getClient()
      .from('participants')
      .delete()
      .eq('id', participantId);

    if (error) throw error;
  }
}
