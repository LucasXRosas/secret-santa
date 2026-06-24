import {
  BrlCurrencyPipe,
  RelativeDatePipe
} from "./chunk-PVHTZ7FE.js";
import {
  FooterComponent
} from "./chunk-LYHK6WPZ.js";
import {
  HeaderComponent,
  SidenavComponent
} from "./chunk-U4QV6FE4.js";
import "./chunk-YETSNVPI.js";
import "./chunk-6MYGOC25.js";
import {
  Component,
  Injectable,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CU26WE3Z.js";

// apps/web/src/app/core/services/mock-event.service.ts
var MockEventService = class _MockEventService {
  baseUrl = "http://localhost:3001/events";
  /**
   * [ID20] Lista todos os eventos do mock.
   * Usa fetch nativo com async/await e trata erros HTTP explicitamente.
   */
  async list() {
    const response = await fetch(this.baseUrl);
    if (!response.ok) {
      throw new Error(`Erro ao listar eventos mock: ${response.status} ${response.statusText}`);
    }
    return response.json();
  }
  /**
   * [ID20] Busca um único evento pelo id.
   */
  async getById(id) {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (response.status === 404)
      return null;
    if (!response.ok) {
      throw new Error(`Erro ao buscar evento mock: ${response.status} ${response.statusText}`);
    }
    return response.json();
  }
  /**
   * [ID20] Cria um novo evento no mock via POST com body JSON.
   */
  async create(payload) {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(__spreadProps(__spreadValues({}, payload), {
        owner_id: "user-mock",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }))
    });
    if (!response.ok) {
      throw new Error(`Erro ao criar evento mock: ${response.status} ${response.statusText}`);
    }
    return response.json();
  }
  /**
   * [ID20] Remove um evento do mock via DELETE.
   */
  async remove(id) {
    const response = await fetch(`${this.baseUrl}/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Erro ao remover evento mock: ${response.status} ${response.statusText}`);
    }
  }
  static \u0275fac = function MockEventService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MockEventService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MockEventService, factory: _MockEventService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MockEventService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/web/src/app/features/demo/demo.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DemoComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Carregando do json-server...");
    \u0275\u0275elementEnd();
  }
}
function DemoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function DemoComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " Nenhum evento no mock ainda. Adicione um acima. ");
    \u0275\u0275elementEnd();
  }
}
function DemoComponent_Conditional_29_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22)(1, "span", 23);
    \u0275\u0275text(2, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "relativeDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, event_r3.draw_date), " ");
  }
}
function DemoComponent_Conditional_29_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22)(1, "span", 23);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "brlCurrency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, event_r3.budget), " ");
  }
}
function DemoComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "h2", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function DemoComponent_Conditional_29_For_2_Template_button_click_4_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeEvent(event_r3));
    });
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275conditionalCreate(8, DemoComponent_Conditional_29_For_2_Conditional_8_Template, 5, 3, "span", 22);
    \u0275\u0275conditionalCreate(9, DemoComponent_Conditional_29_For_2_Conditional_9_Template, 5, 3, "span", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r3.name);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(event_r3.draw_date ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r3.budget != null ? 9 : -1);
  }
}
function DemoComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, DemoComponent_Conditional_29_For_2_Template, 10, 3, "div", 16, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.events());
  }
}
var DemoComponent = class _DemoComponent {
  mockService = inject(MockEventService);
  /** [ID12] menu lateral via model() — mesmo padrão das demais telas. */
  sidenavOpen = signal(false, ...ngDevMode ? [{ debugName: "sidenavOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Estado da tela, todo em Signals (ID10). */
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
  /** Campo do formulário de criação (one-way + event binding manual). */
  newName = signal("", ...ngDevMode ? [{ debugName: "newName" }] : (
    /* istanbul ignore next */
    []
  ));
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.load();
  }
  /** [ID20] Lê os eventos do json-server via fetch nativo. */
  async load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    try {
      this.events.set(await this.mockService.list());
    } catch (error) {
      console.error("Erro ao carregar eventos do json-server:", error);
      this.errorMessage.set('N\xE3o foi poss\xEDvel falar com o json-server. Rode "npm run dev:api" na porta 3001.');
    } finally {
      this.loading.set(false);
    }
  }
  /** [ID20] Cria um evento no json-server via fetch (POST). */
  async addEvent() {
    const name = this.newName().trim();
    if (!name)
      return;
    this.saving.set(true);
    try {
      const novo = await this.mockService.create({ name, budget: null, draw_date: null });
      this.events.update((list) => [novo, ...list]);
      this.newName.set("");
    } catch (error) {
      console.error("Erro ao criar evento mock:", error);
      this.errorMessage.set("N\xE3o foi poss\xEDvel criar o evento no json-server.");
    } finally {
      this.saving.set(false);
    }
  }
  /** [ID20] Remove um evento do json-server via fetch (DELETE). */
  async removeEvent(event) {
    try {
      await this.mockService.remove(event.id);
      this.events.update((list) => list.filter((e) => e.id !== event.id));
    } catch (error) {
      console.error("Erro ao remover evento mock:", error);
    }
  }
  static \u0275fac = function DemoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DemoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoComponent, selectors: [["app-demo"]], decls: 31, vars: 5, consts: [[1, "min-h-screen", "flex", "flex-col", "bg-background"], [3, "isOpenChange", "isOpen"], [3, "toggleSidenav"], [1, "flex-1", "w-full", "max-w-5xl", "mx-auto", "px-6", "py-12"], [1, "mb-10"], [1, "inline-block", "bg-accent", "border-2", "border-black", "px-3", "py-1", "text-xs", "font-black", "font-headline", "uppercase", "tracking-tighter", "mb-4"], [1, "font-headline", "font-black", "text-5xl", "md:text-6xl", "text-foreground", "mb-4", "tracking-tighter", "uppercase", "leading-none"], [1, "text-[#635388]"], [1, "text-lg", "text-muted-foreground", "max-w-xl", "font-medium"], [1, "flex", "flex-col", "sm:flex-row", "gap-3", "mb-10", 3, "submit"], ["placeholder", "Nome do novo evento mock", 1, "flex-1", "border-4", "border-black", "px-4", "py-3", "font-medium", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black", 3, "input", "value"], ["type", "submit", 1, "shrink-0", "bg-primary", "border-4", "border-black", "px-6", "py-3", "font-headline", "font-black", "uppercase", "tracking-tighter", "neo-shadow", "hover:bg-accent", "active:translate-x-1", "active:translate-y-1", "active:shadow-none", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"], [1, "font-headline", "font-bold", "uppercase", "text-muted-foreground"], [1, "border-4", "border-black", "bg-destructive/10", "p-6", "font-bold", "text-destructive"], [1, "bg-white", "border-4", "border-black", "border-dashed", "p-12", "text-center", "font-medium", "text-muted-foreground"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "bg-card", "border-4", "border-black", "p-6", "neo-shadow", "flex", "flex-col", "justify-between"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "font-headline", "font-black", "text-3xl", "text-black", "mb-2", "uppercase"], ["aria-label", "Remover", 1, "shrink-0", "border-2", "border-black", "px-2", "py-1", "hover:bg-destructive", "hover:text-white", "transition-colors", 3, "click"], [1, "material-symbols-outlined", "text-base"], [1, "flex", "flex-wrap", "gap-3", "mt-4"], [1, "flex", "items-center", "gap-1", "bg-white", "border-2", "border-black", "px-3", "py-1", "text-xs", "font-bold", "font-headline", "uppercase"], [1, "material-symbols-outlined", "text-sm"]], template: function DemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-sidenav", 1);
      \u0275\u0275twoWayListener("isOpenChange", function DemoComponent_Template_app_sidenav_isOpenChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sidenavOpen, $event) || (ctx.sidenavOpen = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-header", 2);
      \u0275\u0275listener("toggleSidenav", function DemoComponent_Template_app_header_toggleSidenav_2_listener() {
        return ctx.sidenavOpen.set(!ctx.sidenavOpen());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "main", 3)(4, "section", 4)(5, "span", 5);
      \u0275\u0275text(6, " json-server \xB7 localhost:3001 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 6);
      \u0275\u0275text(8, " Demo ");
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10, "Mock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12, " Esta tela l\xEA e escreve na API Mock local (json-server) usando ");
      \u0275\u0275elementStart(13, "code");
      \u0275\u0275text(14, "fetch");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " nativo. Rode ");
      \u0275\u0275elementStart(16, "code");
      \u0275\u0275text(17, "npm run dev:api");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " em paralelo ao ");
      \u0275\u0275elementStart(19, "code");
      \u0275\u0275text(20, "ng serve");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, ". ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "form", 9);
      \u0275\u0275listener("submit", function DemoComponent_Template_form_submit_22_listener($event) {
        $event.preventDefault();
        return ctx.addEvent();
      });
      \u0275\u0275elementStart(23, "input", 10);
      \u0275\u0275listener("input", function DemoComponent_Template_input_input_23_listener($event) {
        return ctx.newName.set($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 11);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(26, DemoComponent_Conditional_26_Template, 2, 0, "p", 12)(27, DemoComponent_Conditional_27_Template, 2, 1, "div", 13)(28, DemoComponent_Conditional_28_Template, 2, 0, "div", 14)(29, DemoComponent_Conditional_29_Template, 3, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "app-footer");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("isOpen", ctx.sidenavOpen);
      \u0275\u0275advance(22);
      \u0275\u0275property("value", ctx.newName());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.saving() || !ctx.newName().trim());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Salvando..." : "Adicionar", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 26 : ctx.errorMessage() ? 27 : ctx.events().length === 0 ? 28 : 29);
    }
  }, dependencies: [HeaderComponent, FooterComponent, SidenavComponent, BrlCurrencyPipe, RelativeDatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoComponent, [{
    type: Component,
    args: [{ selector: "app-demo", standalone: true, imports: [HeaderComponent, FooterComponent, SidenavComponent, BrlCurrencyPipe, RelativeDatePipe], template: `<div class="min-h-screen flex flex-col bg-background">
  <!-- [ID12] two-way binding via model() -->
  <app-sidenav [(isOpen)]="sidenavOpen"></app-sidenav>
  <app-header (toggleSidenav)="sidenavOpen.set(!sidenavOpen())"></app-header>

  <main class="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
    <section class="mb-10">
      <span
        class="inline-block bg-accent border-2 border-black px-3 py-1 text-xs font-black font-headline uppercase tracking-tighter mb-4"
      >
        json-server \xB7 localhost:3001
      </span>
      <h1
        class="font-headline font-black text-5xl md:text-6xl text-foreground mb-4 tracking-tighter uppercase leading-none"
      >
        Demo <span class="text-[#635388]">Mock</span>
      </h1>
      <p class="text-lg text-muted-foreground max-w-xl font-medium">
        Esta tela l\xEA e escreve na API Mock local (json-server) usando <code>fetch</code> nativo.
        Rode <code>npm run dev:api</code> em paralelo ao <code>ng serve</code>.
      </p>
    </section>

    <!-- Formul\xE1rio de cria\xE7\xE3o (event binding + signal) -->
    <form (submit)="$event.preventDefault(); addEvent()" class="flex flex-col sm:flex-row gap-3 mb-10">
      <input
        [value]="newName()"
        (input)="newName.set($any($event.target).value)"
        placeholder="Nome do novo evento mock"
        class="flex-1 border-4 border-black px-4 py-3 font-medium outline-none focus-visible:ring-2 focus-visible:ring-black"
      />
      <button
        type="submit"
        [disabled]="saving() || !newName().trim()"
        class="shrink-0 bg-primary border-4 border-black px-6 py-3 font-headline font-black uppercase tracking-tighter neo-shadow hover:bg-accent active:translate-x-1 active:translate-y-1 active:shadow-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {{ saving() ? 'Salvando...' : 'Adicionar' }}
      </button>
    </form>

    <!-- Estados: carregando / erro / vazio / lista -->
    @if (loading()) {
      <p class="font-headline font-bold uppercase text-muted-foreground">Carregando do json-server...</p>
    } @else if (errorMessage()) {
      <div class="border-4 border-black bg-destructive/10 p-6 font-bold text-destructive">
        {{ errorMessage() }}
      </div>
    } @else if (events().length === 0) {
      <div class="bg-white border-4 border-black border-dashed p-12 text-center font-medium text-muted-foreground">
        Nenhum evento no mock ainda. Adicione um acima.
      </div>
    } @else {
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- [ID7] @for com track obrigat\xF3rio -->
        @for (event of events(); track event.id) {
          <div class="bg-card border-4 border-black p-6 neo-shadow flex flex-col justify-between">
            <div class="flex items-start justify-between gap-3">
              <h2 class="font-headline font-black text-3xl text-black mb-2 uppercase">{{ event.name }}</h2>
              <button
                (click)="removeEvent(event)"
                aria-label="Remover"
                class="shrink-0 border-2 border-black px-2 py-1 hover:bg-destructive hover:text-white transition-colors"
              >
                <span class="material-symbols-outlined text-base">delete</span>
              </button>
            </div>
            <div class="flex flex-wrap gap-3 mt-4">
              <!-- [ID6] @if condicional + [ID8] Pipes -->
              @if (event.draw_date) {
                <span class="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 text-xs font-bold font-headline uppercase">
                  <span class="material-symbols-outlined text-sm">calendar_today</span>
                  {{ event.draw_date | relativeDate }}
                </span>
              }
              @if (event.budget != null) {
                <span class="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 text-xs font-bold font-headline uppercase">
                  <span class="material-symbols-outlined text-sm">payments</span>
                  {{ event.budget | brlCurrency }}
                </span>
              }
            </div>
          </div>
        }
      </div>
    }
  </main>

  <app-footer></app-footer>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoComponent, { className: "DemoComponent", filePath: "apps/web/src/app/features/demo/demo.component.ts", lineNumber: 24 });
})();
export {
  DemoComponent
};
//# sourceMappingURL=chunk-26NXPEEF.js.map
