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
} from "./chunk-DQPSSHH6.js";
import {
  FooterComponent
} from "./chunk-W5VBYQ7Z.js";
import {
  EventService
} from "./chunk-3UQHFIVU.js";
import {
  HeaderComponent,
  SidenavComponent
} from "./chunk-CAIZGX2S.js";
import "./chunk-4G5YQTUP.js";
import {
  Router
} from "./chunk-UW2S6YIE.js";
import {
  Component,
  DestroyRef,
  Injector,
  ReplaySubject,
  RuntimeError,
  __spreadValues,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  distinctUntilChanged,
  effect,
  inject,
  setClassMetadata,
  signal,
  untracked,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S6SU5Y6X.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v21.2.8
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function toObservable(source, options) {
  if (ngDevMode && !options?.injector) {
    assertInInjectionContext(toObservable);
  }
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options?.equal
  }, ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

// apps/web/src/app/features/events/create-event/create-event.component.ts
function CreateEventComponent_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "D\xEA um nome para o seu sorteio.");
    \u0275\u0275elementEnd();
  }
}
function CreateEventComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "O nome precisa ter pelo menos 3 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function CreateEventComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CreateEventComponent_Conditional_17_Conditional_0_Template, 2, 0, "p", 18);
    \u0275\u0275conditionalCreate(1, CreateEventComponent_Conditional_17_Conditional_1_Template, 2, 0, "p", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.form.controls.name.hasError("required") ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.name.hasError("minlength") ? 1 : -1);
  }
}
function CreateEventComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "D\xEA um nome legal para o seu grupo");
    \u0275\u0275elementEnd();
  }
}
function CreateEventComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Or\xE7amento inv\xE1lido (m\xEDnimo 0).");
    \u0275\u0275elementEnd();
  }
}
function CreateEventComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Gasto m\xE1ximo por pessoa");
    \u0275\u0275elementEnd();
  }
}
function CreateEventComponent_Conditional_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Data do sorteio \xE9 obrigat\xF3ria.");
    \u0275\u0275elementEnd();
  }
}
function CreateEventComponent_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "A data n\xE3o pode estar no passado.");
    \u0275\u0275elementEnd();
  }
}
function CreateEventComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CreateEventComponent_Conditional_33_Conditional_0_Template, 2, 0, "p", 18);
    \u0275\u0275conditionalCreate(1, CreateEventComponent_Conditional_33_Conditional_1_Template, 2, 0, "p", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.form.controls.draw_date.hasError("required") ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.draw_date.hasError("pastDate") ? 1 : -1);
  }
}
function CreateEventComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Quando vamos trocar os presentes?");
    \u0275\u0275elementEnd();
  }
}
function CreateEventComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function futureDateValidator() {
  return (control) => {
    if (!control.value)
      return null;
    const today = /* @__PURE__ */ new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const todayStr = `${year}-${month}-${day}`;
    if (control.value < todayStr) {
      return { pastDate: true };
    }
    return null;
  };
}
var CreateEventComponent = class _CreateEventComponent {
  fb = inject(FormBuilder);
  eventService = inject(EventService);
  router = inject(Router);
  sidenavOpen = signal(false, ...ngDevMode ? [{ debugName: "sidenavOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  todayDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  form = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
    budget: [null, [Validators.min(0)]],
    draw_date: ["", [Validators.required, futureDateValidator()]],
    organizer_name: [""],
    location: [""]
  });
  // [ID25] toSignal: Transforma Observable (valueChanges) em um Signal reativo
  formValues = toSignal(this.form.valueChanges, { initialValue: this.form.value });
  // [ID25] toObservable: Transforma Signal em Observable para usar operadores RxJS
  sidenavState$ = toObservable(this.sidenavOpen).pipe(distinctUntilChanged());
  constructor() {
    this.sidenavState$.subscribe((isOpen) => {
      console.log("[RxJS] Menu lateral alterado:", isOpen);
    });
  }
  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.errorMessage.set(null);
    try {
      const { name, budget, draw_date, organizer_name, location } = this.form.getRawValue();
      await this.eventService.createEvent({
        name: name.trim(),
        budget: budget ?? null,
        draw_date: draw_date || null,
        organizer_name: organizer_name || null,
        location: location || null
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateEventComponent, selectors: [["app-create-event"]], decls: 53, vars: 9, consts: [[1, "min-h-screen", "flex", "flex-col", "bg-background"], [3, "isOpenChange", "isOpen"], [3, "toggleSidenav"], [1, "flex-1", "w-full", "max-w-3xl", "mx-auto", "px-6", "py-12"], [1, "bg-white", "border-4", "border-black", "p-8", "neo-shadow-lg", "relative", "overflow-hidden"], [1, "absolute", "top-0", "right-0", "bg-secondary", "border-l-4", "border-b-4", "border-black", "px-4", "py-1", "font-headline", "font-black", "text-xs", "uppercase"], [1, "font-headline", "font-black", "text-4xl", "mb-8", "uppercase", "tracking-tighter", "leading-none"], [1, "text-[#635388]"], [1, "space-y-8", 3, "ngSubmit", "formGroup"], [1, "space-y-2"], ["for", "name", 1, "font-headline", "font-bold", "uppercase", "text-sm", "flex", "items-center", "gap-2"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "ex: Amigo da Firma", 1, "w-full", "border-4", "border-black", "p-4", "text-xl", "font-bold", "focus:ring-0", "focus:bg-primary", "focus:outline-none", "transition-colors", "neo-inset"], [1, "text-xs", "font-bold", "text-muted-foreground", "uppercase"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], ["for", "budget", 1, "font-headline", "font-bold", "uppercase", "text-sm", "flex", "items-center", "gap-2"], [1, "relative"], [1, "absolute", "left-4", "top-1/2", "-translate-y-1/2", "font-black", "text-xl"], ["id", "budget", "type", "number", "min", "0", "formControlName", "budget", "placeholder", "50", 1, "w-full", "border-4", "border-black", "p-4", "pl-12", "text-xl", "font-bold", "focus:ring-0", "focus:bg-accent", "focus:outline-none", "transition-colors", "neo-inset"], [1, "text-xs", "font-bold", "text-destructive", "uppercase"], ["for", "draw_date", 1, "font-headline", "font-bold", "uppercase", "text-sm", "flex", "items-center", "gap-2"], ["id", "draw_date", "type", "date", "formControlName", "draw_date", 1, "w-full", "border-4", "border-black", "p-4", "text-xl", "font-bold", "focus:ring-0", "focus:bg-secondary", "focus:outline-none", "transition-colors", "neo-inset", 3, "min"], ["for", "organizer_name", 1, "font-headline", "font-bold", "uppercase", "text-sm", "flex", "items-center", "gap-2"], ["id", "organizer_name", "type", "text", "formControlName", "organizer_name", "placeholder", "ex: Jo\xE3o Silva", 1, "w-full", "border-4", "border-black", "p-4", "text-xl", "font-bold", "focus:ring-0", "focus:bg-primary", "focus:outline-none", "transition-colors", "neo-inset"], ["for", "location", 1, "font-headline", "font-bold", "uppercase", "text-sm", "flex", "items-center", "gap-2"], ["id", "location", "type", "text", "formControlName", "location", "placeholder", "ex: Casa da Ana", 1, "w-full", "border-4", "border-black", "p-4", "text-xl", "font-bold", "focus:ring-0", "focus:bg-secondary", "focus:outline-none", "transition-colors", "neo-inset"], [1, "border-4", "border-black", "bg-destructive/10", "p-4", "font-bold", "text-destructive"], [1, "pt-4"], ["type", "submit", 1, "w-full", "bg-primary", "border-4", "border-black", "py-6", "px-8", "text-2xl", "font-black", "uppercase", "tracking-tighter", "neo-shadow", "hover:bg-accent", "active:translate-x-1", "active:translate-y-1", "active:shadow-none", "transition-all", "flex", "justify-center", "items-center", "gap-4", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"]], template: function CreateEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-sidenav", 1);
      \u0275\u0275twoWayListener("isOpenChange", function CreateEventComponent_Template_app_sidenav_isOpenChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sidenavOpen, $event) || (ctx.sidenavOpen = $event);
        return $event;
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
      \u0275\u0275conditionalCreate(17, CreateEventComponent_Conditional_17_Template, 2, 2)(18, CreateEventComponent_Conditional_18_Template, 2, 0, "p", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13)(20, "div", 9)(21, "label", 14);
      \u0275\u0275text(22, " \u{1F4B0} Limite de Or\xE7amento ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 15)(24, "span", 16);
      \u0275\u0275text(25, "R$");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(27, CreateEventComponent_Conditional_27_Template, 2, 0, "p", 18)(28, CreateEventComponent_Conditional_28_Template, 2, 0, "p", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 9)(30, "label", 19);
      \u0275\u0275text(31, " \u{1F4C5} Data do Sorteio ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 20);
      \u0275\u0275conditionalCreate(33, CreateEventComponent_Conditional_33_Template, 2, 2)(34, CreateEventComponent_Conditional_34_Template, 2, 0, "p", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 13)(36, "div", 9)(37, "label", 21);
      \u0275\u0275text(38, " \u{1F464} Organizador ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 22);
      \u0275\u0275elementStart(40, "p", 12);
      \u0275\u0275text(41, "Quem est\xE1 organizando?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 9)(43, "label", 23);
      \u0275\u0275text(44, " \u{1F4CD} Local ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 24);
      \u0275\u0275elementStart(46, "p", 12);
      \u0275\u0275text(47, "Onde vai acontecer?");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(48, CreateEventComponent_Conditional_48_Template, 2, 1, "div", 25);
      \u0275\u0275elementStart(49, "div", 26)(50, "button", 27);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(52, "app-footer");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("isOpen", ctx.sidenavOpen);
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.form.controls.name.touched && ctx.form.controls.name.invalid ? 17 : 18);
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.form.controls.budget.touched && ctx.form.controls.budget.invalid ? 27 : 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("min", ctx.todayDate);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.draw_date.touched && ctx.form.controls.draw_date.invalid ? 33 : 34);
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.errorMessage() ? 48 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving() || ctx.form.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Salvando..." : "Criar Sorteio", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, HeaderComponent, FooterComponent, SidenavComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateEventComponent, [{
    type: Component,
    args: [{ selector: "app-create-event", standalone: true, imports: [ReactiveFormsModule, HeaderComponent, FooterComponent, SidenavComponent], template: `<div class="min-h-screen flex flex-col bg-background">\r
  <!-- [ID12] two-way binding via model(): [(isOpen)] sincroniza sidenavOpen bidireccionalmente -->\r
  <app-sidenav [(isOpen)]="sidenavOpen"></app-sidenav>\r
  <app-header (toggleSidenav)="sidenavOpen.set(!sidenavOpen())"></app-header>\r
\r
  <main class="flex-1 w-full max-w-3xl mx-auto px-6 py-12">\r
    <div class="bg-white border-4 border-black p-8 neo-shadow-lg relative overflow-hidden">\r
      <!-- Etiqueta decorativa de canto -->\r
      <div\r
        class="absolute top-0 right-0 bg-secondary border-l-4 border-b-4 border-black px-4 py-1 font-headline font-black text-xs uppercase"\r
      >\r
        Novo Sorteio\r
      </div>\r
\r
      <h1 class="font-headline font-black text-4xl mb-8 uppercase tracking-tighter leading-none">\r
        Crie seu <br /><span class="text-[#635388]">Amigo Secreto</span>\r
      </h1>\r
\r
      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-8">\r
        <!-- Nome do Sorteio -->\r
        <div class="space-y-2">\r
          <label for="name" class="font-headline font-bold uppercase text-sm flex items-center gap-2">\r
            \u{1F381} Nome do Sorteio\r
          </label>\r
          <input\r
            id="name"\r
            type="text"\r
            formControlName="name"\r
            placeholder="ex: Amigo da Firma"\r
            class="w-full border-4 border-black p-4 text-xl font-bold focus:ring-0 focus:bg-primary focus:outline-none transition-colors neo-inset"\r
          />\r
          @if (form.controls.name.touched && form.controls.name.invalid) {\r
            @if (form.controls.name.hasError('required')) {\r
              <p class="text-xs font-bold text-destructive uppercase">D\xEA um nome para o seu sorteio.</p>\r
            }\r
            @if (form.controls.name.hasError('minlength')) {\r
              <p class="text-xs font-bold text-destructive uppercase">O nome precisa ter pelo menos 3 caracteres.</p>\r
            }\r
          } @else {\r
            <p class="text-xs font-bold text-muted-foreground uppercase">D\xEA um nome legal para o seu grupo</p>\r
          }\r
        </div>\r
\r
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">\r
          <!-- Limite de Or\xE7amento -->\r
          <div class="space-y-2">\r
            <label for="budget" class="font-headline font-bold uppercase text-sm flex items-center gap-2">\r
              \u{1F4B0} Limite de Or\xE7amento\r
            </label>\r
            <div class="relative">\r
              <span class="absolute left-4 top-1/2 -translate-y-1/2 font-black text-xl">R$</span>\r
              <input\r
                id="budget"\r
                type="number"\r
                min="0"\r
                formControlName="budget"\r
                placeholder="50"\r
                class="w-full border-4 border-black p-4 pl-12 text-xl font-bold focus:ring-0 focus:bg-accent focus:outline-none transition-colors neo-inset"\r
              />\r
            </div>\r
            @if (form.controls.budget.touched && form.controls.budget.invalid) {\r
              <p class="text-xs font-bold text-destructive uppercase">Or\xE7amento inv\xE1lido (m\xEDnimo 0).</p>\r
            } @else {\r
              <p class="text-xs font-bold text-muted-foreground uppercase">Gasto m\xE1ximo por pessoa</p>\r
            }\r
          </div>\r
\r
          <!-- Data do Sorteio -->\r
          <div class="space-y-2">\r
            <label for="draw_date" class="font-headline font-bold uppercase text-sm flex items-center gap-2">\r
              \u{1F4C5} Data do Sorteio\r
            </label>\r
            <input\r
              id="draw_date"\r
              type="date"\r
              [min]="todayDate"\r
              formControlName="draw_date"\r
              class="w-full border-4 border-black p-4 text-xl font-bold focus:ring-0 focus:bg-secondary focus:outline-none transition-colors neo-inset"\r
            />\r
            @if (form.controls.draw_date.touched && form.controls.draw_date.invalid) {\r
              @if (form.controls.draw_date.hasError('required')) {\r
                <p class="text-xs font-bold text-destructive uppercase">Data do sorteio \xE9 obrigat\xF3ria.</p>\r
              }\r
              @if (form.controls.draw_date.hasError('pastDate')) {\r
                <p class="text-xs font-bold text-destructive uppercase">A data n\xE3o pode estar no passado.</p>\r
              }\r
            } @else {\r
              <p class="text-xs font-bold text-muted-foreground uppercase">Quando vamos trocar os presentes?</p>\r
            }\r
          </div>\r
        </div>\r
\r
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">\r
          <!-- Organizador -->\r
          <div class="space-y-2">\r
            <label for="organizer_name" class="font-headline font-bold uppercase text-sm flex items-center gap-2">\r
              \u{1F464} Organizador\r
            </label>\r
            <input\r
              id="organizer_name"\r
              type="text"\r
              formControlName="organizer_name"\r
              placeholder="ex: Jo\xE3o Silva"\r
              class="w-full border-4 border-black p-4 text-xl font-bold focus:ring-0 focus:bg-primary focus:outline-none transition-colors neo-inset"\r
            />\r
            <p class="text-xs font-bold text-muted-foreground uppercase">Quem est\xE1 organizando?</p>\r
          </div>\r
\r
          <!-- Local -->\r
          <div class="space-y-2">\r
            <label for="location" class="font-headline font-bold uppercase text-sm flex items-center gap-2">\r
              \u{1F4CD} Local\r
            </label>\r
            <input\r
              id="location"\r
              type="text"\r
              formControlName="location"\r
              placeholder="ex: Casa da Ana"\r
              class="w-full border-4 border-black p-4 text-xl font-bold focus:ring-0 focus:bg-secondary focus:outline-none transition-colors neo-inset"\r
            />\r
            <p class="text-xs font-bold text-muted-foreground uppercase">Onde vai acontecer?</p>\r
          </div>\r
        </div>\r
\r
        @if (errorMessage()) {\r
          <div class="border-4 border-black bg-destructive/10 p-4 font-bold text-destructive">\r
            {{ errorMessage() }}\r
          </div>\r
        }\r
\r
        <div class="pt-4">\r
          <button\r
            type="submit"\r
            [disabled]="saving() || form.invalid"\r
            class="w-full bg-primary border-4 border-black py-6 px-8 text-2xl font-black uppercase tracking-tighter neo-shadow hover:bg-accent active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex justify-center items-center gap-4 disabled:opacity-60 disabled:cursor-not-allowed"\r
          >\r
            {{ saving() ? 'Salvando...' : 'Criar Sorteio' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </main>\r
\r
  <app-footer></app-footer>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateEventComponent, { className: "CreateEventComponent", filePath: "apps/web/src/app/features/events/create-event/create-event.component.ts", lineNumber: 42 });
})();
export {
  CreateEventComponent,
  futureDateValidator
};
//# sourceMappingURL=chunk-NTRO6VOS.js.map
