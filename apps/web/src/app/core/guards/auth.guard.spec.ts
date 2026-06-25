import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

describe('authGuard', () => {
  const mockRoute: any = {};
  const mockState: any = {};

  afterEach(() => TestBed.resetTestingModule());

  function setup(isAuthenticated: boolean) {
    const fakeUrlTree = { commands: ['/login'] } as any;

    const authServiceMock = {
      whenReady: () => Promise.resolve(),
      isAuthenticated: () => isAuthenticated,
    };

    const routerMock = {
      createUrlTree: (_: string[]) => fakeUrlTree,
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    });

    return { fakeUrlTree };
  }

  it('deve retornar true quando o usuário está autenticado', async () => {
    setup(true);
    const result = await TestBed.runInInjectionContext(() => authGuard(mockRoute, mockState));
    expect(result).toBe(true);
  });

  it('deve retornar um UrlTree para /login quando o usuário não está autenticado', async () => {
    const { fakeUrlTree } = setup(false);
    const result = await TestBed.runInInjectionContext(() => authGuard(mockRoute, mockState));
    expect(result).toBe(fakeUrlTree);
  });
});
