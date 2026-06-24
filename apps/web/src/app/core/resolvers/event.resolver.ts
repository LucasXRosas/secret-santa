import { ResolveFn } from '@angular/router';
import { of, delay } from 'rxjs';

// Exemplo de Functional Resolver para Eventos
export const eventResolver: ResolveFn<any> = (route, state) => {
  const eventId = route.paramMap.get('id');
  
  console.log('[Resolver] Carregando dados do evento:', eventId);
  
  // Aqui faríamos a chamada para o EventService para buscar o evento do Supabase.
  // Por enquanto, simulamos uma requisição de rede com um mock.
  return of({
    id: eventId,
    title: `Sorteio de Natal ${eventId}`,
    description: 'Sorteio com a família e amigos.'
  }).pipe(delay(500));
};
