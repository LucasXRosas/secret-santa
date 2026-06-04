import {
  Component,
  EventEmitter,
  Input,
  Output,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtext
} from "./chunk-SPEW6YYM.js";

// apps/web/src/app/components/header/header.component.ts
var HeaderComponent = class _HeaderComponent {
  toggleSidenav = new EventEmitter();
  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], outputs: { toggleSidenav: "toggleSidenav" }, decls: 14, vars: 0, consts: [[1, "w-full", "bg-primary", "border-b-4", "border-black", "px-6", "py-4", "flex", "items-center", "justify-between", "z-40", "relative"], ["routerLink", "/", 1, "text-2xl", "font-headline", "font-black", "uppercase", "tracking-tighter", "text-black", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"], [1, "hidden", "lg:flex", "items-center", "gap-6"], ["routerLink", "/", 1, "text-black", "font-headline", "font-bold", "uppercase", "hover:bg-black", "hover:text-white", "px-3", "py-1", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"], ["routerLink", "/sorteio", 1, "text-black", "font-headline", "font-bold", "uppercase", "hover:bg-black", "hover:text-white", "px-3", "py-1", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"], ["routerLink", "/login", 1, "text-black", "font-headline", "font-bold", "uppercase", "hover:bg-black", "hover:text-white", "px-3", "py-1", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"], ["aria-label", "Abrir menu", 1, "lg:hidden", "p-2", "bg-white", "border-2", "border-black", "neo-shadow-sm", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black", "flex", "flex-col", "justify-center", "items-center", "gap-1", "w-10", "h-10", 3, "click"], [1, "block", "w-5", "h-0.5", "bg-black"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "a", 1);
      \u0275\u0275text(2, " Wish Draw ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "nav", 2)(4, "a", 3);
      \u0275\u0275text(5, " In\xEDcio ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 4);
      \u0275\u0275text(7, " Sorteio ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " Login ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_10_listener() {
        return ctx.onToggleSidenav();
      });
      \u0275\u0275element(11, "span", 7)(12, "span", 7)(13, "span", 7);
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [RouterLink], template: '<header\r\n  class="w-full bg-primary border-b-4 border-black px-6 py-4 flex items-center justify-between z-40 relative"\r\n>\r\n  <!-- Logo / T\xEDtulo -->\r\n  <a\r\n    routerLink="/"\r\n    class="text-2xl font-headline font-black uppercase tracking-tighter text-black outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n  >\r\n    Wish Draw\r\n  </a>\r\n\r\n  <!-- Menu Desktop -->\r\n  <nav class="hidden lg:flex items-center gap-6">\r\n    <a\r\n      routerLink="/"\r\n      class="text-black font-headline font-bold uppercase hover:bg-black hover:text-white px-3 py-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n    >\r\n      In\xEDcio\r\n    </a>\r\n    <a\r\n      routerLink="/sorteio"\r\n      class="text-black font-headline font-bold uppercase hover:bg-black hover:text-white px-3 py-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n    >\r\n      Sorteio\r\n    </a>\r\n    <a\r\n      routerLink="/login"\r\n      class="text-black font-headline font-bold uppercase hover:bg-black hover:text-white px-3 py-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n    >\r\n      Login\r\n    </a>\r\n  </nav>\r\n\r\n  <!-- Bot\xE3o Menu Mobile -->\r\n  <button\r\n    (click)="onToggleSidenav()"\r\n    class="lg:hidden p-2 bg-white border-2 border-black neo-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all outline-none focus-visible:ring-2 focus-visible:ring-black flex flex-col justify-center items-center gap-1 w-10 h-10"\r\n    aria-label="Abrir menu"\r\n  >\r\n    <span class="block w-5 h-0.5 bg-black"></span>\r\n    <span class="block w-5 h-0.5 bg-black"></span>\r\n    <span class="block w-5 h-0.5 bg-black"></span>\r\n  </button>\r\n</header>\r\n' }]
  }], null, { toggleSidenav: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "apps/web/src/app/components/header/header.component.ts", lineNumber: 10 });
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
var SidenavComponent = class _SidenavComponent {
  isOpen = false;
  closeSidenav = new EventEmitter();
  onClose() {
    this.closeSidenav.emit();
  }
  static \u0275fac = function SidenavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidenavComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidenavComponent, selectors: [["app-sidenav"]], inputs: { isOpen: "isOpen" }, outputs: { closeSidenav: "closeSidenav" }, decls: 14, vars: 5, consts: [["aria-hidden", "true", 1, "fixed", "inset-0", "bg-black/50", "z-40", "transition-opacity", "lg:hidden"], [1, "fixed", "top-0", "left-0", "w-64", "h-full", "bg-secondary", "border-r-4", "border-black", "z-50", "transform", "transition-transform", "duration-300", "ease-in-out", "lg:hidden", "neo-shadow-lg"], [1, "flex", "items-center", "justify-between", "p-4", "border-b-4", "border-black", "bg-white"], [1, "text-xl", "font-headline", "font-black", "uppercase", "tracking-tighter", "text-black"], ["aria-label", "Fechar menu", 1, "p-2", "bg-primary", "border-2", "border-black", "neo-shadow-sm", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all", "focus:outline-none", "focus-visible:ring-2", "focus-visible:ring-black", "w-8", "h-8", "flex", "items-center", "justify-center", "font-bold", 3, "click"], [1, "flex", "flex-col", "p-4", "gap-4"], ["routerLink", "/", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"], ["routerLink", "/sorteio", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"], ["routerLink", "/login", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"], ["aria-hidden", "true", 1, "fixed", "inset-0", "bg-black/50", "z-40", "transition-opacity", "lg:hidden", 3, "click"]], template: function SidenavComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(12, "a", 8);
      \u0275\u0275listener("click", function SidenavComponent_Template_a_click_12_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(13, " login ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("-translate-x-full", !ctx.isOpen)("translate-x-0", ctx.isOpen);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidenavComponent, [{
    type: Component,
    args: [{ selector: "app-sidenav", standalone: true, imports: [RouterLink], template: '<!-- Backdrop Overlay (escurece o fundo e permite clicar para fechar) -->\r\n@if (isOpen) {\r\n  <div\r\n    class="fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden"\r\n    (click)="onClose()"\r\n    aria-hidden="true"\r\n  ></div>\r\n}\r\n\r\n<!-- Menu Lateral (Drawer) -->\r\n<aside\r\n  class="fixed top-0 left-0 w-64 h-full bg-secondary border-r-4 border-black z-50 transform transition-transform duration-300 ease-in-out lg:hidden neo-shadow-lg"\r\n  [class.-translate-x-full]="!isOpen"\r\n  [class.translate-x-0]="isOpen"\r\n>\r\n  <div class="flex items-center justify-between p-4 border-b-4 border-black bg-white">\r\n    <span class="text-xl font-headline font-black uppercase tracking-tighter text-black">Menu</span>\r\n    <!-- Bot\xE3o Fechar -->\r\n    <button\r\n      (click)="onClose()"\r\n      class="p-2 bg-primary border-2 border-black neo-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black w-8 h-8 flex items-center justify-center font-bold"\r\n      aria-label="Fechar menu"\r\n    >\r\n      X\r\n    </button>\r\n  </div>\r\n\r\n  <nav class="flex flex-col p-4 gap-4">\r\n    <a\r\n      routerLink="/"\r\n      (click)="onClose()"\r\n      class="text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-primary hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n    >\r\n      In\xEDcio\r\n    </a>\r\n    <a\r\n      routerLink="/sorteio"\r\n      (click)="onClose()"\r\n      class="text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-primary hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n    >\r\n      Sorteio\r\n    </a>\r\n    <a\r\n      routerLink="/login"\r\n      (click)="onClose()"\r\n      class="text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-primary hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n    >\r\n      login\r\n    </a>\r\n  </nav>\r\n</aside>\r\n' }]
  }], null, { isOpen: [{
    type: Input
  }], closeSidenav: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidenavComponent, { className: "SidenavComponent", filePath: "apps/web/src/app/components/sidenav/sidenav.component.ts", lineNumber: 10 });
})();

export {
  HeaderComponent,
  FooterComponent,
  SidenavComponent
};
//# sourceMappingURL=chunk-WIC73XW4.js.map
