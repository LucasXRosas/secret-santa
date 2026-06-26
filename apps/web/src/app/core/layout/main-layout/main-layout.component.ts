import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { SidenavComponent } from '../../../components/sidenav/sidenav.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidenavComponent, FooterComponent],
  template: `
    <app-sidenav [(isOpen)]="sidenavOpen"></app-sidenav>
    <app-header (toggleSidenav)="sidenavOpen.set(!sidenavOpen())"></app-header>
    <router-outlet></router-outlet>
    @defer (on viewport) {
      <app-footer></app-footer>
    } @placeholder {
      <div class="h-16 w-full animate-pulse bg-muted mt-8"></div>
    }
  `,
})
export class MainLayoutComponent {
  sidenavOpen = signal(false);
}
