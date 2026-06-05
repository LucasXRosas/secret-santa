import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-4L2T4QFX.js";
import {
  AuthService,
  CommonModule,
  Component,
  Router,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-GQUNLRQT.js";

// apps/web/src/app/features/login/login.component.ts
function LoginComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275listener("click", function LoginComponent_Conditional_43_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRegisterModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section", 34)(3, "button", 35);
    \u0275\u0275listener("click", function LoginComponent_Conditional_43_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRegisterModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 36);
    \u0275\u0275element(5, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 38)(7, "h2", 39);
    \u0275\u0275text(8, "CRIAR MINHA CONTA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 40)(10, "p", 41);
    \u0275\u0275text(11, "Junte-se \xE0 divers\xE3o! Sem frescuras, apenas sorteios r\xE1pidos.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "form", 42);
    \u0275\u0275listener("submit", function LoginComponent_Conditional_43_Template_form_submit_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRegister());
    });
    \u0275\u0275elementStart(13, "div", 43)(14, "label", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 45);
    \u0275\u0275element(16, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Nome Completo ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "input", 47);
    \u0275\u0275listener("ngModelChange", function LoginComponent_Conditional_43_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.registerName.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 43)(20, "label", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 45);
    \u0275\u0275element(22, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " E-mail ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "input", 50);
    \u0275\u0275listener("ngModelChange", function LoginComponent_Conditional_43_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.registerEmail.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 51)(26, "div", 43)(27, "label", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 45);
    \u0275\u0275element(29, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Senha Secreta ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "input", 54);
    \u0275\u0275listener("ngModelChange", function LoginComponent_Conditional_43_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.registerPassword.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 43)(33, "label", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 45);
    \u0275\u0275element(35, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Confirmar Senha ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "input", 57);
    \u0275\u0275listener("ngModelChange", function LoginComponent_Conditional_43_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.registerConfirmPassword.set($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 58)(39, "button", 59);
    \u0275\u0275text(40);
    \u0275\u0275elementStart(41, "span", 26);
    \u0275\u0275text(42, "\u2192");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 60)(44, "p", 61);
    \u0275\u0275text(45, " J\xE1 tem conta? ");
    \u0275\u0275elementStart(46, "button", 62);
    \u0275\u0275listener("click", function LoginComponent_Conditional_43_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRegisterModal());
    });
    \u0275\u0275text(47, "Fazer Login");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 4);
    \u0275\u0275element(50, "path", 5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngModel", ctx_r1.registerName());
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.registerEmail());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r1.registerPassword());
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.registerConfirmPassword());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isRegistering());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRegistering() ? "CADASTRANDO..." : "CADASTRAR", " ");
  }
}
var LoginComponent = class _LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  email = signal("", ...ngDevMode ? [{ debugName: "email" }] : (
    /* istanbul ignore next */
    []
  ));
  password = signal("", ...ngDevMode ? [{ debugName: "password" }] : (
    /* istanbul ignore next */
    []
  ));
  // Modal de registro
  isRegisterModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isRegisterModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  // Campos de registro
  registerName = signal("", ...ngDevMode ? [{ debugName: "registerName" }] : (
    /* istanbul ignore next */
    []
  ));
  registerEmail = signal("", ...ngDevMode ? [{ debugName: "registerEmail" }] : (
    /* istanbul ignore next */
    []
  ));
  registerPassword = signal("", ...ngDevMode ? [{ debugName: "registerPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  registerConfirmPassword = signal("", ...ngDevMode ? [{ debugName: "registerConfirmPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  // Estados de loading
  isLoggingIn = signal(false, ...ngDevMode ? [{ debugName: "isLoggingIn" }] : (
    /* istanbul ignore next */
    []
  ));
  isRegistering = signal(false, ...ngDevMode ? [{ debugName: "isRegistering" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleRegisterModal() {
    this.isRegisterModalOpen.update((v) => !v);
  }
  async onLogin() {
    const emailValue = this.email().trim();
    const passwordValue = this.password();
    if (!emailValue || !passwordValue)
      return;
    this.isLoggingIn.set(true);
    try {
      await this.authService.signIn(emailValue, passwordValue);
      this.router.navigate(["/dashboard"]);
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    } finally {
      this.isLoggingIn.set(false);
    }
  }
  async onRegister() {
    const emailValue = this.registerEmail().trim();
    const nameValue = this.registerName().trim();
    const passwordValue = this.registerPassword();
    if (!nameValue || !emailValue || !passwordValue)
      return;
    if (passwordValue !== this.registerConfirmPassword()) {
      return;
    }
    this.isRegistering.set(true);
    try {
      await this.authService.signUp(emailValue, passwordValue, nameValue);
      this.isRegisterModalOpen.set(false);
      this.router.navigate(["/dashboard"]);
    } catch (error) {
      console.error("Erro ao realizar cadastro:", error);
    } finally {
      this.isRegistering.set(false);
    }
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 44, vars: 5, consts: [[1, "bg-pattern", "min-h-screen", "w-full", "flex", "flex-col", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-md", "relative"], [1, "absolute", "-top-12", "-left-12", "w-24", "h-24", "rotate-[-12deg]", "z-10", "hidden", "md:block"], [1, "bg-accent", "border-4", "border-foreground", "p-4", "neo-shadow-sm", "flex", "items-center", "justify-center", "rounded-xl", "animate-float"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "h-10", "w-10", "text-foreground"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4"], [1, "absolute", "-bottom-8", "-right-8", "w-20", "h-20", "rotate-[15deg]", "z-10", "hidden", "md:block"], [1, "bg-primary", "border-4", "border-foreground", "p-4", "neo-shadow-sm", "flex", "items-center", "justify-center", "rounded-full", "animate-float-delayed"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "h-8", "w-8", "text-primary-foreground"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"], [1, "bg-card", "border-4", "border-foreground", "p-6", "md:p-10", "neo-shadow", "rounded-xl", "relative", "overflow-hidden"], [1, "flex", "justify-center", "mb-5"], [1, "w-24", "h-24", "rounded-lg"], ["alt", "Santa R\xE1pido Logo", "src", "/logo.png", 1, "w-full", "h-full", "object-contain"], [1, "text-center", "mb-6"], [1, "font-headline", "font-black", "text-3xl", "md:text-4xl", "uppercase", "tracking-tighter", "leading-none", "mb-1"], [1, "text-muted-foreground", "text-sm", "font-medium"], [1, "space-y-5", 3, "submit"], ["for", "email", 1, "block", "font-headline", "font-bold", "text-xs", "uppercase", "mb-1.5"], ["id", "email", "name", "email", "placeholder", "seu@email.com", "required", "", "type", "email", 1, "w-full", "px-4", "py-3.5", "bg-background", "border-[3px]", "border-foreground", "rounded-lg", "focus:outline-none", "focus:bg-primary/20", "transition-colors", "font-medium", "placeholder:text-muted-foreground", "text-sm", 3, "ngModelChange", "ngModel"], [1, "relative"], [1, "flex", "justify-between", "items-center", "mb-1.5"], ["for", "password", 1, "block", "font-headline", "font-bold", "text-xs", "uppercase"], ["href", "#", 1, "text-xs", "font-bold", "uppercase", "hover:underline", "decoration-2"], ["id", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", "type", "password", 1, "w-full", "px-4", "py-3.5", "bg-background", "border-[3px]", "border-foreground", "rounded-lg", "focus:outline-none", "focus:bg-primary/20", "transition-colors", "font-medium", "placeholder:text-muted-foreground", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "w-full", "py-4.5", "bg-accent", "border-4", "border-foreground", "font-headline", "font-black", "text-xl", "uppercase", "neo-shadow-sm", "hover:translate-x-[2px]", "hover:translate-y-[2px]", "hover:shadow-none", "btn-press", "transition-all", "flex", "items-center", "justify-center", "gap-3", 3, "disabled"], [1, "font-black"], [1, "mt-8", "pt-6", "border-t-4", "border-foreground", "flex", "flex-col", "items-center", "gap-2"], [1, "font-medium", "text-xs", "text-center"], [1, "font-headline", "font-black", "text-lg", "uppercase", "underline", "decoration-4", "hover:text-primary", "transition-colors", "cursor-pointer", 3, "click"], [1, "mt-4", "text-center"], [1, "font-display", "font-black", "text-xs", "text-muted-foreground", "uppercase", "italic", "opacity-50"], [1, "fixed", "inset-0", "z-[100]", "bg-black/40", "backdrop-blur-md", "flex", "items-center", "justify-center", "p-4"], [1, "absolute", "inset-0", 3, "click"], [1, "relative", "w-full", "max-w-lg", "bg-card", "border-[6px]", "border-foreground", "neo-shadow-lg", "animate-in", "fade-in", "zoom-in", "duration-300", "z-10", "rounded-none"], [1, "absolute", "-top-6", "-right-6", "bg-destructive", "border-4", "border-foreground", "p-3", "neo-shadow", "hover:translate-x-[2px]", "hover:translate-y-[2px]", "hover:shadow-none", "active:translate-x-[4px]", "active:translate-y-[4px]", "transition-all", "group", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "3", 1, "h-6", "w-6", "text-destructive-foreground", "font-black", "block", "group-hover:rotate-90", "transition-transform"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "absolute", "-top-10", "left-8", "bg-primary", "border-4", "border-foreground", "px-6", "py-3", "neo-shadow", "transform", "-rotate-3", "z-20"], [1, "text-2xl", "font-black", "uppercase", "tracking-tight", "text-primary-foreground"], [1, "p-8", "md:p-12", "pt-16"], [1, "text-muted-foreground", "font-medium", "mb-8", "text-base"], [1, "space-y-6", 3, "submit"], [1, "space-y-2"], ["for", "registerName", 1, "font-headline", "font-bold", "uppercase", "tracking-wide", "text-sm", "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "h-5", "w-5", "text-primary"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["id", "registerName", "name", "registerName", "placeholder", "Como te chamam?", "required", "", "type", "text", 1, "w-full", "bg-background", "border-4", "border-foreground", "px-5", "py-4", "font-bold", "text-lg", "focus:bg-primary/20", "focus:ring-0", "focus:outline-none", "transition-colors", "placeholder:text-muted-foreground/45", "rounded-none", 3, "ngModelChange", "ngModel"], ["for", "registerEmail", 1, "font-headline", "font-bold", "uppercase", "tracking-wide", "text-sm", "flex", "items-center", "gap-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["id", "registerEmail", "name", "registerEmail", "placeholder", "seu@email.com", "required", "", "type", "email", 1, "w-full", "bg-background", "border-4", "border-foreground", "px-5", "py-4", "font-bold", "text-lg", "focus:bg-primary/20", "focus:ring-0", "focus:outline-none", "transition-colors", "placeholder:text-muted-foreground/45", "rounded-none", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["for", "registerPassword", 1, "font-headline", "font-bold", "uppercase", "tracking-wide", "text-sm", "flex", "items-center", "gap-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], ["id", "registerPassword", "name", "registerPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", "type", "password", 1, "w-full", "bg-background", "border-4", "border-foreground", "px-5", "py-4", "font-bold", "text-lg", "focus:bg-primary/20", "focus:ring-0", "focus:outline-none", "transition-colors", "placeholder:text-muted-foreground/45", "rounded-none", 3, "ngModelChange", "ngModel"], ["for", "registerConfirmPassword", 1, "font-headline", "font-bold", "uppercase", "tracking-wide", "text-sm", "flex", "items-center", "gap-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["id", "registerConfirmPassword", "name", "registerConfirmPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", "type", "password", 1, "w-full", "bg-background", "border-4", "border-foreground", "px-5", "py-4", "font-bold", "text-lg", "focus:bg-primary/20", "focus:ring-0", "focus:outline-none", "transition-colors", "placeholder:text-muted-foreground/45", "rounded-none", 3, "ngModelChange", "ngModel"], [1, "pt-4"], ["type", "submit", 1, "w-full", "bg-accent", "border-4", "border-foreground", "py-5", "px-8", "font-black", "text-2xl", "uppercase", "tracking-tighter", "neo-shadow", "hover:translate-x-[2px]", "hover:translate-y-[2px]", "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]", "active:translate-x-[4px]", "active:translate-y-[4px]", "active:shadow-none", "transition-all", "flex", "items-center", "justify-center", "gap-3", "rounded-none", 3, "disabled"], [1, "mt-8", "pt-6", "border-t-4", "border-foreground/10", "flex", "justify-center"], [1, "text-sm", "font-bold", "uppercase", "tracking-wider", "text-muted-foreground"], [1, "text-primary", "underline", "decoration-2", "underline-offset-2", "hover:text-primary/80", "transition-colors", 3, "click"], [1, "absolute", "-bottom-6", "-left-6", "w-20", "h-20", "bg-secondary", "border-4", "border-foreground", "neo-shadow", "rounded-full", "flex", "items-center", "justify-center", "rotate-12", "z-20"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "div", 12);
      \u0275\u0275element(13, "img", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "header", 14)(15, "h1", 15);
      \u0275\u0275text(16, " ENTRAR NA FESTA ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 16);
      \u0275\u0275text(18, "O seu amigo secreto sem enrola\xE7\xE3o.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "form", 17);
      \u0275\u0275listener("submit", function LoginComponent_Template_form_submit_19_listener() {
        return ctx.onLogin();
      });
      \u0275\u0275elementStart(20, "div")(21, "label", 18);
      \u0275\u0275text(22, "EMAIL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 19);
      \u0275\u0275listener("ngModelChange", function LoginComponent_Template_input_ngModelChange_23_listener($event) {
        return ctx.email.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 20)(25, "div", 21)(26, "label", 22);
      \u0275\u0275text(27, "SENHA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 23);
      \u0275\u0275text(29, "Esqueceu?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "input", 24);
      \u0275\u0275listener("ngModelChange", function LoginComponent_Template_input_ngModelChange_30_listener($event) {
        return ctx.password.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "button", 25);
      \u0275\u0275text(32);
      \u0275\u0275elementStart(33, "span", 26);
      \u0275\u0275text(34, "\u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "footer", 27)(36, "p", 28);
      \u0275\u0275text(37, "Ainda n\xE3o tem conta?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 29);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_38_listener() {
        return ctx.toggleRegisterModal();
      });
      \u0275\u0275text(39, " CADASTRAR AGORA ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 30)(41, "span", 31);
      \u0275\u0275text(42, "WishDraw \xA9 2026");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(43, LoginComponent_Conditional_43_Template, 51, 6, "div", 32);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275property("ngModel", ctx.email());
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.password());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoggingIn());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoggingIn() ? "CARREGANDO..." : "ENTRAR", " ");
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.isRegisterModalOpen() ? 43 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n@keyframes _ngcontent-%COMP%_float {\n  0% {\n    transform: translateY(0px) rotate(-12deg);\n  }\n  50% {\n    transform: translateY(-10px) rotate(-12deg);\n  }\n  100% {\n    transform: translateY(0px) rotate(-12deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_float-delayed {\n  0% {\n    transform: translateY(0px) rotate(15deg);\n  }\n  50% {\n    transform: translateY(-10px) rotate(15deg);\n  }\n  100% {\n    transform: translateY(0px) rotate(15deg);\n  }\n}\n.animate-float[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n.animate-float-delayed[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_float-delayed 3.5s ease-in-out infinite;\n}\n.btn-press[_ngcontent-%COMP%]:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px black;\n}\n.bg-pattern[_ngcontent-%COMP%] {\n  background-color: #ffd709;\n  background-image: radial-gradient(#000000 1.5px, transparent 1.5px);\n  background-size: 32px 32px;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Login Container -->\r
<div class="bg-pattern min-h-screen w-full flex flex-col items-center justify-center p-4">\r
  <main class="w-full max-w-md relative">\r
    <!-- Animated Decorative Stickers (Asymmetry) -->\r
    <div class="absolute -top-12 -left-12 w-24 h-24 rotate-[-12deg] z-10 hidden md:block">\r
      <div\r
        class="bg-accent border-4 border-foreground p-4 neo-shadow-sm flex items-center justify-center rounded-xl animate-float">\r
        <!-- \xCDcone de Presente SVG -->\r
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />\r
        </svg>\r
      </div>\r
    </div>\r
    <div class="absolute -bottom-8 -right-8 w-20 h-20 rotate-[15deg] z-10 hidden md:block">\r
      <div\r
        class="bg-primary border-4 border-foreground p-4 neo-shadow-sm flex items-center justify-center rounded-full animate-float-delayed">\r
        <!-- \xCDcone de Comemora\xE7\xE3o SVG -->\r
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />\r
        </svg>\r
      </div>\r
    </div>\r
\r
    <!-- Main Login Card -->\r
    <div class="bg-card border-4 border-foreground p-6 md:p-10 neo-shadow rounded-xl relative overflow-hidden">\r
      <!-- Logo Section -->\r
      <div class="flex justify-center mb-5">\r
        <div class="w-24 h-24 rounded-lg">\r
          <img alt="Santa R\xE1pido Logo" class="w-full h-full object-contain" src="/logo.png" />\r
        </div>\r
      </div>\r
\r
      <!-- Title -->\r
      <header class="text-center mb-6">\r
        <h1 class="font-headline font-black text-3xl md:text-4xl uppercase tracking-tighter leading-none mb-1">\r
          ENTRAR NA FESTA\r
        </h1>\r
        <p class="text-muted-foreground text-sm font-medium">O seu amigo secreto sem enrola\xE7\xE3o.</p>\r
      </header>\r
\r
      <!-- Form -->\r
      <form class="space-y-5" (submit)="onLogin()">\r
        <div>\r
          <label class="block font-headline font-bold text-xs uppercase mb-1.5" for="email">EMAIL</label>\r
          <input\r
            class="w-full px-4 py-3.5 bg-background border-[3px] border-foreground rounded-lg focus:outline-none focus:bg-primary/20 transition-colors font-medium placeholder:text-muted-foreground text-sm"\r
            id="email" name="email" [ngModel]="email()" (ngModelChange)="email.set($event)" placeholder="seu@email.com"\r
            required type="email" />\r
        </div>\r
\r
        <div class="relative">\r
          <div class="flex justify-between items-center mb-1.5">\r
            <label class="block font-headline font-bold text-xs uppercase" for="password">SENHA</label>\r
            <a class="text-xs font-bold uppercase hover:underline decoration-2" href="#">Esqueceu?</a>\r
          </div>\r
          <input\r
            class="w-full px-4 py-3.5 bg-background border-[3px] border-foreground rounded-lg focus:outline-none focus:bg-primary/20 transition-colors font-medium placeholder:text-muted-foreground text-sm"\r
            id="password" name="password" [ngModel]="password()" (ngModelChange)="password.set($event)"\r
            placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" required type="password" />\r
        </div>\r
\r
        <button\r
          class="w-full py-4.5 bg-accent border-4 border-foreground font-headline font-black text-xl uppercase neo-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none btn-press transition-all flex items-center justify-center gap-3"\r
          type="submit" [disabled]="isLoggingIn()">\r
          {{ isLoggingIn() ? 'CARREGANDO...' : 'ENTRAR' }}\r
          <span class="font-black">\u2192</span>\r
        </button>\r
      </form>\r
\r
      <!-- Footer Links -->\r
      <footer class="mt-8 pt-6 border-t-4 border-foreground flex flex-col items-center gap-2">\r
        <p class="font-medium text-xs text-center">Ainda n\xE3o tem conta?</p>\r
        <button\r
          class="font-headline font-black text-lg uppercase underline decoration-4 hover:text-primary transition-colors cursor-pointer"\r
          (click)="toggleRegisterModal()">\r
          CADASTRAR AGORA\r
        </button>\r
      </footer>\r
    </div>\r
\r
    <!-- Branding Footer -->\r
    <div class="mt-4 text-center">\r
      <span class="font-display font-black text-xs text-muted-foreground uppercase italic opacity-50">WishDraw \xA9 2026</span>\r
    </div>\r
  </main>\r
\r
  <!-- Register Modal -->\r
  @if (isRegisterModalOpen()) {\r
  <div class="fixed inset-0 z-[100] bg-black/40 backdrop-blur-md flex items-center justify-center p-4">\r
    <div class="absolute inset-0" (click)="toggleRegisterModal()"></div>\r
    \r
    <!-- Modal: Registration Card -->\r
    <section class="relative w-full max-w-lg bg-card border-[6px] border-foreground neo-shadow-lg animate-in fade-in zoom-in duration-300 z-10 rounded-none">\r
      \r
      <!-- Close Button -->\r
      <button class="absolute -top-6 -right-6 bg-destructive border-4 border-foreground p-3 neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all group" (click)="toggleRegisterModal()">\r
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-destructive-foreground font-black block group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />\r
        </svg>\r
      </button>\r
      \r
      <!-- Header Sticker -->\r
      <div class="absolute -top-10 left-8 bg-primary border-4 border-foreground px-6 py-3 neo-shadow transform -rotate-3 z-20">\r
        <h2 class="text-2xl font-black uppercase tracking-tight text-primary-foreground">CRIAR MINHA CONTA</h2>\r
      </div>\r
      \r
      <!-- Modal Content -->\r
      <div class="p-8 md:p-12 pt-16">\r
        <p class="text-muted-foreground font-medium mb-8 text-base">Junte-se \xE0 divers\xE3o! Sem frescuras, apenas sorteios r\xE1pidos.</p>\r
        \r
        <form class="space-y-6" (submit)="onRegister()">\r
          <!-- Name Field -->\r
          <div class="space-y-2">\r
            <label class="font-headline font-bold uppercase tracking-wide text-sm flex items-center gap-2" for="registerName">\r
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />\r
              </svg>\r
              Nome Completo\r
            </label>\r
            <input \r
              class="w-full bg-background border-4 border-foreground px-5 py-4 font-bold text-lg focus:bg-primary/20 focus:ring-0 focus:outline-none transition-colors placeholder:text-muted-foreground/45 rounded-none" \r
              id="registerName" \r
              name="registerName"\r
              [ngModel]="registerName()"\r
              (ngModelChange)="registerName.set($event)"\r
              placeholder="Como te chamam?" \r
              required \r
              type="text"\r
            />\r
          </div>\r
          \r
          <!-- Email Field -->\r
          <div class="space-y-2">\r
            <label class="font-headline font-bold uppercase tracking-wide text-sm flex items-center gap-2" for="registerEmail">\r
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />\r
              </svg>\r
              E-mail\r
            </label>\r
            <input \r
              class="w-full bg-background border-4 border-foreground px-5 py-4 font-bold text-lg focus:bg-primary/20 focus:ring-0 focus:outline-none transition-colors placeholder:text-muted-foreground/45 rounded-none" \r
              id="registerEmail" \r
              name="registerEmail"\r
              [ngModel]="registerEmail()"\r
              (ngModelChange)="registerEmail.set($event)"\r
              placeholder="seu@email.com" \r
              required \r
              type="email"\r
            />\r
          </div>\r
          \r
          <!-- Password fields side-by-side to save space and fit nicely -->\r
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
            <!-- Password Field -->\r
            <div class="space-y-2">\r
              <label class="font-headline font-bold uppercase tracking-wide text-sm flex items-center gap-2" for="registerPassword">\r
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />\r
                </svg>\r
                Senha Secreta\r
              </label>\r
              <input \r
                class="w-full bg-background border-4 border-foreground px-5 py-4 font-bold text-lg focus:bg-primary/20 focus:ring-0 focus:outline-none transition-colors placeholder:text-muted-foreground/45 rounded-none" \r
                id="registerPassword" \r
                name="registerPassword"\r
                [ngModel]="registerPassword()"\r
                (ngModelChange)="registerPassword.set($event)"\r
                placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" \r
                required \r
                type="password"\r
              />\r
            </div>\r
\r
            <!-- Confirm Password Field -->\r
            <div class="space-y-2">\r
              <label class="font-headline font-bold uppercase tracking-wide text-sm flex items-center gap-2" for="registerConfirmPassword">\r
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />\r
                </svg>\r
                Confirmar Senha\r
              </label>\r
              <input \r
                class="w-full bg-background border-4 border-foreground px-5 py-4 font-bold text-lg focus:bg-primary/20 focus:ring-0 focus:outline-none transition-colors placeholder:text-muted-foreground/45 rounded-none" \r
                id="registerConfirmPassword" \r
                name="registerConfirmPassword"\r
                [ngModel]="registerConfirmPassword()"\r
                (ngModelChange)="registerConfirmPassword.set($event)"\r
                placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" \r
                required \r
                type="password"\r
              />\r
            </div>\r
          </div>\r
          \r
          <!-- Submit Button -->\r
          <div class="pt-4">\r
            <button \r
              class="w-full bg-accent border-4 border-foreground py-5 px-8 font-black text-2xl uppercase tracking-tighter neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-3 rounded-none" \r
              type="submit"\r
              [disabled]="isRegistering()"\r
            >\r
              {{ isRegistering() ? 'CADASTRANDO...' : 'CADASTRAR' }}\r
              <span class="font-black">\u2192</span>\r
            </button>\r
          </div>\r
        </form>\r
        \r
        <!-- Footer Link -->\r
        <div class="mt-8 pt-6 border-t-4 border-foreground/10 flex justify-center">\r
          <p class="text-sm font-bold uppercase tracking-wider text-muted-foreground">\r
            J\xE1 tem conta? <button class="text-primary underline decoration-2 underline-offset-2 hover:text-primary/80 transition-colors" (click)="toggleRegisterModal()">Fazer Login</button>\r
          </p>\r
        </div>\r
      </div>\r
      \r
      <!-- Decorative Sticker (Bottom Left) -->\r
      <div class="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary border-4 border-foreground neo-shadow rounded-full flex items-center justify-center rotate-12 z-20">\r
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />\r
        </svg>\r
      </div>\r
    </section>\r
  </div>\r
  }\r
</div>`, styles: ["/* apps/web/src/app/features/login/login.component.css */\n@keyframes float {\n  0% {\n    transform: translateY(0px) rotate(-12deg);\n  }\n  50% {\n    transform: translateY(-10px) rotate(-12deg);\n  }\n  100% {\n    transform: translateY(0px) rotate(-12deg);\n  }\n}\n@keyframes float-delayed {\n  0% {\n    transform: translateY(0px) rotate(15deg);\n  }\n  50% {\n    transform: translateY(-10px) rotate(15deg);\n  }\n  100% {\n    transform: translateY(0px) rotate(15deg);\n  }\n}\n.animate-float {\n  animation: float 3s ease-in-out infinite;\n}\n.animate-float-delayed {\n  animation: float-delayed 3.5s ease-in-out infinite;\n}\n.btn-press:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0px 0px 0px 0px black;\n}\n.bg-pattern {\n  background-color: #ffd709;\n  background-image: radial-gradient(#000000 1.5px, transparent 1.5px);\n  background-size: 32px 32px;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-FTR4ROEX.js.map
