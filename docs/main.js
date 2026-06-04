import {
  AuthService
} from "./chunk-HNREXE6V.js";
import {
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
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-SPEW6YYM.js";

// apps/web/src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// apps/web/src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./chunk-4TSVER7M.js").then((m) => m.LoginComponent)
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadComponent: () => import("./chunk-WTSLTUAN.js").then((m) => m.HomeComponent)
  },
  {
    path: "dashboard",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-AA2VFNMP.js").then((m) => m.DashboardComponent)
  }
];

// apps/web/src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
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
