import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

/**
 * Functional Interceptor para tratamento centralizado de erros HTTP.
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('[Global Error Interceptor]', error);
      
      if (error.status === 401) {
        console.warn('Sessão expirada ou não autorizada. Redirecionando para login.');
        // Em um app real, talvez usar o AuthService para limpar a sessão local
        router.navigate(['/login']);
      } else if (error.status === 403) {
        console.warn('Acesso negado (403).');
      } else if (error.status >= 500) {
        console.error('Erro interno do servidor.');
      }
      
      return throwError(() => error);
    })
  );
};
