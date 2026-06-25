import { Component, inject, signal, computed, input, effect } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { SidenavComponent } from '../../../components/sidenav/sidenav.component';
import { EventService, SecretSantaEvent } from '../../../core/services/event.service';
import { ParticipantService, Participant } from '../../../core/services/participant.service';
import { BrlCurrencyPipe } from '../../../shared/pipes/brl-currency.pipe';
import { RelativeDatePipe } from '../../../shared/pipes/relative-date.pipe';
import { ToastService } from '../../../core/services/toast.service';
import { AuthService } from '../../../core/services/auth.service';

const DRAW_NOTIFICATIONS_KEY = 'wd_draw_notifications';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    BrlCurrencyPipe,
    RelativeDatePipe,
  ],
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent {
  private fb = inject(FormBuilder);
  private eventService = inject(EventService);
  private participantService = inject(ParticipantService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private toastService = inject(ToastService);

  /** Controla a abertura do menu lateral. */
  sidenavOpen = signal(false);

  id = input.required<string>();

  /** [ID19] Dado pré-carregado pelo eventResolver antes da rota abrir. */
  eventData = input<SecretSantaEvent | null>(null);

  event = signal<SecretSantaEvent | null>(null);
  participants = signal<Participant[]>([]);
  loading = signal(true);
  errorMessage = signal<string | null>(null);

  /** Estado do formulário de convite. */
  inviting = signal(false);
  inviteError = signal<string | null>(null);

  /** Estado do sorteio */
  drawing = signal(false);

  /** Estado do Modal de Revelação (Passa o Celular) */
  showRevealModal = signal(false);
  revealedParticipant = signal<Participant | null>(null);
  revealStep = signal<'warning' | 'result'>('warning');

  /** Quantidade de convidados (usada no título "Pendentes"). */
  pendingCount = computed(() => this.participants().length);

  /** Indica se o sorteio já foi realizado (pelo menos um com drawn_participant_id) */
  hasDrawn = computed(() => this.participants().some((p) => p.drawn_participant_id != null));

  /** [ID21] O usuário logado é o dono deste evento? Controla visibilidade de editar/excluir. */
  isOwner = computed(() => {
    const ev = this.event();
    const user = this.authService.currentUser();
    return !!ev && !!user && ev.owner_id === user.id;
  });

  /** Email do usuário logado, para identificar qual card de participante é "meu". */
  currentUserEmail = computed(() => this.authService.currentUser()?.email ?? '');

  /** Link mágico para entrar no sorteio (copiável). */
  magicLink = computed(() => (this.id() ? `${location.origin}/join/${this.id()}` : ''));
  linkCopied = signal(false);

  inviteForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  /** Estado e formulário de edição do evento */
  showEditModal = signal(false);
  updating = signal(false);
  editForm = this.fb.group({
    name: this.fb.control<string>('', { validators: [Validators.required], nonNullable: true }),
    budget: this.fb.control<number | null>(null),
    draw_date: this.fb.control<string | null>(null),
    location: this.fb.control<string | null>(null),
  });

  constructor() {
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
      // [ID19] Usa dado pré-carregado pelo resolver para evitar requisição dupla.
      // Se o resolver retornou null (rota digitada manualmente, etc.), busca do Supabase.
      const resolvedEvent = this.eventData();
      const [event, participants] = await Promise.all([
        resolvedEvent ? Promise.resolve(resolvedEvent) : this.eventService.getEvent(eventId),
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
      this.toastService.success(`Convite enviado para ${email}! 🎁`);
    } catch (error: any) {
      console.error('Erro ao convidar:', error);
      const detalhe =
        error?.code === '23505'
          ? 'Esse e-mail já foi convidado para este sorteio.'
          : error?.message || 'Erro desconhecido';
      this.inviteError.set(detalhe);
      this.toastService.error(detalhe);
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

  async deleteEvent() {
    if (
      !confirm('Tem certeza de que deseja excluir este sorteio? Esta ação não pode ser desfeita.')
    ) {
      return;
    }

    try {
      await this.eventService.deleteEvent(this.id());
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Erro ao excluir evento:', error);
      alert('Não foi possível excluir o evento.');
    }
  }

  openEditModal() {
    const current = this.event();
    if (current) {
      this.editForm.patchValue({
        name: current.name,
        budget: current.budget,
        draw_date: current.draw_date,
        location: current.location,
      });
      this.showEditModal.set(true);
    }
  }

  closeEditModal() {
    this.showEditModal.set(false);
  }

  async updateEventDetails() {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }

    this.updating.set(true);
    try {
      const values = this.editForm.getRawValue();
      const updatedEvent = await this.eventService.updateEvent(this.id(), {
        name: values.name,
        budget: values.budget,
        draw_date: values.draw_date,
        location: values.location,
      });
      this.event.set(updatedEvent);
      this.closeEditModal();
    } catch (error) {
      console.error('Erro ao atualizar evento:', error);
      alert('Não foi possível atualizar o evento.');
    } finally {
      this.updating.set(false);
    }
  }

  async fazerSorteio() {
    if (this.participants().length < 3) {
      alert('É necessário ter pelo menos 3 participantes para realizar o sorteio.');
      return;
    }

    if (
      !confirm(
        'Deseja realmente realizar o sorteio? Após sorteado, você não poderá adicionar ou remover participantes.',
      )
    ) {
      return;
    }

    this.drawing.set(true);
    try {
      await this.participantService.performDraw(this.id(), this.participants());
      await this.loadAll(this.id());
      this.toastService.success(`Sorteio de "${this.event()?.name}" realizado! 🎉`);
      // Persiste notificação no localStorage para aparecer na caixa do header
      const stored = JSON.parse(localStorage.getItem(DRAW_NOTIFICATIONS_KEY) ?? '[]');
      stored.push({ eventId: this.id(), eventName: this.event()?.name ?? 'Sorteio', ts: Date.now() });
      localStorage.setItem(DRAW_NOTIFICATIONS_KEY, JSON.stringify(stored));
    } catch (error: any) {
      console.error('Erro ao realizar o sorteio:', error);
      alert('Não foi possível realizar o sorteio: ' + (error?.message || 'Erro desconhecido.'));
    } finally {
      this.drawing.set(false);
    }
  }

  getDrawnEmail(drawnId: string | null | undefined): string {
    if (!drawnId) return '';
    const participant = this.participants().find((p) => p.id === drawnId);
    return participant ? participant.name || participant.email : 'Desconhecido';
  }

  openRevealModal(participant: Participant) {
    this.revealedParticipant.set(participant);
    this.revealStep.set('warning');
    this.showRevealModal.set(true);
  }

  confirmIdentity() {
    this.revealStep.set('result');
  }

  closeRevealModal() {
    this.showRevealModal.set(false);
    // Pequeno delay para limpar os dados após a animação de saída (se houver)
    setTimeout(() => {
      this.revealedParticipant.set(null);
      this.revealStep.set('warning');
    }, 200);
  }

  async copyMagicLink() {
    try {
      await navigator.clipboard.writeText(this.magicLink());
      this.linkCopied.set(true);
      this.toastService.success('Link copiado para a área de transferência!');
      setTimeout(() => this.linkCopied.set(false), 2000);
    } catch (error) {
      console.error('Erro ao copiar link:', error);
      this.toastService.error('Não foi possível copiar o link.');
    }
  }
}
