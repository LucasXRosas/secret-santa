import { Component, output, inject, signal, computed, effect } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ParticipantService, Participant } from '../../core/services/participant.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
})
export class HeaderComponent {
  readonly toggleSidenav = output<void>();

  private authService = inject(AuthService);
  private participantService = inject(ParticipantService);
  private router = inject(Router);
  private toastService = inject(ToastService);

  // Estado de autenticação vindo do AuthService
  readonly isAuthenticated = this.authService.isAuthenticated;

  // Controla a abertura da caixinha de perfil
  readonly isProfileOpen = signal(false);

  // Controla a caixinha de convites
  readonly isInvitationsOpen = signal(false);

  // Lista de convites pendentes
  readonly invitations = signal<(Participant & { event_name?: string })[]>([]);

  // Inicial exibida no ícone de perfil (primeira letra do nome ou e-mail)
  readonly userInitial = computed(() => {
    const user = this.authService.currentUser();
    const source = (user?.user_metadata?.['name'] as string) || user?.email || '?';
    return source.charAt(0).toUpperCase();
  });

  constructor() {
    effect(() => {
      const user = this.authService.currentUser();
      if (user && user.email) {
        this.loadInvitations(user.email);
      } else {
        this.invitations.set([]);
      }
    });
  }

  async loadInvitations(email: string) {
    try {
      const list = await this.participantService.listInvitations(email);
      this.invitations.set(list);
    } catch (error) {
      console.error('Erro ao carregar convites:', error);
    }
  }

  toggleInvitations() {
    this.isInvitationsOpen.update((open) => !open);
    if (this.isInvitationsOpen()) {
      this.isProfileOpen.set(false);
    }
  }

  closeInvitations() {
    this.isInvitationsOpen.set(false);
  }

  async acceptInvite(inviteId: string) {
    try {
      await this.participantService.acceptInvitation(inviteId);
      this.closeInvitations();
      this.toastService.showAfterReload('Você entrou no sorteio! 🎉', 'success');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao aceitar convite:', error);
      this.toastService.error('Não foi possível aceitar o convite.');
    }
  }

  async declineInvite(inviteId: string) {
    try {
      await this.participantService.declineInvitation(inviteId);
      this.invitations.update((list) => list.filter((i) => i.id !== inviteId));
      this.closeInvitations();
      this.toastService.info('Convite recusado.');
    } catch (error) {
      console.error('Erro ao recusar convite:', error);
      this.toastService.error('Não foi possível recusar o convite.');
    }
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  toggleProfile() {
    this.isProfileOpen.update((open) => !open);
    if (this.isProfileOpen()) {
      this.isInvitationsOpen.set(false);
    }
  }

  closeProfile() {
    this.isProfileOpen.set(false);
  }

  goToDashboard() {
    this.closeProfile();
    this.router.navigate(['/dashboard']);
  }

  async logout() {
    this.closeProfile();
    await this.authService.signOut();
    this.router.navigate(['/home']);
  }
}
