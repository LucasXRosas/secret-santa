import {
  AuthService,
  Component,
  Router,
  RouterOutlet,
  bootstrapApplication,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  signal,
  withComponentInputBinding,
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-PP7CZ2AI.js";

// apps/web/src/app/core/guards/auth.guard.ts
var authGuard = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  await authService.whenReady();
  if (authService.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// apps/web/src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./chunk-7WUCERO7.js").then((m) => m.LoginComponent)
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadComponent: () => import("./chunk-LMARA2L6.js").then((m) => m.HomeComponent)
  },
  {
    path: "dashboard",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-ZPD6QUSK.js").then((m) => m.DashboardComponent)
  },
  {
    path: "eventos/novo",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-WTO74MA7.js").then((m) => m.CreateEventComponent)
  },
  {
    path: "eventos/:id",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-7JY7HDK5.js").then((m) => m.EventDetailComponent)
  }
];

// apps/web/src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // [ID16] withComponentInputBinding() faz o Router injetar automaticamente
    // os parâmetros de rota (ex: :id) diretamente como input() nos componentes.
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch())
  ]
};

// apps/web/src/app/app.ts
var App = class _App {
  title = signal("secret-santa", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  isSidenavOpen = false;
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  closeSidenav() {
    this.isSidenavOpen = false;
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: "<router-outlet />\r\n\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "apps/web/src/app/app.ts", lineNumber: 10 });
})();

// apps/web/src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
