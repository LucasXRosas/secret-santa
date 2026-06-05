import { Component, signal, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { AuthService } from '../../core/services/auth.service';
import { EventService, SecretSantaEvent } from '../../core/services/event.service';
import { BrlCurrencyPipe } from '../../shared/pipes/brl-currency.pipe';
import { RelativeDatePipe } from '../../shared/pipes/relative-date.pipe';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, FooterComponent, SidenavComponent, BrlCurrencyPipe, RelativeDatePipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  protected authService = inject(AuthService);
  private eventService = inject(EventService);
  private router = inject(Router);

  /** Controla a abertura do menu lateral (mesmo padrão da home). */
  sidenavOpen = signal(false);

  /** Eventos do usuário carregados do banco. */
  events = signal<SecretSantaEvent[]>([]);
  loading = signal(true);
  errorMessage = signal<string | null>(null);

  async ngOnInit() {
    await this.loadEvents();
  }

  private async loadEvents() {
    this.loading.set(true);
    this.errorMessage.set(null);
    try {
      this.events.set(await this.eventService.listMyEvents());
    } catch (error) {
      console.error('Erro ao carregar eventos:', error);
      this.errorMessage.set('Não foi possível carregar seus eventos.');
    } finally {
      this.loading.set(false);
    }
  }

  novoEvento() {
    this.router.navigate(['/eventos/novo']);
  }

  abrirEvento(event: SecretSantaEvent) {
    this.router.navigate(['/eventos', event.id]);
  }

  async logout() {
    try {
      await this.authService.signOut();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }
}
