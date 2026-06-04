import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Protege rotas que exigem usuário autenticado.
 * Se não houver sessão ativa, redireciona para /login.
 */
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  // createUrlTree devolve um redirecionamento em vez de só bloquear.
  return router.createUrlTree(['/login']);
};
