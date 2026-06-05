import { Component, inject, signal, computed, input, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { SidenavComponent } from '../../../components/sidenav/sidenav.component';
import { EventService, SecretSantaEvent } from '../../../core/services/event.service';
import { ParticipantService, Participant } from '../../../core/services/participant.service';
import { BrlCurrencyPipe } from '../../../shared/pipes/brl-currency.pipe';
import { RelativeDatePipe } from '../../../shared/pipes/relative-date.pipe';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, HeaderComponent, FooterComponent, SidenavComponent, BrlCurrencyPipe, RelativeDatePipe],
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent {
  private fb = inject(FormBuilder);
  private eventService = inject(EventService);
  private participantService = inject(ParticipantService);

  /** Controla a abertura do menu lateral. */
  sidenavOpen = signal(false);

  /**
   * [ID17] input() signal: o Router injeta o parâmetro :id da URL diretamente
   * aqui via withComponentInputBinding(). Não é mais necessário usar ActivatedRoute.
   * O nome da propriedade deve ser idêntico ao param da rota ('id').
   */
  id = input.required<string>();

  event = signal<SecretSantaEvent | null>(null);
  participants = signal<Participant[]>([]);
  loading = signal(true);
  errorMessage = signal<string | null>(null);

  /** Estado do formulário de convite. */
  inviting = signal(false);
  inviteError = signal<string | null>(null);

  /** Quantidade de convidados (usada no título "Pendentes"). */
  pendingCount = computed(() => this.participants().length);

  /** Link mágico para entrar no sorteio (copiável). */
  magicLink = computed(() =>
    this.id() ? `${location.origin}/join/${this.id()}` : ''
  );
  linkCopied = signal(false);

  inviteForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor() {
    /**
     * [ID13] effect(): reage de forma segura ao signal id().
     * Sempre que o parâmetro de rota mudar (ex: navegação entre eventos),
     * o efeito dispara e recarrega os dados — sem ciclo de vida manual (ngOnInit).
     * É o mecanismo correto para efeitos colaterais reativos em Angular Signals.
     */
    effect(() => {
      const eventId = this.id();
      if (eventId) {
        this.loadAll(eventId);
      }
    });
  }

  private async loadAll(eventId: string) {
    this.loading.set(true);
    this.errorMessage.set(null);
    try {
      const [event, participants] = await Promise.all([
        this.eventService.getEvent(eventId),
        this.participantService.listByEvent(eventId),
      ]);
      if (!event) {
        this.errorMessage.set('Evento não encontrado.');
      }
      this.event.set(event);
      this.participants.set(participants);
    } catch (error: any) {
      console.error('Erro ao carregar evento:', error);
      this.errorMessage.set(error?.message || 'Não foi possível carregar o evento.');
    } finally {
      this.loading.set(false);
    }
  }

  async addParticipant() {
    if (this.inviteForm.invalid) {
      this.inviteForm.markAllAsTouched();
      return;
    }

    this.inviting.set(true);
    this.inviteError.set(null);
    try {
      const email = this.inviteForm.getRawValue().email;
      const novo = await this.participantService.invite(this.id(), email);
      this.participants.update((list) => [novo, ...list]);
      this.inviteForm.reset();
    } catch (error: any) {
      console.error('Erro ao convidar:', error);
      const detalhe =
        error?.code === '23505'
          ? 'Esse e-mail já foi convidado para este sorteio.'
          : error?.message || 'Erro desconhecido';
      this.inviteError.set(detalhe);
    } finally {
      this.inviting.set(false);
    }
  }

  async removeParticipant(participant: Participant) {
    try {
      await this.participantService.remove(participant.id);
      this.participants.update((list) => list.filter((p) => p.id !== participant.id));
    } catch (error) {
      console.error('Erro ao remover participante:', error);
    }
  }

  async copyMagicLink() {
    try {
      await navigator.clipboard.writeText(this.magicLink());
      this.linkCopied.set(true);
      setTimeout(() => this.linkCopied.set(false), 2000);
    } catch (error) {
      console.error('Erro ao copiar link:', error);
    }
  }
}

