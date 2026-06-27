import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';
import { distinctUntilChanged } from 'rxjs';
import { HeaderComponent } from '../../../components/header/header.component';
import { SidenavComponent } from '../../../components/sidenav/sidenav.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidenavComponent, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col bg-background">
      <!-- [ID12] two-way binding via model(): [(isOpen)] sincroniza sidenavOpen bidireccionalmente -->
      <app-sidenav [(isOpen)]="sidenavOpen"></app-sidenav>
      <app-header (toggleSidenav)="sidenavOpen.set(!sidenavOpen())"></app-header>
      <div class="flex-1">
        <router-outlet></router-outlet>
      </div>
      @defer (on viewport) {
        <app-footer></app-footer>
      } @placeholder {
        <div class="h-16 w-full animate-pulse bg-muted mt-8"></div>
      }
    </div>
  `,
})
export class MainLayoutComponent {
  sidenavOpen = signal(false);

  // [ID25] toObservable: Transforma Signal em Observable para usar operadores RxJS
  sidenavState$ = toObservable(this.sidenavOpen).pipe(distinctUntilChanged());

  constructor() {
    // Apenas para demonstrar a reatividade RxJS <-> Sinais
    this.sidenavState$.subscribe((isOpen) => {
      console.log('[RxJS] Menu lateral alterado:', isOpen);
    });
  }
}
