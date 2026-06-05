import { Component, model, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.html',
})
export class SidenavComponent {
  /**
   * [ID12] model() cria um signal de two-way data binding.
   * O componente pai usa [(isOpen)]="sidenavOpen" para sincronização bidirecional:
   * - Leitura: isOpen() → boolean
   * - Escrita: isOpen.set(false) → atualiza o signal no pai automaticamente
   */
  isOpen = model(false);

  private authService = inject(AuthService);
  private router = inject(Router);

  readonly isAuthenticated = this.authService.isAuthenticated;

  onClose() {
    // Atualiza o signal bidirecional — o pai recebe a mudança sem @Output
    this.isOpen.set(false);
  }

  async logout() {
    this.onClose();
    await this.authService.signOut();
    this.router.navigate(['/home']);
  }
}

