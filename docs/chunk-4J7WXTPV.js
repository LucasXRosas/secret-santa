import {
  AuthService,
  Component,
  Input,
  Output,
  Router,
  RouterLink,
  computed,
  inject,
  model,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PP7CZ2AI.js";

// apps/web/src/app/components/header/header.component.ts
function HeaderComponent_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_8_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeProfile());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 11)(2, "button", 12);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_8_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToDashboard());
    });
    \u0275\u0275text(3, " Dashboard ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_8_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(5, " Logout ");
    \u0275\u0275elementEnd()();
  }
}
function HeaderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 9);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleProfile());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HeaderComponent_Conditional_8_Conditional_3_Template, 6, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.isProfileOpen());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.userInitial(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isProfileOpen() ? 3 : -1);
  }
}
function HeaderComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1, " Login ");
    \u0275\u0275elementEnd();
  }
}
var HeaderComponent = class _HeaderComponent {
  toggleSidenav = output();
  authService = inject(AuthService);
  router = inject(Router);
  // Estado de autenticação vindo do AuthService
  isAuthenticated = this.authService.isAuthenticated;
  // Controla a abertura da caixinha de perfil
  isProfileOpen = signal(false, ...ngDevMode ? [{ debugName: "isProfileOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  // Inicial exibida no ícone de perfil (primeira letra do nome ou e-mail)
  userInitial = computed(() => {
    const user = this.authService.currentUser();
    const source = user?.user_metadata?.["name"] || user?.email || "?";
    return source.charAt(0).toUpperCase();
  }, ...ngDevMode ? [{ debugName: "userInitial" }] : (
    /* istanbul ignore next */
    []
  ));
  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
  toggleProfile() {
    this.isProfileOpen.update((open) => !open);
  }
  closeProfile() {
    this.isProfileOpen.set(false);
  }
  goToDashboard() {
    this.closeProfile();
    this.router.navigate(["/dashboard"]);
  }
  async logout() {
    this.closeProfile();
    await this.authService.signOut();
    this.router.navigate(["/home"]);
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], outputs: { toggleSidenav: "toggleSidenav" }, decls: 14, vars: 1, consts: [[1, "w-full", "bg-primary", "border-b-4", "border-black", "px-6", "py-4", "flex", "items-center", "justify-between", "z-40", "relative"], ["routerLink", "/", 1, "text-2xl", "font-headline", "font-black", "uppercase", "tracking-tighter", "text-black", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"], [1, "hidden", "lg:flex", "items-center", "gap-6"], ["routerLink", "/", 1, "text-black", "font-headline", "font-bold", "uppercase", "hover:bg-black", "hover:text-white", "px-3", "py-1", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"], ["routerLink", "/dashboard", 1, "text-black", "font-headline", "font-bold", "uppercase", "hover:bg-black", "hover:text-white", "px-3", "py-1", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"], [1, "relative"], ["routerLink", "/login", 1, "text-black", "font-headline", "font-bold", "uppercase", "hover:bg-black", "hover:text-white", "px-3", "py-1", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"], ["aria-label", "Abrir menu", 1, "lg:hidden", "p-2", "bg-white", "border-2", "border-black", "neo-shadow-sm", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black", "flex", "flex-col", "justify-center", "items-center", "gap-1", "w-10", "h-10", 3, "click"], [1, "block", "w-5", "h-0.5", "bg-black"], ["aria-label", "Abrir menu do perfil", 1, "w-10", "h-10", "bg-white", "border-2", "border-black", "neo-shadow-sm", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black", "flex", "items-center", "justify-center", "font-headline", "font-black", "text-black", "uppercase", 3, "click"], ["aria-hidden", "true", 1, "fixed", "inset-0", "z-40", 3, "click"], [1, "absolute", "right-0", "mt-2", "w-48", "bg-white", "border-2", "border-black", "neo-shadow-lg", "z-50", "flex", "flex-col"], [1, "text-left", "text-black", "font-headline", "font-bold", "uppercase", "px-4", "py-3", "hover:bg-primary", "border-b-2", "border-black", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black", 3, "click"], [1, "text-left", "text-black", "font-headline", "font-bold", "uppercase", "px-4", "py-3", "hover:bg-black", "hover:text-white", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "a", 1);
      \u0275\u0275text(2, " Wish Draw ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "nav", 2)(4, "a", 3);
      \u0275\u0275text(5, " In\xEDcio ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 4);
      \u0275\u0275text(7, " Meus Sorteios ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, HeaderComponent_Conditional_8_Template, 4, 3, "div", 5)(9, HeaderComponent_Conditional_9_Template, 2, 0, "a", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 7);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_10_listener() {
        return ctx.onToggleSidenav();
      });
      \u0275\u0275element(11, "span", 8)(12, "span", 8)(13, "span", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.isAuthenticated() ? 8 : 9);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [RouterLink], template: '<header\r\n  class="w-full bg-primary border-b-4 border-black px-6 py-4 flex items-center justify-between z-40 relative"\r\n>\r\n  <!-- Logo / T\xEDtulo -->\r\n  <a\r\n    routerLink="/"\r\n    class="text-2xl font-headline font-black uppercase tracking-tighter text-black outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n  >\r\n    Wish Draw\r\n  </a>\r\n\r\n  <!-- Menu Desktop -->\r\n  <nav class="hidden lg:flex items-center gap-6">\r\n    <a\r\n      routerLink="/"\r\n      class="text-black font-headline font-bold uppercase hover:bg-black hover:text-white px-3 py-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n    >\r\n      In\xEDcio\r\n    </a>\r\n    <a\r\n      routerLink="/dashboard"\r\n      class="text-black font-headline font-bold uppercase hover:bg-black hover:text-white px-3 py-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n    >\r\n      Meus Sorteios\r\n    </a>\r\n\r\n    @if (isAuthenticated()) {\r\n      <!-- Perfil do usu\xE1rio com caixinha (dropdown) -->\r\n      <div class="relative">\r\n        <button\r\n          (click)="toggleProfile()"\r\n          class="w-10 h-10 bg-white border-2 border-black neo-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all outline-none focus-visible:ring-2 focus-visible:ring-black flex items-center justify-center font-headline font-black text-black uppercase"\r\n          aria-label="Abrir menu do perfil"\r\n          [attr.aria-expanded]="isProfileOpen()"\r\n        >\r\n          {{ userInitial() }}\r\n        </button>\r\n\r\n        @if (isProfileOpen()) {\r\n          <!-- Backdrop invis\xEDvel para fechar ao clicar fora -->\r\n          <div class="fixed inset-0 z-40" (click)="closeProfile()" aria-hidden="true"></div>\r\n\r\n          <!-- Caixinha -->\r\n          <div\r\n            class="absolute right-0 mt-2 w-48 bg-white border-2 border-black neo-shadow-lg z-50 flex flex-col"\r\n          >\r\n            <button\r\n              (click)="goToDashboard()"\r\n              class="text-left text-black font-headline font-bold uppercase px-4 py-3 hover:bg-primary border-b-2 border-black transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n            >\r\n              Dashboard\r\n            </button>\r\n            <button\r\n              (click)="logout()"\r\n              class="text-left text-black font-headline font-bold uppercase px-4 py-3 hover:bg-black hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n            >\r\n              Logout\r\n            </button>\r\n          </div>\r\n        }\r\n      </div>\r\n    } @else {\r\n      <a\r\n        routerLink="/login"\r\n        class="text-black font-headline font-bold uppercase hover:bg-black hover:text-white px-3 py-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n      >\r\n        Login\r\n      </a>\r\n    }\r\n  </nav>\r\n\r\n  <!-- Bot\xE3o Menu Mobile -->\r\n  <button\r\n    (click)="onToggleSidenav()"\r\n    class="lg:hidden p-2 bg-white border-2 border-black neo-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all outline-none focus-visible:ring-2 focus-visible:ring-black flex flex-col justify-center items-center gap-1 w-10 h-10"\r\n    aria-label="Abrir menu"\r\n  >\r\n    <span class="block w-5 h-0.5 bg-black"></span>\r\n    <span class="block w-5 h-0.5 bg-black"></span>\r\n    <span class="block w-5 h-0.5 bg-black"></span>\r\n  </button>\r\n</header>\r\n' }]
  }], null, { toggleSidenav: [{ type: Output, args: ["toggleSidenav"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "apps/web/src/app/components/header/header.component.ts", lineNumber: 11 });
})();

// apps/web/src/app/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "w-full", "bg-accent", "border-t-4", "border-black", "px-6", "py-8", "flex", "flex-col", "md:flex-row", "items-center", "justify-between", "gap-4", "mt-auto"], [1, "font-headline", "font-bold", "text-black", "text-center", "md:text-left"], [1, "uppercase"], [1, "text-sm"], [1, "flex", "gap-4"], ["href", "#", 1, "text-black", "font-headline", "font-bold", "uppercase", "hover:underline", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "footer", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3, "\xA9 2026 Wish Draw");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p", 3);
      \u0275\u0275text(5, "Sorteio de Amigo Secreto com estilo!");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 4)(7, "a", 5);
      \u0275\u0275text(8, " Termos ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "a", 5);
      \u0275\u0275text(10, " Privacidade ");
      \u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, template: '<footer\r\n  class="w-full bg-accent border-t-4 border-black px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-auto"\r\n>\r\n  <div class="font-headline font-bold text-black text-center md:text-left">\r\n    <p class="uppercase">\xA9 2026 Wish Draw</p>\r\n    <p class="text-sm">Sorteio de Amigo Secreto com estilo!</p>\r\n  </div>\r\n\r\n  <div class="flex gap-4">\r\n    <a\r\n      href="#"\r\n      class="text-black font-headline font-bold uppercase hover:underline outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n    >\r\n      Termos\r\n    </a>\r\n    <a\r\n      href="#"\r\n      class="text-black font-headline font-bold uppercase hover:underline outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n    >\r\n      Privacidade\r\n    </a>\r\n  </div>\r\n</footer>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "apps/web/src/app/components/footer/footer.component.ts", lineNumber: 8 });
})();

// apps/web/src/app/components/sidenav/sidenav.component.ts
function SidenavComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function SidenavComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementEnd();
  }
}
function SidenavComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function SidenavComponent_Conditional_12_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(1, " Dashboard ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 11);
    \u0275\u0275listener("click", function SidenavComponent_Conditional_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(3, " Logout ");
    \u0275\u0275elementEnd();
  }
}
function SidenavComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function SidenavComponent_Conditional_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(1, " Login ");
    \u0275\u0275elementEnd();
  }
}
var SidenavComponent = class _SidenavComponent {
  /**
   * [ID12] model() cria um signal de two-way data binding.
   * O componente pai usa [(isOpen)]="sidenavOpen" para sincronização bidirecional:
   * - Leitura: isOpen() → boolean
   * - Escrita: isOpen.set(false) → atualiza o signal no pai automaticamente
   */
  isOpen = model(false, ...ngDevMode ? [{ debugName: "isOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  authService = inject(AuthService);
  router = inject(Router);
  isAuthenticated = this.authService.isAuthenticated;
  onClose() {
    this.isOpen.set(false);
  }
  async logout() {
    this.onClose();
    await this.authService.signOut();
    this.router.navigate(["/home"]);
  }
  static \u0275fac = function SidenavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidenavComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidenavComponent, selectors: [["app-sidenav"]], inputs: { isOpen: [1, "isOpen"] }, outputs: { isOpen: "isOpenChange" }, decls: 14, vars: 6, consts: [["aria-hidden", "true", 1, "fixed", "inset-0", "bg-black/50", "z-40", "transition-opacity", "lg:hidden"], [1, "fixed", "top-0", "left-0", "w-64", "h-full", "bg-secondary", "border-r-4", "border-black", "z-50", "transform", "transition-transform", "duration-300", "ease-in-out", "lg:hidden", "neo-shadow-lg"], [1, "flex", "items-center", "justify-between", "p-4", "border-b-4", "border-black", "bg-white"], [1, "text-xl", "font-headline", "font-black", "uppercase", "tracking-tighter", "text-black"], ["aria-label", "Fechar menu", 1, "p-2", "bg-primary", "border-2", "border-black", "neo-shadow-sm", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all", "focus:outline-none", "focus-visible:ring-2", "focus-visible:ring-black", "w-8", "h-8", "flex", "items-center", "justify-center", "font-bold", 3, "click"], [1, "flex", "flex-col", "p-4", "gap-4"], ["routerLink", "/", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"], ["routerLink", "/sorteio", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"], ["routerLink", "/login", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none"], ["aria-hidden", "true", 1, "fixed", "inset-0", "bg-black/50", "z-40", "transition-opacity", "lg:hidden", 3, "click"], ["routerLink", "/dashboard", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"], [1, "text-left", "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-black", "hover:text-white", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"], ["routerLink", "/login", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"]], template: function SidenavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SidenavComponent_Conditional_0_Template, 1, 0, "div", 0);
      \u0275\u0275elementStart(1, "aside", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function SidenavComponent_Template_button_click_5_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(6, " X ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "nav", 5)(8, "a", 6);
      \u0275\u0275listener("click", function SidenavComponent_Template_a_click_8_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(9, " In\xEDcio ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 7);
      \u0275\u0275listener("click", function SidenavComponent_Template_a_click_10_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(11, " Sorteio ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, SidenavComponent_Conditional_12_Template, 4, 0)(13, SidenavComponent_Conditional_13_Template, 2, 0, "a", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("-translate-x-full", !ctx.isOpen())("translate-x-0", ctx.isOpen());
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.isAuthenticated() ? 12 : 13);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidenavComponent, [{
    type: Component,
    args: [{ selector: "app-sidenav", standalone: true, imports: [RouterLink], template: '<!-- Backdrop Overlay (escurece o fundo e permite clicar para fechar) -->\r\n@if (isOpen()) {\r\n  <div\r\n    class="fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden"\r\n    (click)="onClose()"\r\n    aria-hidden="true"\r\n  ></div>\r\n}\r\n\r\n<!-- Menu Lateral (Drawer) -->\r\n<aside\r\n  class="fixed top-0 left-0 w-64 h-full bg-secondary border-r-4 border-black z-50 transform transition-transform duration-300 ease-in-out lg:hidden neo-shadow-lg"\r\n  [class.-translate-x-full]="!isOpen()"\r\n  [class.translate-x-0]="isOpen()"\r\n>\r\n  <div class="flex items-center justify-between p-4 border-b-4 border-black bg-white">\r\n    <span class="text-xl font-headline font-black uppercase tracking-tighter text-black">Menu</span>\r\n    <!-- Bot\xE3o Fechar -->\r\n    <button\r\n      (click)="onClose()"\r\n      class="p-2 bg-primary border-2 border-black neo-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black w-8 h-8 flex items-center justify-center font-bold"\r\n      aria-label="Fechar menu"\r\n    >\r\n      X\r\n    </button>\r\n  </div>\r\n\r\n  <nav class="flex flex-col p-4 gap-4">\r\n    <a\r\n      routerLink="/"\r\n      (click)="onClose()"\r\n      class="text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-primary hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n    >\r\n      In\xEDcio\r\n    </a>\r\n    <a\r\n      routerLink="/sorteio"\r\n      (click)="onClose()"\r\n      class="text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-primary hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n    >\r\n      Sorteio\r\n    </a>\r\n    @if (isAuthenticated()) {\r\n      <a\r\n        routerLink="/dashboard"\r\n        (click)="onClose()"\r\n        class="text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-primary hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n      >\r\n        Dashboard\r\n      </a>\r\n      <button\r\n        (click)="logout()"\r\n        class="text-left text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-black hover:text-white hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n      >\r\n        Logout\r\n      </button>\r\n    } @else {\r\n      <a\r\n        routerLink="/login"\r\n        (click)="onClose()"\r\n        class="text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-primary hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n      >\r\n        Login\r\n      </a>\r\n    }\r\n  </nav>\r\n</aside>\r\n' }]
  }], null, { isOpen: [{ type: Input, args: [{ isSignal: true, alias: "isOpen", required: false }] }, { type: Output, args: ["isOpenChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidenavComponent, { className: "SidenavComponent", filePath: "apps/web/src/app/components/sidenav/sidenav.component.ts", lineNumber: 11 });
})();

export {
  HeaderComponent,
  FooterComponent,
  SidenavComponent
};
//# sourceMappingURL=chunk-4J7WXTPV.js.map
