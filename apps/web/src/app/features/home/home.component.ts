import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Placeholder signal for welcome message
  welcomeMessage = signal('Bem‑vindo ao seu home!');

  // Placeholder list of user's draws
  userDraws = signal<string[]>([
    'Sorteio de Natal 2023',
    'Sorteio de Ano Novo 2024',
    'Sorteio de Verão 2024'
  ]);
}
