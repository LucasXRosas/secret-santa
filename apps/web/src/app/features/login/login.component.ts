import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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

  onLogin() {
    if (!this.email() || !this.password()) return;
    
    this.isLoggingIn.set(true);
    // Simulação temporária (frontend apenas por enquanto)
    setTimeout(() => {
      this.isLoggingIn.set(false);
      alert('Login simulado com sucesso (apenas frontend por enquanto)!');
    }, 1500);
  }

  onRegister() {
    if (!this.registerName() || !this.registerEmail() || !this.registerPassword()) return;
    if (this.registerPassword() !== this.registerConfirmPassword()) {
      alert('As senhas não coincidem!');
      return;
    }

    this.isRegistering.set(true);
    // Simulação temporária (frontend apenas por enquanto)
    setTimeout(() => {
      this.isRegistering.set(false);
      this.isRegisterModalOpen.set(false);
      alert('Cadastro simulado com sucesso! Agora você pode fazer login.');
    }, 1500);
  }
}
