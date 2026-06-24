import {
  BrlCurrencyPipe,
  RelativeDatePipe
} from "./chunk-PVHTZ7FE.js";
import {
  EventService
} from "./chunk-Z5HBZ42I.js";
import {
  HeaderComponent,
  ParticipantService,
  SidenavComponent
} from "./chunk-U4QV6FE4.js";
import "./chunk-YETSNVPI.js";
import {
  AuthService,
  Router
} from "./chunk-6MYGOC25.js";
import {
  Component,
  inject,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefer,
  ɵɵdeferOnViewport,
  ɵɵdefineComponent,
  ɵɵdomTemplate,
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
} from "./chunk-CU26WE3Z.js";

// apps/web/src/app/features/dashboard/dashboard.component.ts
var DashboardComponent_Defer_21_DepsFn = () => [import("./chunk-6XDZJNNS.js").then((m) => m.FooterComponent)];
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
function DashboardComponent_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 17);
    \u0275\u0275text(2, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 18);
    \u0275\u0275text(4, "Nenhum sorteio ainda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 19);
    \u0275\u0275text(6, " Voc\xEA ainda n\xE3o criou nenhum amigo secreto. Que tal come\xE7ar agora? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 20);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_18_Conditional_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.novoEvento());
    });
    \u0275\u0275text(8, " Criar meu primeiro evento ");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_18_Conditional_6_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28)(1, "span", 26);
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
function DashboardComponent_Conditional_18_Conditional_6_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28)(1, "span", 26);
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
function DashboardComponent_Conditional_18_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_18_Conditional_6_For_2_Template_div_click_0_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.abrirEvento(event_r4));
    });
    \u0275\u0275elementStart(1, "div")(2, "h3", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "p", 25)(6, "span", 26);
    \u0275\u0275text(7, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 25)(10, "span", 26);
    \u0275\u0275text(11, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 27);
    \u0275\u0275conditionalCreate(14, DashboardComponent_Conditional_18_Conditional_6_For_2_Conditional_14_Template, 5, 3, "span", 28);
    \u0275\u0275conditionalCreate(15, DashboardComponent_Conditional_18_Conditional_6_For_2_Conditional_15_Template, 5, 3, "span", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", event_r4.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", event_r4.organizer_name || "Indefinido", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", event_r4.location || "Indefinido", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(event_r4.draw_date ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r4.budget != null ? 15 : -1);
  }
}
function DashboardComponent_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_18_Conditional_6_For_2_Template, 16, 5, "div", 21, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.events());
  }
}
function DashboardComponent_Conditional_18_Conditional_7_For_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28)(1, "span", 26);
    \u0275\u0275text(2, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "relativeDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, event_r6.draw_date), " ");
  }
}
function DashboardComponent_Conditional_18_Conditional_7_For_7_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28)(1, "span", 26);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "brlCurrency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, event_r6.budget), " ");
  }
}
function DashboardComponent_Conditional_18_Conditional_7_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_18_Conditional_7_For_7_Template_div_click_0_listener() {
      const event_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.abrirEvento(event_r6));
    });
    \u0275\u0275elementStart(1, "div")(2, "h3", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "p", 25)(6, "span", 26);
    \u0275\u0275text(7, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 25)(10, "span", 26);
    \u0275\u0275text(11, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 27);
    \u0275\u0275conditionalCreate(14, DashboardComponent_Conditional_18_Conditional_7_For_7_Conditional_14_Template, 5, 3, "span", 28);
    \u0275\u0275conditionalCreate(15, DashboardComponent_Conditional_18_Conditional_7_For_7_Conditional_15_Template, 5, 3, "span", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", event_r6.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", event_r6.organizer_name || "Indefinido", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", event_r6.location || "Indefinido", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(event_r6.draw_date ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r6.budget != null ? 15 : -1);
  }
}
function DashboardComponent_Conditional_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "h2", 13)(2, "span", 14);
    \u0275\u0275text(3, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Participo de ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275repeaterCreate(6, DashboardComponent_Conditional_18_Conditional_7_For_7_Template, 16, 5, "div", 29, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.participatingEvents());
  }
}
function DashboardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 13)(2, "span", 14);
    \u0275\u0275text(3, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Meus Sorteios ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DashboardComponent_Conditional_18_Conditional_5_Template, 9, 0, "div", 15)(6, DashboardComponent_Conditional_18_Conditional_6_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DashboardComponent_Conditional_18_Conditional_7_Template, 8, 0, "section");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.events().length === 0 ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.participatingEvents().length > 0 ? 7 : -1);
  }
}
function DashboardComponent_Defer_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-footer");
  }
}
function DashboardComponent_DeferPlaceholder_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
}
var DashboardComponent = class _DashboardComponent {
  authService = inject(AuthService);
  eventService = inject(EventService);
  participantService = inject(ParticipantService);
  router = inject(Router);
  sidenavOpen = signal(false, ...ngDevMode ? [{ debugName: "sidenavOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Eventos criados pelo usuário. */
  events = signal([], ...ngDevMode ? [{ debugName: "events" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Eventos em que o usuário foi convidado e aceitou. */
  participatingEvents = signal([], ...ngDevMode ? [{ debugName: "participatingEvents" }] : (
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
      const user = this.authService.currentUser();
      const [owned, participating] = await Promise.all([
        this.eventService.listMyEvents(),
        user?.email ? this.participantService.listParticipatingEvents(user.email) : Promise.resolve([])
      ]);
      this.events.set(owned);
      const ownedIds = new Set(owned.map((e) => e.id));
      this.participatingEvents.set(participating.filter((e) => !ownedIds.has(e.id)));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 23, vars: 2, consts: [[1, "min-h-screen", "flex", "flex-col", "bg-background"], [3, "isOpenChange", "isOpen"], [3, "toggleSidenav"], [1, "flex-1", "w-full", "max-w-5xl", "mx-auto", "px-6", "py-12"], [1, "mb-12", "flex", "flex-col", "md:flex-row", "md:items-end", "md:justify-between", "gap-6"], [1, "font-headline", "font-black", "text-5xl", "md:text-6xl", "text-foreground", "mb-4", "tracking-tighter", "uppercase", "leading-none"], [1, "text-[#635388]"], [1, "text-lg", "text-muted-foreground", "max-w-xl", "font-medium"], [1, "shrink-0", "bg-primary", "border-4", "border-black", "px-6", "py-4", "font-headline", "font-black", "text-lg", "uppercase", "tracking-tighter", "neo-shadow", "hover:bg-accent", "active:translate-x-1", "active:translate-y-1", "active:shadow-none", "transition-all", "flex", "items-center", "gap-2", 3, "click"], [1, "material-symbols-outlined"], [1, "font-headline", "font-bold", "uppercase", "text-muted-foreground"], [1, "border-4", "border-black", "bg-destructive/10", "p-6", "font-bold", "text-destructive"], [1, "mb-12"], [1, "font-headline", "font-black", "text-2xl", "uppercase", "tracking-tighter", "mb-6", "flex", "items-center", "gap-3"], [1, "material-symbols-outlined", "text-2xl"], [1, "bg-white", "border-4", "border-black", "border-dashed", "p-12", "text-center", "flex", "flex-col", "items-center", "gap-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "material-symbols-outlined", "text-6xl"], [1, "font-headline", "font-black", "text-2xl", "uppercase"], [1, "text-muted-foreground", "font-medium", "max-w-md"], [1, "mt-2", "bg-primary", "border-4", "border-black", "px-6", "py-3", "font-headline", "font-black", "uppercase", "tracking-tighter", "neo-shadow", "hover:bg-accent", "active:translate-x-1", "active:translate-y-1", "active:shadow-none", "transition-all", 3, "click"], [1, "bg-card", "border-4", "border-black", "p-6", "neo-shadow", "active-press", "cursor-pointer", "flex", "flex-col", "justify-between", "gap-4", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all"], [1, "bg-card", "border-4", "border-black", "p-6", "neo-shadow", "active-press", "cursor-pointer", "flex", "flex-col", "justify-between", "gap-4", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all", 3, "click"], [1, "font-headline", "font-black", "text-3xl", "text-black", "uppercase", "leading-tight", "mb-3"], [1, "flex", "flex-col", "gap-1", "mb-3"], [1, "text-xs", "font-bold", "uppercase", "text-muted-foreground", "flex", "items-center", "gap-1"], [1, "material-symbols-outlined", "text-sm"], [1, "flex", "flex-wrap", "gap-2"], [1, "flex", "items-center", "gap-1", "bg-white", "border-2", "border-black", "px-3", "py-1", "text-xs", "font-bold", "font-headline", "uppercase"], [1, "bg-white", "border-4", "border-black", "border-dashed", "p-6", "neo-shadow", "cursor-pointer", "flex", "flex-col", "justify-between", "gap-4", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all"], [1, "bg-white", "border-4", "border-black", "border-dashed", "p-6", "neo-shadow", "cursor-pointer", "flex", "flex-col", "justify-between", "gap-4", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all", 3, "click"], [1, "h-16", "w-full", "animate-pulse", "bg-muted", "mt-8"]], template: function DashboardComponent_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(16, DashboardComponent_Conditional_16_Template, 2, 0, "p", 10)(17, DashboardComponent_Conditional_17_Template, 2, 1, "div", 11)(18, DashboardComponent_Conditional_18_Template, 8, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275domTemplate(19, DashboardComponent_Defer_19_Template, 1, 0)(20, DashboardComponent_DeferPlaceholder_20_Template, 1, 0);
      \u0275\u0275defer(21, 19, DashboardComponent_Defer_21_DepsFn, null, 20);
      \u0275\u0275deferOnViewport(0, -1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("isOpen", ctx.sidenavOpen);
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.loading() ? 16 : ctx.errorMessage() ? 17 : 18);
    }
  }, dependencies: [HeaderComponent, SidenavComponent, BrlCurrencyPipe, RelativeDatePipe], styles: ["\n.active-press[_ngcontent-%COMP%]:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0 0 0 0 black;\n}\n.neo-shadow-yellow[_ngcontent-%COMP%] {\n  box-shadow: 4px 4px 0 0 #ffd700;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(DashboardComponent, () => [import("./chunk-6XDZJNNS.js").then((m) => m.FooterComponent)], (FooterComponent) => {
    setClassMetadata(DashboardComponent, [{
      type: Component,
      args: [{ selector: "app-dashboard", imports: [HeaderComponent, FooterComponent, SidenavComponent, BrlCurrencyPipe, RelativeDatePipe], template: `<div class="min-h-screen flex flex-col bg-background">\r
  <app-sidenav [(isOpen)]="sidenavOpen"></app-sidenav>\r
  <app-header (toggleSidenav)="sidenavOpen.set(!sidenavOpen())"></app-header>\r
\r
  <main class="flex-1 w-full max-w-5xl mx-auto px-6 py-12">\r
    <!-- Cabe\xE7alho + a\xE7\xE3o de novo evento -->\r
    <section class="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">\r
      <div>\r
        <h1\r
          class="font-headline font-black text-5xl md:text-6xl text-foreground mb-4 tracking-tighter uppercase leading-none">\r
          Suas <span class="text-[#635388]">Trocas</span>\r
        </h1>\r
        <p class="text-lg text-muted-foreground max-w-xl font-medium">\r
          Gerencie seus amigos secretos, acompanhe as revela\xE7\xF5es e prepare o presente perfeito.\r
        </p>\r
      </div>\r
\r
      <button (click)="novoEvento()"\r
        class="shrink-0 bg-primary border-4 border-black px-6 py-4 font-headline font-black text-lg uppercase tracking-tighter neo-shadow hover:bg-accent active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2">\r
        <span class="material-symbols-outlined">add_circle</span>\r
        Novo Evento\r
      </button>\r
    </section>\r
\r
    @if (loading()) {\r
      <p class="font-headline font-bold uppercase text-muted-foreground">Carregando seus eventos...</p>\r
    } @else if (errorMessage()) {\r
      <div class="border-4 border-black bg-destructive/10 p-6 font-bold text-destructive">\r
        {{ errorMessage() }}\r
      </div>\r
    } @else {\r
\r
      <!-- \u2500\u2500 Se\xE7\xE3o: Meus Sorteios (eventos criados pelo usu\xE1rio) \u2500\u2500 -->\r
      <section class="mb-12">\r
        <h2 class="font-headline font-black text-2xl uppercase tracking-tighter mb-6 flex items-center gap-3">\r
          <span class="material-symbols-outlined text-2xl">star</span>\r
          Meus Sorteios\r
        </h2>\r
\r
        @if (events().length === 0) {\r
          <div class="bg-white border-4 border-black border-dashed p-12 text-center flex flex-col items-center gap-4">\r
            <span class="material-symbols-outlined text-6xl">redeem</span>\r
            <h3 class="font-headline font-black text-2xl uppercase">Nenhum sorteio ainda</h3>\r
            <p class="text-muted-foreground font-medium max-w-md">\r
              Voc\xEA ainda n\xE3o criou nenhum amigo secreto. Que tal come\xE7ar agora?\r
            </p>\r
            <button (click)="novoEvento()"\r
              class="mt-2 bg-primary border-4 border-black px-6 py-3 font-headline font-black uppercase tracking-tighter neo-shadow hover:bg-accent active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">\r
              Criar meu primeiro evento\r
            </button>\r
          </div>\r
        } @else {\r
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
            @for (event of events(); track event.id) {\r
              <div (click)="abrirEvento(event)"\r
                class="bg-card border-4 border-black p-6 neo-shadow active-press cursor-pointer flex flex-col justify-between gap-4 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">\r
                <div>\r
                  <h3 class="font-headline font-black text-3xl text-black uppercase leading-tight mb-3">\r
                    {{ event.name }}\r
                  </h3>\r
                  <!-- Dono e Local -->\r
                  <div class="flex flex-col gap-1 mb-3">\r
                    <p class="text-xs font-bold uppercase text-muted-foreground flex items-center gap-1">\r
                      <span class="material-symbols-outlined text-sm">person</span>\r
                      {{ event.organizer_name || 'Indefinido' }}\r
                    </p>\r
                    <p class="text-xs font-bold uppercase text-muted-foreground flex items-center gap-1">\r
                      <span class="material-symbols-outlined text-sm">location_on</span>\r
                      {{ event.location || 'Indefinido' }}\r
                    </p>\r
                  </div>\r
                </div>\r
                <!-- Chips de data e or\xE7amento -->\r
                <div class="flex flex-wrap gap-2">\r
                  @if (event.draw_date) {\r
                    <span class="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 text-xs font-bold font-headline uppercase">\r
                      <span class="material-symbols-outlined text-sm">calendar_today</span>\r
                      {{ event.draw_date | relativeDate }}\r
                    </span>\r
                  }\r
                  @if (event.budget != null) {\r
                    <span class="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 text-xs font-bold font-headline uppercase">\r
                      <span class="material-symbols-outlined text-sm">payments</span>\r
                      {{ event.budget | brlCurrency }}\r
                    </span>\r
                  }\r
                </div>\r
              </div>\r
            }\r
          </div>\r
        }\r
      </section>\r
\r
      <!-- \u2500\u2500 Se\xE7\xE3o: Participo de (eventos em que foi convidado e aceitou) \u2500\u2500 -->\r
      @if (participatingEvents().length > 0) {\r
        <section>\r
          <h2 class="font-headline font-black text-2xl uppercase tracking-tighter mb-6 flex items-center gap-3">\r
            <span class="material-symbols-outlined text-2xl">group</span>\r
            Participo de\r
          </h2>\r
\r
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
            @for (event of participatingEvents(); track event.id) {\r
              <div (click)="abrirEvento(event)"\r
                class="bg-white border-4 border-black border-dashed p-6 neo-shadow cursor-pointer flex flex-col justify-between gap-4 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">\r
                <div>\r
                  <h3 class="font-headline font-black text-3xl text-black uppercase leading-tight mb-3">\r
                    {{ event.name }}\r
                  </h3>\r
                  <!-- Dono e Local -->\r
                  <div class="flex flex-col gap-1 mb-3">\r
                    <p class="text-xs font-bold uppercase text-muted-foreground flex items-center gap-1">\r
                      <span class="material-symbols-outlined text-sm">person</span>\r
                      {{ event.organizer_name || 'Indefinido' }}\r
                    </p>\r
                    <p class="text-xs font-bold uppercase text-muted-foreground flex items-center gap-1">\r
                      <span class="material-symbols-outlined text-sm">location_on</span>\r
                      {{ event.location || 'Indefinido' }}\r
                    </p>\r
                  </div>\r
                </div>\r
                <!-- Chips -->\r
                <div class="flex flex-wrap gap-2">\r
                  @if (event.draw_date) {\r
                    <span class="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 text-xs font-bold font-headline uppercase">\r
                      <span class="material-symbols-outlined text-sm">calendar_today</span>\r
                      {{ event.draw_date | relativeDate }}\r
                    </span>\r
                  }\r
                  @if (event.budget != null) {\r
                    <span class="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 text-xs font-bold font-headline uppercase">\r
                      <span class="material-symbols-outlined text-sm">payments</span>\r
                      {{ event.budget | brlCurrency }}\r
                    </span>\r
                  }\r
                </div>\r
              </div>\r
            }\r
          </div>\r
        </section>\r
      }\r
\r
    }\r
  </main>\r
\r
  @defer (on viewport) {\r
    <app-footer></app-footer>\r
  } @placeholder {\r
    <div class="h-16 w-full animate-pulse bg-muted mt-8"></div>\r
  }\r
</div>\r
`, styles: ["/* apps/web/src/app/features/dashboard/dashboard.component.css */\n.active-press:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0 0 0 0 black;\n}\n.neo-shadow-yellow {\n  box-shadow: 4px 4px 0 0 #ffd700;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
    }], null, null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "apps/web/src/app/features/dashboard/dashboard.component.ts", lineNumber: 18 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-JESFBAG6.js.map
