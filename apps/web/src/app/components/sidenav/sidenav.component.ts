import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.html',
})
export class SidenavComponent {
  @Input() isOpen = false;
  @Output() closeSidenav = new EventEmitter<void>();

  private authService = inject(AuthService);
  private router = inject(Router);

  readonly isAuthenticated = this.authService.isAuthenticated;

  onClose() {
    this.closeSidenav.emit();
  }

  async logout() {
    this.onClose();
    await this.authService.signOut();
    this.router.navigate(['/home']);
  }
}
