import { Injectable } from '@angular/core';
import { SecretSantaEvent, NewEvent } from './event.service';

/**
 * [ID20] MockEventService — conecta-se à API Mock local do json-server
 * usando a API nativa `fetch` do JavaScript (sem HttpClient, sem Supabase).
 *
 * Para usar este service, inicie o json-server:
 *   npx json-server db.json --port 3001
 *
 * Endpoint base: http://localhost:3001/events
 *
 * Este service é paralelo ao EventService (Supabase) e serve para demonstrar
 * o critério ID20: requisições assíncronas com fetch nativo conectado a uma API Mock.
 */
@Injectable({
  providedIn: 'root',
})
export class MockEventService {
  private readonly baseUrl = 'http://localhost:3001/events';

  /**
   * [ID20] Lista todos os eventos do mock.
   * Usa fetch nativo com async/await e trata erros HTTP explicitamente.
   */
  async list(): Promise<SecretSantaEvent[]> {
    const response = await fetch(this.baseUrl);
    if (!response.ok) {
      throw new Error(`Erro ao listar eventos mock: ${response.status} ${response.statusText}`);
    }
    return response.json() as Promise<SecretSantaEvent[]>;
  }

  /**
   * [ID20] Busca um único evento pelo id.
   */
  async getById(id: string): Promise<SecretSantaEvent | null> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (response.status === 404) return null;
    if (!response.ok) {
      throw new Error(`Erro ao buscar evento mock: ${response.status} ${response.statusText}`);
    }
    return response.json() as Promise<SecretSantaEvent>;
  }

  /**
   * [ID20] Cria um novo evento no mock via POST com body JSON.
   */
  async create(payload: NewEvent): Promise<SecretSantaEvent> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        owner_id: 'user-mock',
        created_at: new Date().toISOString(),
      }),
    });
    if (!response.ok) {
      throw new Error(`Erro ao criar evento mock: ${response.status} ${response.statusText}`);
    }
    return response.json() as Promise<SecretSantaEvent>;
  }

  /**
   * [ID20] Remove um evento do mock via DELETE.
   */
  async remove(id: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error(`Erro ao remover evento mock: ${response.status} ${response.statusText}`);
    }
  }
}
