import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { AuthService } from '../../core/services/auth.service';

/** Participante exibido na pilha de avatares de uma troca. */
interface Participante {
  /** Iniciais mostradas no círculo (ex.: "FF"). */
  iniciais: string;
  /** Token de cor de fundo do avatar (classe Tailwind, ex.: 'bg-primary'). */
  cor: string;
}

/** Uma troca em andamento (card grande / destaque). */
interface TrocaAtiva {
  nome: string;
  participantes: number;
  revelacao: string;
  avatares: Participante[];
}

/** Uma troca já finalizada (card menor). */
interface TrocaConcluida {
  nome: string;
  data: string;
  /** Frase opcional de "melhor presente"; quando presente, vira um quote. */
  citacao?: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, FooterComponent, SidenavComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  protected authService = inject(AuthService);
  private router = inject(Router);

  /** Controla a abertura do menu lateral (mesmo padrão da home). */
  sidenavOpen = signal(false);

  /** Troca em destaque no topo do bento grid. */
  trocaDestaque = signal<TrocaAtiva>({
    nome: 'Natal da Firma 2024',
    participantes: 12,
    revelacao: '20 de Dezembro',
    avatares: [
      { iniciais: 'JS', cor: 'bg-primary' },
      { iniciais: 'MA', cor: 'bg-secondary' },
      { iniciais: 'RB', cor: 'bg-accent' },
    ],
  });

  /** Histórico de trocas finalizadas (renderizadas via @for). */
  trocasConcluidas = signal<TrocaConcluida[]>([
    { nome: 'Família Oliveira 2023', data: '24 de Dez, 2023' },
    {
      nome: 'Intercâmbio Dublin',
      data: '15 de Jul, 2023',
      citacao: 'O melhor presente foi a Guinness que ganhei!',
    },
  ]);

  async logout() {
    try {
      await this.authService.signOut();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }
}
