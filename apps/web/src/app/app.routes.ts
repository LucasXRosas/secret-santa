import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { eventResolver } from './core/resolvers/event.resolver';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    // [ID20] Página pública que consome o json-server (API Mock) via fetch nativo.
    path: 'demo',
    loadComponent: () => import('./features/demo/demo.component').then(m => m.DemoComponent)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'eventos/novo',
    canActivate: [authGuard],
    loadComponent: () => import('./features/events/create-event/create-event.component').then(m => m.CreateEventComponent)
  },
  {
    path: 'eventos/:id',
    canActivate: [authGuard],
    loadComponent: () => import('./features/events/event-detail/event-detail.component').then(m => m.EventDetailComponent)
  },
=======
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'eventos/novo',
        canActivate: [authGuard],
        loadComponent: () => import('./features/events/create-event/create-event.component').then(m => m.CreateEventComponent)
      },
      {
        path: 'eventos/:id',
        canActivate: [authGuard],
        resolve: {
          eventData: eventResolver
        },
        loadComponent: () => import('./features/events/event-detail/event-detail.component').then(m => m.EventDetailComponent)
      }
    ]
  }
>>>>>>> eba69b87428087ffdded6a959bfa5da8c52faa6b
];
