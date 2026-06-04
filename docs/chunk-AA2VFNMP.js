import {
  AuthService
} from "./chunk-HNREXE6V.js";
import {
  FooterComponent,
  HeaderComponent,
  SidenavComponent
} from "./chunk-WIC73XW4.js";
import {
  Component,
  Router,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SPEW6YYM.js";

// apps/web/src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.iniciais;
var _forTrack1 = ($index, $item) => $item.nome;
function DashboardComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const avatar_r1 = ctx.$implicit;
    \u0275\u0275classMap(avatar_r1.cor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", avatar_r1.iniciais, " ");
  }
}
function DashboardComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.trocaDestaque().participantes - ctx_r1.trocaDestaque().avatares.length, " ");
  }
}
function DashboardComponent_For_44_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "p", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const troca_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', troca_r3.citacao, '"');
  }
}
function DashboardComponent_For_44_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 55);
    \u0275\u0275element(2, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4, "100% Finalizado");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div")(2, "div", 47)(3, "span", 48);
    \u0275\u0275text(4, " Conclu\xEDdo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 49);
    \u0275\u0275text(6, " check_circle ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h2", 50);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, DashboardComponent_For_44_Conditional_11_Template, 3, 1, "div", 52)(12, DashboardComponent_For_44_Conditional_12_Template, 5, 0, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const troca_r3 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", troca_r3.nome, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ocorreu em ", troca_r3.data);
    \u0275\u0275advance();
    \u0275\u0275conditional(troca_r3.citacao ? 11 : 12);
  }
}
var DashboardComponent = class _DashboardComponent {
  authService = inject(AuthService);
  router = inject(Router);
  /** Controla a abertura do menu lateral (mesmo padrão da home). */
  sidenavOpen = signal(false, ...ngDevMode ? [{ debugName: "sidenavOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Troca em destaque no topo do bento grid. */
  trocaDestaque = signal({
    nome: "Natal da Firma 2024",
    participantes: 12,
    revelacao: "20 de Dezembro",
    avatares: [
      { iniciais: "JS", cor: "bg-primary" },
      { iniciais: "MA", cor: "bg-secondary" },
      { iniciais: "RB", cor: "bg-accent" }
    ]
  }, ...ngDevMode ? [{ debugName: "trocaDestaque" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Histórico de trocas finalizadas (renderizadas via @for). */
  trocasConcluidas = signal([
    { nome: "Fam\xEDlia Oliveira 2023", data: "24 de Dez, 2023" },
    {
      nome: "Interc\xE2mbio Dublin",
      data: "15 de Jul, 2023",
      citacao: "O melhor presente foi a Guinness que ganhei!"
    }
  ], ...ngDevMode ? [{ debugName: "trocasConcluidas" }] : (
    /* istanbul ignore next */
    []
  ));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 82, vars: 5, consts: [[1, "min-h-screen", "flex", "flex-col", "bg-background"], [3, "closeSidenav", "isOpen"], [3, "toggleSidenav"], [1, "flex-1", "w-full", "max-w-5xl", "mx-auto", "px-6", "py-12"], [1, "mb-12"], [1, "font-headline", "font-black", "text-5xl", "md:text-6xl", "text-foreground", "mb-4", "tracking-tighter", "uppercase", "leading-none"], [1, "text-[#635388]"], [1, "text-lg", "text-muted-foreground", "max-w-xl", "font-medium"], [1, "grid", "grid-cols-1", "md:grid-cols-12", "gap-6"], [1, "md:col-span-8", "bg-accent", "border-4", "border-black", "p-8", "neo-shadow", "rounded-xl", "flex", "flex-col", "justify-between", "min-h-[320px]", "active-press", "cursor-pointer", "group"], [1, "flex", "items-center", "gap-2", "mb-4"], [1, "bg-primary", "text-black", "font-headline", "text-xs", "font-bold", "px-3", "py-1", "border-2", "border-black", "rounded-full", "uppercase"], [1, "bg-white", "border-2", "border-black", "px-3", "py-1", "rounded-full", "text-xs", "font-bold", "font-headline"], [1, "font-headline", "font-black", "text-4xl", "text-black", "mb-2", "uppercase"], [1, "font-bold", "text-black/70", "flex", "items-center", "gap-1"], [1, "material-symbols-outlined", "align-middle", 2, "font-variation-settings", "'FILL' 1"], [1, "mt-8", "flex", "justify-between", "items-end"], [1, "flex", "-space-x-3"], [1, "w-12", "h-12", "rounded-full", "border-2", "border-black", "flex", "items-center", "justify-center", "font-headline", "font-bold", "text-xs", 3, "class"], [1, "w-12", "h-12", "rounded-full", "border-2", "border-black", "bg-muted", "flex", "items-center", "justify-center", "font-headline", "font-bold", "text-xs"], [1, "bg-black", "text-white", "p-3", "border-2", "border-black", "rounded-lg", "neo-shadow-yellow", "font-headline", "font-bold", "uppercase", "text-sm", "group-hover:bg-secondary", "group-hover:text-black", "transition-colors"], [1, "md:col-span-4", "bg-secondary", "border-4", "border-black", "p-6", "neo-shadow", "rounded-xl", "flex", "flex-col", "justify-center", "items-center", "text-center", "space-y-4"], [1, "w-20", "h-20", "bg-white", "border-4", "border-black", "rounded-full", "flex", "items-center", "justify-center", "neo-shadow"], [1, "material-symbols-outlined", "text-4xl", 2, "font-variation-settings", "'FILL' 1"], [1, "font-headline", "font-black", "text-2xl", "text-black", "leading-tight", "uppercase"], [1, "font-medium", "text-black/80"], [1, "w-full", "py-2", "bg-white", "border-2", "border-black", "rounded-lg", "font-headline", "font-bold", "uppercase", "active-press", "neo-shadow"], [1, "md:col-span-6", "bg-card", "border-4", "border-black", "p-6", "neo-shadow", "rounded-xl", "flex", "flex-col", "justify-between", "active-press", "cursor-pointer", "group"], [1, "md:col-span-6", "bg-primary", "border-4", "border-black", "p-6", "neo-shadow", "rounded-xl", "flex", "flex-col", "justify-between", "active-press", "cursor-pointer", "group"], [1, "flex", "justify-between", "items-start"], [1, "font-headline", "font-black", "text-3xl", "text-black", "uppercase", "leading-none"], [1, "material-symbols-outlined", "text-4xl"], [1, "font-medium", "text-black/80", "mt-4"], [1, "mt-6", "w-full", "h-12", "border-2", "border-dashed", "border-black/30", "rounded-lg", "flex", "items-center", "justify-center"], [1, "font-headline", "font-bold", "text-black/40", "uppercase", "tracking-widest", "text-xs"], [1, "md:col-span-12", "bg-accent", "border-4", "border-black", "p-8", "neo-shadow", "rounded-xl", "flex", "flex-row", "items-center", "gap-6", "active-press", "cursor-pointer"], [1, "hidden", "sm:flex", "w-32", "h-32", "bg-white", "border-4", "border-black", "rounded-xl", "items-center", "justify-center", "rotate-3", "neo-shadow"], [1, "material-symbols-outlined", "text-6xl", 2, "font-variation-settings", "'FILL' 1"], [1, "flex-1"], [1, "font-headline", "font-black", "text-3xl", "text-black", "uppercase", "mb-1"], [1, "flex", "gap-4", "mb-4"], [1, "flex", "items-center", "gap-1", "font-headline", "font-bold", "text-xs", "uppercase"], [1, "material-symbols-outlined", "text-sm"], [1, "flex", "items-center", "gap-2"], [1, "bg-white", "border-2", "border-black", "px-4", "py-1", "rounded-full", "text-sm", "font-black", "font-headline", "uppercase"], [1, "material-symbols-outlined", "text-destructive", "animate-pulse", 2, "font-variation-settings", "'FILL' 1"], [1, "w-12", "h-12", "rounded-full", "border-2", "border-black", "flex", "items-center", "justify-center", "font-headline", "font-bold", "text-xs"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "bg-muted", "text-muted-foreground", "font-headline", "text-xs", "font-bold", "px-3", "py-1", "border-2", "border-black", "rounded-full", "uppercase", "opacity-60"], [1, "material-symbols-outlined", "text-black", "opacity-30", "group-hover:opacity-100", "transition-opacity"], [1, "font-headline", "font-black", "text-3xl", "text-black", "mb-1", "uppercase"], [1, "font-bold", "text-black/50"], [1, "mt-6", "bg-black/5", "p-4", "rounded-lg", "border-2", "border-dashed", "border-black/10"], [1, "mt-6", "flex", "items-center", "gap-4"], [1, "italic", "text-sm", "text-black/60"], [1, "flex-1", "h-2", "bg-muted", "rounded-full", "border", "border-black", "overflow-hidden"], [1, "w-full", "h-full", "bg-accent"], [1, "font-headline", "font-bold", "text-xs"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-sidenav", 1);
      \u0275\u0275listener("closeSidenav", function DashboardComponent_Template_app_sidenav_closeSidenav_1_listener() {
        return ctx.sidenavOpen.set(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-header", 2);
      \u0275\u0275listener("toggleSidenav", function DashboardComponent_Template_app_header_toggleSidenav_2_listener() {
        return ctx.sidenavOpen.set(!ctx.sidenavOpen());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "main", 3)(4, "section", 4)(5, "h1", 5);
      \u0275\u0275text(6, " Suas ");
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "Trocas");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " Ativas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, " Gerencie seus amigos secretos, acompanhe as revela\xE7\xF5es e prepare o presente perfeito. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "div")(15, "div", 10)(16, "span", 11);
      \u0275\u0275text(17, " Em Progresso ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 12);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "h2", 13);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p", 14)(23, "span", 15);
      \u0275\u0275text(24, " calendar_today ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 16)(27, "div", 17);
      \u0275\u0275repeaterCreate(28, DashboardComponent_For_29_Template, 2, 3, "div", 18, _forTrack0);
      \u0275\u0275conditionalCreate(30, DashboardComponent_Conditional_30_Template, 2, 1, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 20);
      \u0275\u0275text(32, " Ver Dashboard ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 21)(34, "div", 22)(35, "span", 23);
      \u0275\u0275text(36, " redeem ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "h3", 24);
      \u0275\u0275text(38, " Sorteio Pendente ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p", 25);
      \u0275\u0275text(40, 'O grupo "Amigos do Fut" ainda n\xE3o realizou o sorteio.');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 26);
      \u0275\u0275text(42, " Sortear Agora ");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(43, DashboardComponent_For_44_Template, 13, 3, "div", 27, _forTrack1);
      \u0275\u0275elementStart(45, "div", 28)(46, "div", 29)(47, "h2", 30);
      \u0275\u0275text(48, " Criar Nova");
      \u0275\u0275element(49, "br");
      \u0275\u0275text(50, "Troca ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 31);
      \u0275\u0275text(52, "add_circle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "p", 32);
      \u0275\u0275text(54, " Organize um novo amigo secreto de forma r\xE1pida e divertida. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 33)(56, "span", 34);
      \u0275\u0275text(57, " Novo Evento ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 35)(59, "div", 36)(60, "span", 37);
      \u0275\u0275text(61, " card_giftcard ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 38)(63, "h2", 39);
      \u0275\u0275text(64, "Amigo Chocolate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 40)(66, "span", 41)(67, "span", 42);
      \u0275\u0275text(68, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275text(69, " 8 Pessoas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 41)(71, "span", 42);
      \u0275\u0275text(72, "payments");
      \u0275\u0275elementEnd();
      \u0275\u0275text(73, " Min: R$ 30 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 43)(75, "span", 44);
      \u0275\u0275text(76, " Sorteio Amanh\xE3! ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span", 45);
      \u0275\u0275text(78, " priority_high ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "span", 31);
      \u0275\u0275text(80, "chevron_right");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(81, "app-footer");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.sidenavOpen());
      \u0275\u0275advance(18);
      \u0275\u0275textInterpolate1(" ", ctx.trocaDestaque().participantes, " Participantes ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.trocaDestaque().nome, " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Revela\xE7\xE3o: ", ctx.trocaDestaque().revelacao, " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.trocaDestaque().avatares);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.trocaDestaque().participantes > ctx.trocaDestaque().avatares.length ? 30 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.trocasConcluidas());
    }
  }, dependencies: [HeaderComponent, FooterComponent, SidenavComponent], styles: ["\n.active-press[_ngcontent-%COMP%]:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0 0 0 0 black;\n}\n.neo-shadow-yellow[_ngcontent-%COMP%] {\n  box-shadow: 4px 4px 0 0 #ffd700;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [HeaderComponent, FooterComponent, SidenavComponent], template: `<div class="min-h-screen flex flex-col bg-background">
  <!-- ===== Componentes reaproveitados da home ===== -->
  <app-sidenav [isOpen]="sidenavOpen()" (closeSidenav)="sidenavOpen.set(false)"></app-sidenav>
  <app-header (toggleSidenav)="sidenavOpen.set(!sidenavOpen())"></app-header>

  <!-- ===== Miolo central (design do Stitch: Datas Marcadas / Neo-Fun) ===== -->
  <main class="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
    <!-- Hero / T\xEDtulo -->
    <section class="mb-12">
      <h1
        class="font-headline font-black text-5xl md:text-6xl text-foreground mb-4 tracking-tighter uppercase leading-none"
      >
        Suas <span class="text-[#635388]">Trocas</span> Ativas
      </h1>
      <p class="text-lg text-muted-foreground max-w-xl font-medium">
        Gerencie seus amigos secretos, acompanhe as revela\xE7\xF5es e prepare o presente perfeito.
      </p>
    </section>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Card 1: Troca em destaque (grande) -->
      <div
        class="md:col-span-8 bg-accent border-4 border-black p-8 neo-shadow rounded-xl flex flex-col justify-between min-h-[320px] active-press cursor-pointer group"
      >
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span
              class="bg-primary text-black font-headline text-xs font-bold px-3 py-1 border-2 border-black rounded-full uppercase"
            >
              Em Progresso
            </span>
            <span
              class="bg-white border-2 border-black px-3 py-1 rounded-full text-xs font-bold font-headline"
            >
              {{ trocaDestaque().participantes }} Participantes
            </span>
          </div>
          <h2 class="font-headline font-black text-4xl text-black mb-2 uppercase">
            {{ trocaDestaque().nome }}
          </h2>
          <p class="font-bold text-black/70 flex items-center gap-1">
            <span class="material-symbols-outlined align-middle" style="font-variation-settings: 'FILL' 1;">
              calendar_today
            </span>
            Revela\xE7\xE3o: {{ trocaDestaque().revelacao }}
          </p>
        </div>

        <div class="mt-8 flex justify-between items-end">
          <!-- Pilha de avatares (data-driven via @for) -->
          <div class="flex -space-x-3">
            @for (avatar of trocaDestaque().avatares; track avatar.iniciais) {
              <div
                class="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-headline font-bold text-xs"
                [class]="avatar.cor"
              >
                {{ avatar.iniciais }}
              </div>
            }
            @if (trocaDestaque().participantes > trocaDestaque().avatares.length) {
              <div
                class="w-12 h-12 rounded-full border-2 border-black bg-muted flex items-center justify-center font-headline font-bold text-xs"
              >
                +{{ trocaDestaque().participantes - trocaDestaque().avatares.length }}
              </div>
            }
          </div>

          <div
            class="bg-black text-white p-3 border-2 border-black rounded-lg neo-shadow-yellow font-headline font-bold uppercase text-sm group-hover:bg-secondary group-hover:text-black transition-colors"
          >
            Ver Dashboard
          </div>
        </div>
      </div>

      <!-- Card 2: Sorteio Pendente (pequeno) -->
      <div
        class="md:col-span-4 bg-secondary border-4 border-black p-6 neo-shadow rounded-xl flex flex-col justify-center items-center text-center space-y-4"
      >
        <div
          class="w-20 h-20 bg-white border-4 border-black rounded-full flex items-center justify-center neo-shadow"
        >
          <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">
            redeem
          </span>
        </div>
        <h3 class="font-headline font-black text-2xl text-black leading-tight uppercase">
          Sorteio Pendente
        </h3>
        <p class="font-medium text-black/80">O grupo "Amigos do Fut" ainda n\xE3o realizou o sorteio.</p>
        <button
          class="w-full py-2 bg-white border-2 border-black rounded-lg font-headline font-bold uppercase active-press neo-shadow"
        >
          Sortear Agora
        </button>
      </div>

      <!-- Cards 3..N: Trocas conclu\xEDdas (data-driven via @for) -->
      @for (troca of trocasConcluidas(); track troca.nome) {
        <div
          class="md:col-span-6 bg-card border-4 border-black p-6 neo-shadow rounded-xl flex flex-col justify-between active-press cursor-pointer group"
        >
          <div>
            <div class="flex justify-between items-start mb-4">
              <span
                class="bg-muted text-muted-foreground font-headline text-xs font-bold px-3 py-1 border-2 border-black rounded-full uppercase opacity-60"
              >
                Conclu\xEDdo
              </span>
              <span
                class="material-symbols-outlined text-black opacity-30 group-hover:opacity-100 transition-opacity"
              >
                check_circle
              </span>
            </div>
            <h2 class="font-headline font-black text-3xl text-black mb-1 uppercase">
              {{ troca.nome }}
            </h2>
            <p class="font-bold text-black/50">Ocorreu em {{ troca.data }}</p>
          </div>

          @if (troca.citacao) {
            <div class="mt-6 bg-black/5 p-4 rounded-lg border-2 border-dashed border-black/10">
              <p class="italic text-sm text-black/60">"{{ troca.citacao }}"</p>
            </div>
          } @else {
            <div class="mt-6 flex items-center gap-4">
              <div class="flex-1 h-2 bg-muted rounded-full border border-black overflow-hidden">
                <div class="w-full h-full bg-accent"></div>
              </div>
              <span class="font-headline font-bold text-xs">100% Finalizado</span>
            </div>
          }
        </div>
      }

      <!-- Card: Criar nova troca (a\xE7\xE3o) -->
      <div
        class="md:col-span-6 bg-primary border-4 border-black p-6 neo-shadow rounded-xl flex flex-col justify-between active-press cursor-pointer group"
      >
        <div class="flex justify-between items-start">
          <h2 class="font-headline font-black text-3xl text-black uppercase leading-none">
            Criar Nova<br />Troca
          </h2>
          <span class="material-symbols-outlined text-4xl">add_circle</span>
        </div>
        <p class="font-medium text-black/80 mt-4">
          Organize um novo amigo secreto de forma r\xE1pida e divertida.
        </p>
        <div
          class="mt-6 w-full h-12 border-2 border-dashed border-black/30 rounded-lg flex items-center justify-center"
        >
          <span class="font-headline font-bold text-black/40 uppercase tracking-widest text-xs">
            Novo Evento
          </span>
        </div>
      </div>

      <!-- Card: Alerta de sorteio pr\xF3ximo (largura total) -->
      <div
        class="md:col-span-12 bg-accent border-4 border-black p-8 neo-shadow rounded-xl flex flex-row items-center gap-6 active-press cursor-pointer"
      >
        <div
          class="hidden sm:flex w-32 h-32 bg-white border-4 border-black rounded-xl items-center justify-center rotate-3 neo-shadow"
        >
          <span class="material-symbols-outlined text-6xl" style="font-variation-settings: 'FILL' 1;">
            card_giftcard
          </span>
        </div>
        <div class="flex-1">
          <h2 class="font-headline font-black text-3xl text-black uppercase mb-1">Amigo Chocolate</h2>
          <div class="flex gap-4 mb-4">
            <span class="flex items-center gap-1 font-headline font-bold text-xs uppercase">
              <span class="material-symbols-outlined text-sm">group</span> 8 Pessoas
            </span>
            <span class="flex items-center gap-1 font-headline font-bold text-xs uppercase">
              <span class="material-symbols-outlined text-sm">payments</span> Min: R$ 30
            </span>
          </div>
          <div class="flex items-center gap-2">
            <span
              class="bg-white border-2 border-black px-4 py-1 rounded-full text-sm font-black font-headline uppercase"
            >
              Sorteio Amanh\xE3!
            </span>
            <span
              class="material-symbols-outlined text-destructive animate-pulse"
              style="font-variation-settings: 'FILL' 1;"
            >
              priority_high
            </span>
          </div>
        </div>
        <span class="material-symbols-outlined text-4xl">chevron_right</span>
      </div>
    </div>
  </main>

  <app-footer></app-footer>
</div>
`, styles: ["/* apps/web/src/app/features/dashboard/dashboard.component.css */\n.active-press:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0 0 0 0 black;\n}\n.neo-shadow-yellow {\n  box-shadow: 4px 4px 0 0 #ffd700;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "apps/web/src/app/features/dashboard/dashboard.component.ts", lineNumber: 38 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-AA2VFNMP.js.map
