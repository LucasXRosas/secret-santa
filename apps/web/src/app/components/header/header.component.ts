import { Component, output, inject, signal, computed } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
})
export class HeaderComponent {
  readonly toggleSidenav = output<void>();

  private authService = inject(AuthService);
  private router = inject(Router);

  // Estado de autenticação vindo do AuthService
  readonly isAuthenticated = this.authService.isAuthenticated;

  // Controla a abertura da caixinha de perfil
  readonly isProfileOpen = signal(false);

  // Inicial exibida no ícone de perfil (primeira letra do nome ou e-mail)
  readonly userInitial = computed(() => {
    const user = this.authService.currentUser();
    const source = (user?.user_metadata?.['name'] as string) || user?.email || '?';
    return source.charAt(0).toUpperCase();
  });

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  toggleProfile() {
    this.isProfileOpen.update((open) => !open);
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
