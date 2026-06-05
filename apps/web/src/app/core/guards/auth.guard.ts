import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Protege rotas que exigem usuário autenticado.
 * Se não houver sessão ativa, redireciona para /login.
 */
export const authGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Espera a sessão ser restaurada do storage antes de decidir
  // (evita redirecionar pro login num F5 com sessão válida).
  await authService.whenReady();

  if (authService.isAuthenticated()) {
    return true;
  }

  // createUrlTree devolve um redirecionamento em vez de só bloquear.
  return router.createUrlTree(['/login']);
};
