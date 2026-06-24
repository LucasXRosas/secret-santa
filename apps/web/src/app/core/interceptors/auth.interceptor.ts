import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { from, switchMap } from 'rxjs';

/**
 * Functional Interceptor para injetar o token de autenticação em todas as requisições HTTP.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const client = authService.client;
  
  if (!client) {
    return next(req);
  }

  // Intercepta a requisição, obtem a sessão atual e injeta o Bearer token
  return from(client.auth.getSession()).pipe(
    switchMap(({ data }) => {
      const token = data.session?.access_token;
      
      if (token) {
        const clonedRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next(clonedRequest);
      }
      
      return next(req);
    })
  );
};
