import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { EventService, SecretSantaEvent } from '../services/event.service';

/**
 * [ID19] Functional Resolver — pré-carrega o evento do Supabase antes da rota abrir.
 * O Angular aguarda a Promise resolver antes de instanciar EventDetailComponent,
 * eliminando o flash de "Carregando..." na tela.
 */
export const eventResolver: ResolveFn<SecretSantaEvent | null> = async (route) => {
  const eventService = inject(EventService);
  const id = route.paramMap.get('id');
  if (!id) return null;

  try {
    return await eventService.getEvent(id);
  } catch {
    return null;
  }
};
