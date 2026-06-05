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
  drawn_participant_id?: string | null;
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
        event_id: eventId, // Necessário para a política RLS (se aplicável ao UPDATE em lote) ou validações
        drawn_participant_id: nextParticipant.id,
      };
    });

    const client = this.getClient();
    // Como a API REST do Supabase para UPSERT/UPDATE em lote exige todas as chaves
    // necessárias para o Row Level Security passar, e cada participante é individual,
    // a forma mais segura no MVP é fazer as requisições em paralelo.
    const promises = updates.map(u => 
      client.from('participants')
        .update({ drawn_participant_id: u.drawn_participant_id })
        .eq('id', u.id)
    );

    const results = await Promise.all(promises);
    
    // Verifica se houve algum erro
    const errorResult = results.find(r => r.error != null);
    if (errorResult?.error) {
      throw errorResult.error;
    }
  }
}
