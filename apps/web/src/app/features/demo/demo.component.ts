import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { MockEventService } from '../../core/services/mock-event.service';
import { SecretSantaEvent } from '../../core/services/event.service';
import { BrlCurrencyPipe } from '../../shared/pipes/brl-currency.pipe';
import { RelativeDatePipe } from '../../shared/pipes/relative-date.pipe';

/**
 * [ID20] Página de demonstração do json-server.
 *
 * Esta tela consome a API Mock local (json-server, porta 3001) através do
 * MockEventService, que usa `fetch` nativo + async/await. É o "espelho mock"
 * do app real (que fala com o Supabase): mesma técnica de fetch, outra origem
 * de dados. Para funcionar, rode `npm run dev:api` em paralelo ao `ng serve`.
 */
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidenavComponent, BrlCurrencyPipe, RelativeDatePipe],
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  private mockService = inject(MockEventService);

  /** [ID12] menu lateral via model() — mesmo padrão das demais telas. */
  sidenavOpen = signal(false);

  /** Estado da tela, todo em Signals (ID10). */
  events = signal<SecretSantaEvent[]>([]);
  loading = signal(true);
  errorMessage = signal<string | null>(null);

  /** Campo do formulário de criação (one-way + event binding manual). */
  newName = signal('');
  saving = signal(false);

  constructor() {
    this.load();
  }

  /** [ID20] Lê os eventos do json-server via fetch nativo. */
  private async load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    try {
      this.events.set(await this.mockService.list());
    } catch (error) {
      console.error('Erro ao carregar eventos do json-server:', error);
      this.errorMessage.set(
        'Não foi possível falar com o json-server. Rode "npm run dev:api" na porta 3001.'
      );
    } finally {
      this.loading.set(false);
    }
  }

  /** [ID20] Cria um evento no json-server via fetch (POST). */
  async addEvent() {
    const name = this.newName().trim();
    if (!name) return;

    this.saving.set(true);
    try {
      const novo = await this.mockService.create({ name, budget: null, draw_date: null });
      this.events.update((list) => [novo, ...list]);
      this.newName.set('');
    } catch (error) {
      console.error('Erro ao criar evento mock:', error);
      this.errorMessage.set('Não foi possível criar o evento no json-server.');
    } finally {
      this.saving.set(false);
    }
  }

  /** [ID20] Remove um evento do json-server via fetch (DELETE). */
  async removeEvent(event: SecretSantaEvent) {
    try {
      await this.mockService.remove(event.id);
      this.events.update((list) => list.filter((e) => e.id !== event.id));
    } catch (error) {
      console.error('Erro ao remover evento mock:', error);
    }
  }
}
