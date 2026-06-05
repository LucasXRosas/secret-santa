import {
  BrlCurrencyPipe,
  RelativeDatePipe
} from "./chunk-6GD34B6A.js";
import {
  EventService
} from "./chunk-2LLAPXEH.js";
import {
  FooterComponent,
  HeaderComponent,
  SidenavComponent
} from "./chunk-4J7WXTPV.js";
import {
  AuthService,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PP7CZ2AI.js";

// apps/web/src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, "Carregando seus eventos...");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function DashboardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 14);
    \u0275\u0275text(2, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 15);
    \u0275\u0275text(4, "Nenhum sorteio ainda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6, " Voc\xEA ainda n\xE3o criou nenhum amigo secreto. Que tal come\xE7ar agora? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.novoEvento());
    });
    \u0275\u0275text(8, " Criar meu primeiro evento ");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_19_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22)(1, "span", 23);
    \u0275\u0275text(2, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "relativeDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, event_r4.draw_date), " ");
  }
}
function DashboardComponent_Conditional_19_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22)(1, "span", 23);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "brlCurrency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, event_r4.budget), " ");
  }
}
function DashboardComponent_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_19_For_2_Template_div_click_0_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.abrirEvento(event_r4));
    });
    \u0275\u0275elementStart(1, "h2", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275conditionalCreate(4, DashboardComponent_Conditional_19_For_2_Conditional_4_Template, 5, 3, "span", 22);
    \u0275\u0275conditionalCreate(5, DashboardComponent_Conditional_19_For_2_Conditional_5_Template, 5, 3, "span", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(event_r4.draw_date ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r4.budget != null ? 5 : -1);
  }
}
function DashboardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_19_For_2_Template, 6, 3, "div", 18, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.events());
  }
}
var DashboardComponent = class _DashboardComponent {
  authService = inject(AuthService);
  eventService = inject(EventService);
  router = inject(Router);
  /** Controla a abertura do menu lateral (mesmo padrão da home). */
  sidenavOpen = signal(false, ...ngDevMode ? [{ debugName: "sidenavOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Eventos do usuário carregados do banco. */
  events = signal([], ...ngDevMode ? [{ debugName: "events" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  async ngOnInit() {
    await this.loadEvents();
  }
  async loadEvents() {
    this.loading.set(true);
    this.errorMessage.set(null);
    try {
      this.events.set(await this.eventService.listMyEvents());
    } catch (error) {
      console.error("Erro ao carregar eventos:", error);
      this.errorMessage.set("N\xE3o foi poss\xEDvel carregar seus eventos.");
    } finally {
      this.loading.set(false);
    }
  }
  novoEvento() {
    this.router.navigate(["/eventos/novo"]);
  }
  abrirEvento(event) {
    this.router.navigate(["/eventos", event.id]);
  }
  async logout() {
    try {
      await this.authService.signOut();
      this.router.navigate(["/login"]);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 21, vars: 2, consts: [[1, "min-h-screen", "flex", "flex-col", "bg-background"], [3, "isOpenChange", "isOpen"], [3, "toggleSidenav"], [1, "flex-1", "w-full", "max-w-5xl", "mx-auto", "px-6", "py-12"], [1, "mb-12", "flex", "flex-col", "md:flex-row", "md:items-end", "md:justify-between", "gap-6"], [1, "font-headline", "font-black", "text-5xl", "md:text-6xl", "text-foreground", "mb-4", "tracking-tighter", "uppercase", "leading-none"], [1, "text-[#635388]"], [1, "text-lg", "text-muted-foreground", "max-w-xl", "font-medium"], [1, "shrink-0", "bg-primary", "border-4", "border-black", "px-6", "py-4", "font-headline", "font-black", "text-lg", "uppercase", "tracking-tighter", "neo-shadow", "hover:bg-accent", "active:translate-x-1", "active:translate-y-1", "active:shadow-none", "transition-all", "flex", "items-center", "gap-2", 3, "click"], [1, "material-symbols-outlined"], [1, "font-headline", "font-bold", "uppercase", "text-muted-foreground"], [1, "border-4", "border-black", "bg-destructive/10", "p-6", "font-bold", "text-destructive"], [1, "bg-white", "border-4", "border-black", "border-dashed", "p-12", "text-center", "flex", "flex-col", "items-center", "gap-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "material-symbols-outlined", "text-6xl"], [1, "font-headline", "font-black", "text-2xl", "uppercase"], [1, "text-muted-foreground", "font-medium", "max-w-md"], [1, "mt-2", "bg-primary", "border-4", "border-black", "px-6", "py-3", "font-headline", "font-black", "uppercase", "tracking-tighter", "neo-shadow", "hover:bg-accent", "active:translate-x-1", "active:translate-y-1", "active:shadow-none", "transition-all", 3, "click"], [1, "bg-card", "border-4", "border-black", "p-6", "neo-shadow", "active-press", "cursor-pointer", "flex", "flex-col", "justify-between"], [1, "bg-card", "border-4", "border-black", "p-6", "neo-shadow", "active-press", "cursor-pointer", "flex", "flex-col", "justify-between", 3, "click"], [1, "font-headline", "font-black", "text-3xl", "text-black", "mb-2", "uppercase"], [1, "flex", "flex-wrap", "gap-3", "mt-4"], [1, "flex", "items-center", "gap-1", "bg-white", "border-2", "border-black", "px-3", "py-1", "text-xs", "font-bold", "font-headline", "uppercase"], [1, "material-symbols-outlined", "text-sm"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-sidenav", 1);
      \u0275\u0275twoWayListener("isOpenChange", function DashboardComponent_Template_app_sidenav_isOpenChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sidenavOpen, $event) || (ctx.sidenavOpen = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-header", 2);
      \u0275\u0275listener("toggleSidenav", function DashboardComponent_Template_app_header_toggleSidenav_2_listener() {
        return ctx.sidenavOpen.set(!ctx.sidenavOpen());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "main", 3)(4, "section", 4)(5, "div")(6, "h1", 5);
      \u0275\u0275text(7, " Suas ");
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "Trocas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, " Gerencie seus amigos secretos, acompanhe as revela\xE7\xF5es e prepare o presente perfeito. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_12_listener() {
        return ctx.novoEvento();
      });
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14, "add_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Novo Evento ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(16, DashboardComponent_Conditional_16_Template, 2, 0, "p", 10)(17, DashboardComponent_Conditional_17_Template, 2, 1, "div", 11)(18, DashboardComponent_Conditional_18_Template, 9, 0, "div", 12)(19, DashboardComponent_Conditional_19_Template, 3, 0, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-footer");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("isOpen", ctx.sidenavOpen);
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.loading() ? 16 : ctx.errorMessage() ? 17 : ctx.events().length === 0 ? 18 : 19);
    }
  }, dependencies: [HeaderComponent, FooterComponent, SidenavComponent, BrlCurrencyPipe, RelativeDatePipe], styles: ["\n.active-press[_ngcontent-%COMP%]:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0 0 0 0 black;\n}\n.neo-shadow-yellow[_ngcontent-%COMP%] {\n  box-shadow: 4px 4px 0 0 #ffd700;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [HeaderComponent, FooterComponent, SidenavComponent, BrlCurrencyPipe, RelativeDatePipe], template: '<div class="min-h-screen flex flex-col bg-background">\r\n  <!-- ===== Componentes reaproveitados da home ===== -->\r\n  <!-- [ID12] two-way binding via model(): [(isOpen)] sincroniza sidenavOpen bidireccionalmente -->\r\n  <app-sidenav [(isOpen)]="sidenavOpen"></app-sidenav>\r\n  <app-header (toggleSidenav)="sidenavOpen.set(!sidenavOpen())"></app-header>\r\n\r\n  <main class="flex-1 w-full max-w-5xl mx-auto px-6 py-12">\r\n    <!-- Cabe\xE7alho + a\xE7\xE3o de novo evento -->\r\n    <section class="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">\r\n      <div>\r\n        <h1\r\n          class="font-headline font-black text-5xl md:text-6xl text-foreground mb-4 tracking-tighter uppercase leading-none"\r\n        >\r\n          Suas <span class="text-[#635388]">Trocas</span>\r\n        </h1>\r\n        <p class="text-lg text-muted-foreground max-w-xl font-medium">\r\n          Gerencie seus amigos secretos, acompanhe as revela\xE7\xF5es e prepare o presente perfeito.\r\n        </p>\r\n      </div>\r\n\r\n      <button\r\n        (click)="novoEvento()"\r\n        class="shrink-0 bg-primary border-4 border-black px-6 py-4 font-headline font-black text-lg uppercase tracking-tighter neo-shadow hover:bg-accent active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"\r\n      >\r\n        <span class="material-symbols-outlined">add_circle</span>\r\n        Novo Evento\r\n      </button>\r\n    </section>\r\n\r\n    <!-- Estados: carregando / erro / vazio / lista -->\r\n    @if (loading()) {\r\n      <p class="font-headline font-bold uppercase text-muted-foreground">Carregando seus eventos...</p>\r\n    } @else if (errorMessage()) {\r\n      <div class="border-4 border-black bg-destructive/10 p-6 font-bold text-destructive">\r\n        {{ errorMessage() }}\r\n      </div>\r\n    } @else if (events().length === 0) {\r\n      <!-- Estado vazio -->\r\n      <div\r\n        class="bg-white border-4 border-black border-dashed p-12 text-center flex flex-col items-center gap-4"\r\n      >\r\n        <span class="material-symbols-outlined text-6xl">redeem</span>\r\n        <h2 class="font-headline font-black text-2xl uppercase">Nenhum sorteio ainda</h2>\r\n        <p class="text-muted-foreground font-medium max-w-md">\r\n          Voc\xEA ainda n\xE3o criou nenhum amigo secreto. Que tal come\xE7ar agora?\r\n        </p>\r\n        <button\r\n          (click)="novoEvento()"\r\n          class="mt-2 bg-primary border-4 border-black px-6 py-3 font-headline font-black uppercase tracking-tighter neo-shadow hover:bg-accent active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"\r\n        >\r\n          Criar meu primeiro evento\r\n        </button>\r\n      </div>\r\n    } @else {\r\n      <!-- Lista de eventos -->\r\n      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r\n        @for (event of events(); track event.id) {\r\n          <div\r\n            (click)="abrirEvento(event)"\r\n            class="bg-card border-4 border-black p-6 neo-shadow active-press cursor-pointer flex flex-col justify-between"\r\n          >\r\n            <h2 class="font-headline font-black text-3xl text-black mb-2 uppercase">\r\n              {{ event.name }}\r\n            </h2>\r\n            <div class="flex flex-wrap gap-3 mt-4">\r\n              @if (event.draw_date) {\r\n                <!-- [ID8] RelativeDatePipe: data relativa pt-BR -->\r\n                <span\r\n                  class="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 text-xs font-bold font-headline uppercase"\r\n                >\r\n                  <span class="material-symbols-outlined text-sm">calendar_today</span>\r\n                  {{ event.draw_date | relativeDate }}\r\n                </span>\r\n              }\r\n              @if (event.budget != null) {\r\n                <!-- [ID8] BrlCurrencyPipe: moeda BRL formatada -->\r\n                <span\r\n                  class="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 text-xs font-bold font-headline uppercase"\r\n                >\r\n                  <span class="material-symbols-outlined text-sm">payments</span>\r\n                  {{ event.budget | brlCurrency }}\r\n                </span>\r\n              }\r\n            </div>\r\n          </div>\r\n        }\r\n      </div>\r\n    }\r\n  </main>\r\n\r\n  <app-footer></app-footer>\r\n</div>\r\n', styles: ["/* apps/web/src/app/features/dashboard/dashboard.component.css */\n.active-press:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0 0 0 0 black;\n}\n.neo-shadow-yellow {\n  box-shadow: 4px 4px 0 0 #ffd700;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "apps/web/src/app/features/dashboard/dashboard.component.ts", lineNumber: 17 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-JZW6VF2E.js.map
