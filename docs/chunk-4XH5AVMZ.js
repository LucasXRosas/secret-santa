import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-4L2T4QFX.js";
import {
  EventService
} from "./chunk-UUE54GPX.js";
import {
  FooterComponent,
  HeaderComponent,
  SidenavComponent
} from "./chunk-VQINV7PY.js";
import {
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-GQUNLRQT.js";

// apps/web/src/app/features/events/create-event/create-event.component.ts
function CreateEventComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "D\xEA um nome para o seu sorteio.");
    \u0275\u0275elementEnd();
  }
}
function CreateEventComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "D\xEA um nome legal para o seu grupo");
    \u0275\u0275elementEnd();
  }
}
function CreateEventComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
var CreateEventComponent = class _CreateEventComponent {
  fb = inject(FormBuilder);
  eventService = inject(EventService);
  router = inject(Router);
  /** Controla a abertura do menu lateral (mesmo padrão das outras telas). */
  sidenavOpen = signal(false, ...ngDevMode ? [{ debugName: "sidenavOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Estado de envio / erro do formulário. */
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Formulário do evento — espelha os campos do design (nome, orçamento, data). */
  form = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.maxLength(120)]],
    budget: [null],
    draw_date: [""]
  });
  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.errorMessage.set(null);
    try {
      const { name, budget, draw_date } = this.form.getRawValue();
      await this.eventService.createEvent({
        name: name.trim(),
        budget: budget ?? null,
        draw_date: draw_date || null
      });
      this.router.navigate(["/dashboard"]);
    } catch (error) {
      console.error("Erro ao criar evento:", error);
      const detalhe = error?.message || error?.error_description || "Erro desconhecido";
      this.errorMessage.set(`N\xE3o foi poss\xEDvel criar o evento: ${detalhe}`);
    } finally {
      this.saving.set(false);
    }
  }
  static \u0275fac = function CreateEventComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateEventComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateEventComponent, selectors: [["app-create-event"]], decls: 40, vars: 6, consts: [[1, "min-h-screen", "flex", "flex-col", "bg-background"], [3, "closeSidenav", "isOpen"], [3, "toggleSidenav"], [1, "flex-1", "w-full", "max-w-3xl", "mx-auto", "px-6", "py-12"], [1, "bg-white", "border-4", "border-black", "p-8", "neo-shadow-lg", "relative", "overflow-hidden"], [1, "absolute", "top-0", "right-0", "bg-secondary", "border-l-4", "border-b-4", "border-black", "px-4", "py-1", "font-headline", "font-black", "text-xs", "uppercase"], [1, "font-headline", "font-black", "text-4xl", "mb-8", "uppercase", "tracking-tighter", "leading-none"], [1, "text-[#635388]"], [1, "space-y-8", 3, "ngSubmit", "formGroup"], [1, "space-y-2"], ["for", "name", 1, "font-headline", "font-bold", "uppercase", "text-sm", "flex", "items-center", "gap-2"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "ex: Amigo da Firma", 1, "w-full", "border-4", "border-black", "p-4", "text-xl", "font-bold", "focus:ring-0", "focus:bg-primary", "focus:outline-none", "transition-colors", "neo-inset"], [1, "text-xs", "font-bold", "text-destructive", "uppercase"], [1, "text-xs", "font-bold", "text-muted-foreground", "uppercase"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], ["for", "budget", 1, "font-headline", "font-bold", "uppercase", "text-sm", "flex", "items-center", "gap-2"], [1, "relative"], [1, "absolute", "left-4", "top-1/2", "-translate-y-1/2", "font-black", "text-xl"], ["id", "budget", "type", "number", "min", "0", "formControlName", "budget", "placeholder", "50", 1, "w-full", "border-4", "border-black", "p-4", "pl-12", "text-xl", "font-bold", "focus:ring-0", "focus:bg-accent", "focus:outline-none", "transition-colors", "neo-inset"], ["for", "draw_date", 1, "font-headline", "font-bold", "uppercase", "text-sm", "flex", "items-center", "gap-2"], ["id", "draw_date", "type", "date", "formControlName", "draw_date", 1, "w-full", "border-4", "border-black", "p-4", "text-xl", "font-bold", "focus:ring-0", "focus:bg-secondary", "focus:outline-none", "transition-colors", "neo-inset"], [1, "border-4", "border-black", "bg-destructive/10", "p-4", "font-bold", "text-destructive"], [1, "pt-4"], ["type", "submit", 1, "w-full", "bg-primary", "border-4", "border-black", "py-6", "px-8", "text-2xl", "font-black", "uppercase", "tracking-tighter", "neo-shadow", "hover:bg-accent", "active:translate-x-1", "active:translate-y-1", "active:shadow-none", "transition-all", "flex", "justify-center", "items-center", "gap-4", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"]], template: function CreateEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-sidenav", 1);
      \u0275\u0275listener("closeSidenav", function CreateEventComponent_Template_app_sidenav_closeSidenav_1_listener() {
        return ctx.sidenavOpen.set(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-header", 2);
      \u0275\u0275listener("toggleSidenav", function CreateEventComponent_Template_app_header_toggleSidenav_2_listener() {
        return ctx.sidenavOpen.set(!ctx.sidenavOpen());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "main", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275text(6, " Novo Sorteio ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 6);
      \u0275\u0275text(8, " Crie seu ");
      \u0275\u0275element(9, "br");
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11, "Amigo Secreto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "form", 8);
      \u0275\u0275listener("ngSubmit", function CreateEventComponent_Template_form_ngSubmit_12_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(13, "div", 9)(14, "label", 10);
      \u0275\u0275text(15, " \u{1F381} Nome do Sorteio ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 11);
      \u0275\u0275conditionalCreate(17, CreateEventComponent_Conditional_17_Template, 2, 0, "p", 12)(18, CreateEventComponent_Conditional_18_Template, 2, 0, "p", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 9)(21, "label", 15);
      \u0275\u0275text(22, " \u{1F4B0} Limite de Or\xE7amento ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 16)(24, "span", 17);
      \u0275\u0275text(25, "R$");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 13);
      \u0275\u0275text(28, "Gasto m\xE1ximo por pessoa");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 9)(30, "label", 19);
      \u0275\u0275text(31, " \u{1F4C5} Data do Sorteio ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 20);
      \u0275\u0275elementStart(33, "p", 13);
      \u0275\u0275text(34, "Quando vamos trocar os presentes?");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(35, CreateEventComponent_Conditional_35_Template, 2, 1, "div", 21);
      \u0275\u0275elementStart(36, "div", 22)(37, "button", 23);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(39, "app-footer");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.sidenavOpen());
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.form.controls.name.touched && ctx.form.controls.name.invalid ? 17 : 18);
      \u0275\u0275advance(18);
      \u0275\u0275conditional(ctx.errorMessage() ? 35 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Salvando..." : "Criar Sorteio", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, HeaderComponent, FooterComponent, SidenavComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateEventComponent, [{
    type: Component,
    args: [{ selector: "app-create-event", standalone: true, imports: [ReactiveFormsModule, HeaderComponent, FooterComponent, SidenavComponent], template: `<div class="min-h-screen flex flex-col bg-background">
  <app-sidenav [isOpen]="sidenavOpen()" (closeSidenav)="sidenavOpen.set(false)"></app-sidenav>
  <app-header (toggleSidenav)="sidenavOpen.set(!sidenavOpen())"></app-header>

  <main class="flex-1 w-full max-w-3xl mx-auto px-6 py-12">
    <div class="bg-white border-4 border-black p-8 neo-shadow-lg relative overflow-hidden">
      <!-- Etiqueta decorativa de canto -->
      <div
        class="absolute top-0 right-0 bg-secondary border-l-4 border-b-4 border-black px-4 py-1 font-headline font-black text-xs uppercase"
      >
        Novo Sorteio
      </div>

      <h1 class="font-headline font-black text-4xl mb-8 uppercase tracking-tighter leading-none">
        Crie seu <br /><span class="text-[#635388]">Amigo Secreto</span>
      </h1>

      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-8">
        <!-- Nome do Sorteio -->
        <div class="space-y-2">
          <label for="name" class="font-headline font-bold uppercase text-sm flex items-center gap-2">
            \u{1F381} Nome do Sorteio
          </label>
          <input
            id="name"
            type="text"
            formControlName="name"
            placeholder="ex: Amigo da Firma"
            class="w-full border-4 border-black p-4 text-xl font-bold focus:ring-0 focus:bg-primary focus:outline-none transition-colors neo-inset"
          />
          @if (form.controls.name.touched && form.controls.name.invalid) {
            <p class="text-xs font-bold text-destructive uppercase">D\xEA um nome para o seu sorteio.</p>
          } @else {
            <p class="text-xs font-bold text-muted-foreground uppercase">D\xEA um nome legal para o seu grupo</p>
          }
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Limite de Or\xE7amento -->
          <div class="space-y-2">
            <label for="budget" class="font-headline font-bold uppercase text-sm flex items-center gap-2">
              \u{1F4B0} Limite de Or\xE7amento
            </label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 font-black text-xl">R$</span>
              <input
                id="budget"
                type="number"
                min="0"
                formControlName="budget"
                placeholder="50"
                class="w-full border-4 border-black p-4 pl-12 text-xl font-bold focus:ring-0 focus:bg-accent focus:outline-none transition-colors neo-inset"
              />
            </div>
            <p class="text-xs font-bold text-muted-foreground uppercase">Gasto m\xE1ximo por pessoa</p>
          </div>

          <!-- Data do Sorteio -->
          <div class="space-y-2">
            <label for="draw_date" class="font-headline font-bold uppercase text-sm flex items-center gap-2">
              \u{1F4C5} Data do Sorteio
            </label>
            <input
              id="draw_date"
              type="date"
              formControlName="draw_date"
              class="w-full border-4 border-black p-4 text-xl font-bold focus:ring-0 focus:bg-secondary focus:outline-none transition-colors neo-inset"
            />
            <p class="text-xs font-bold text-muted-foreground uppercase">Quando vamos trocar os presentes?</p>
          </div>
        </div>

        @if (errorMessage()) {
          <div class="border-4 border-black bg-destructive/10 p-4 font-bold text-destructive">
            {{ errorMessage() }}
          </div>
        }

        <div class="pt-4">
          <button
            type="submit"
            [disabled]="saving()"
            class="w-full bg-primary border-4 border-black py-6 px-8 text-2xl font-black uppercase tracking-tighter neo-shadow hover:bg-accent active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex justify-center items-center gap-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {{ saving() ? 'Salvando...' : 'Criar Sorteio' }}
          </button>
        </div>
      </form>
    </div>
  </main>

  <app-footer></app-footer>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateEventComponent, { className: "CreateEventComponent", filePath: "src/app/features/events/create-event/create-event.component.ts", lineNumber: 15 });
})();
export {
  CreateEventComponent
};
//# sourceMappingURL=chunk-4XH5AVMZ.js.map
