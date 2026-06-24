import { Component, signal, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { AuthService } from '../../core/services/auth.service';
import { EventService, SecretSantaEvent } from '../../core/services/event.service';
import { ParticipantService } from '../../core/services/participant.service';
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
  private participantService = inject(ParticipantService);
  private router = inject(Router);

  sidenavOpen = signal(false);

  /** Eventos criados pelo usuário. */
  events = signal<SecretSantaEvent[]>([]);
  /** Eventos em que o usuário foi convidado e aceitou. */
  participatingEvents = signal<SecretSantaEvent[]>([]);

  loading = signal(true);
  errorMessage = signal<string | null>(null);

  async ngOnInit() {
    await this.loadEvents();
  }

  private async loadEvents() {
    this.loading.set(true);
    this.errorMessage.set(null);
    try {
      const user = this.authService.currentUser();
      const [owned, participating] = await Promise.all([
        this.eventService.listMyEvents(),
        user?.email ? this.participantService.listParticipatingEvents(user.email) : Promise.resolve([]),
      ]);

      this.events.set(owned);
      // Remove eventos que o próprio usuário criou (caso ele seja dono e participante)
      const ownedIds = new Set(owned.map((e) => e.id));
      this.participatingEvents.set(participating.filter((e) => !ownedIds.has(e.id)));
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
