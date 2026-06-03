import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = signal('');
  password = signal('');
  
  // Modal de registro
  isRegisterModalOpen = signal(false);
  
  // Campos de registro
  registerName = signal('');
  registerEmail = signal('');
  registerPassword = signal('');
  registerConfirmPassword = signal('');

  // Estados de loading
  isLoggingIn = signal(false);
  isRegistering = signal(false);

  toggleRegisterModal() {
    this.isRegisterModalOpen.update(v => !v);
  }

  async onLogin() {
    const emailValue = this.email().trim();
    const passwordValue = this.password();
    if (!emailValue || !passwordValue) return;
    
    this.isLoggingIn.set(true);
    try {
      await this.authService.signIn(emailValue, passwordValue);
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Erro ao realizar login:', error);
    } finally {
      this.isLoggingIn.set(false);
    }
  }

  async onRegister() {
    const emailValue = this.registerEmail().trim();
    const nameValue = this.registerName().trim();
    const passwordValue = this.registerPassword();
    
    if (!nameValue || !emailValue || !passwordValue) return;
    if (passwordValue !== this.registerConfirmPassword()) {
      return;
    }

    this.isRegistering.set(true);
    try {
      await this.authService.signUp(emailValue, passwordValue, nameValue);
      this.isRegisterModalOpen.set(false);
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Erro ao realizar cadastro:', error);
    } finally {
      this.isRegistering.set(false);
    }
  }
}
