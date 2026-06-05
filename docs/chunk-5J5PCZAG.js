import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-FP24B2MI.js";
import {
  EventService
} from "./chunk-MTUOECXP.js";
import {
  FooterComponent,
  HeaderComponent,
  SidenavComponent
} from "./chunk-2RFXDO6G.js";
import {
  ActivatedRoute,
  AuthService,
  Component,
  Injectable,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SA44WC6K.js";

// apps/web/src/app/core/services/participant.service.ts
var ParticipantService = class _ParticipantService {
  authService = inject(AuthService);
  getClient() {
    const client = this.authService.client;
    if (!client) {
      throw new Error("Supabase n\xE3o configurado. Verifique o environment.");
    }
    return client;
  }
  /** Lista os participantes de um evento, dos mais recentes para os mais antigos. */
  async listByEvent(eventId) {
    const { data, error } = await this.getClient().from("participants").select("*").eq("event_id", eventId).order("invited_at", { ascending: false });
    if (error)
      throw error;
    return data ?? [];
  }
  /** Convida (adiciona) um participante por e-mail. */
  async invite(eventId, email, name) {
    const { data, error } = await this.getClient().from("participants").insert({
      event_id: eventId,
      email: email.trim().toLowerCase(),
      name: name?.trim() || null
    }).select().single();
    if (error)
      throw error;
    return data;
  }
  /** Remove um participante do evento. */
  async remove(participantId) {
    const { error } = await this.getClient().from("participants").delete().eq("id", participantId);
    if (error)
      throw error;
  }
  static \u0275fac = function ParticipantService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParticipantService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParticipantService, factory: _ParticipantService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParticipantService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/web/src/app/features/events/event-detail/event-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EventDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Carregando evento...");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12)(1, "span", 38);
    \u0275\u0275text(2, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ev_r3.draw_date, " ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12)(1, "span", 38);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" R$ ", ev_r3.budget, " ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Informe um e-mail v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_6_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inviteError());
  }
}
function EventDetailComponent_Conditional_6_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "p", 39);
    \u0275\u0275text(2, " Ningu\xE9m por aqui ainda. Convide a galera acima! ");
    \u0275\u0275elementEnd()();
  }
}
function EventDetailComponent_Conditional_6_Conditional_52_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "p", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 46);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Conditional_52_For_2_Template_button_click_9_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeParticipant(p_r5));
    });
    \u0275\u0275elementStart(10, "span", 47);
    \u0275\u0275text(11, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r5.email.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r5.status === "joined" ? "Entrou" : "Pendente", " ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275repeaterCreate(1, EventDetailComponent_Conditional_6_Conditional_52_For_2_Template, 12, 3, "div", 40, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.participants());
  }
}
function EventDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "a", 7)(2, "span", 8);
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Voltar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 10);
    \u0275\u0275text(8, " Convide a galera para o grupo. Quanto mais, melhor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11);
    \u0275\u0275conditionalCreate(10, EventDetailComponent_Conditional_6_Conditional_10_Template, 4, 1, "span", 12);
    \u0275\u0275conditionalCreate(11, EventDetailComponent_Conditional_6_Conditional_11_Template, 4, 1, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 13)(13, "div", 14)(14, "div", 15)(15, "div", 16)(16, "span", 17);
    \u0275\u0275text(17, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h2", 18);
    \u0275\u0275text(19, "Convite Direto");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "form", 19);
    \u0275\u0275listener("ngSubmit", function EventDetailComponent_Conditional_6_Template_form_ngSubmit_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addParticipant());
    });
    \u0275\u0275elementStart(21, "div")(22, "label", 20);
    \u0275\u0275text(23, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 21);
    \u0275\u0275conditionalCreate(25, EventDetailComponent_Conditional_6_Conditional_25_Template, 2, 0, "p", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, EventDetailComponent_Conditional_6_Conditional_26_Template, 2, 1, "p", 23);
    \u0275\u0275elementStart(27, "button", 24)(28, "span", 25);
    \u0275\u0275text(29, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 26)(32, "div", 27)(33, "span", 28);
    \u0275\u0275text(34, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "h2", 18);
    \u0275\u0275text(36, "Link M\xE1gico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "p", 29);
    \u0275\u0275text(38, " Compartilhe este link para a galera entrar no sorteio. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 30)(40, "div", 31);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 32);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.copyMagicLink());
    });
    \u0275\u0275elementStart(43, "span", 25);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(45, "div", 33)(46, "div", 34)(47, "h2", 18);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 35);
    \u0275\u0275text(50, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(51, EventDetailComponent_Conditional_6_Conditional_51_Template, 3, 0, "div", 36)(52, EventDetailComponent_Conditional_6_Conditional_52_Template, 3, 0, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ev_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ev_r3.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ev_r3.draw_date ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ev_r3.budget != null ? 11 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx_r0.inviteForm);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.inviteForm.controls.email.touched && ctx_r0.inviteForm.controls.email.invalid ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.inviteError() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.inviting());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.inviting() ? "Convidando..." : "Adicionar Participante", " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r0.magicLink(), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.linkCopied() ? "Link copiado" : "Copiar link");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.linkCopied() ? "check" : "content_copy");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Convidados (", ctx_r0.pendingCount(), ") ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.participants().length === 0 ? 51 : 52);
  }
}
var EventDetailComponent = class _EventDetailComponent {
  route = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  eventService = inject(EventService);
  participantService = inject(ParticipantService);
  /** Controla a abertura do menu lateral. */
  sidenavOpen = signal(false, ...ngDevMode ? [{ debugName: "sidenavOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  eventId = "";
  event = signal(null, ...ngDevMode ? [{ debugName: "event" }] : (
    /* istanbul ignore next */
    []
  ));
  participants = signal([], ...ngDevMode ? [{ debugName: "participants" }] : (
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
  /** Estado do formulário de convite. */
  inviting = signal(false, ...ngDevMode ? [{ debugName: "inviting" }] : (
    /* istanbul ignore next */
    []
  ));
  inviteError = signal(null, ...ngDevMode ? [{ debugName: "inviteError" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Quantidade de convidados (usada no título "Pendentes"). */
  pendingCount = computed(() => this.participants().length, ...ngDevMode ? [{ debugName: "pendingCount" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Link mágico para entrar no sorteio (copiável). */
  magicLink = computed(() => this.eventId ? `${location.origin}/join/${this.eventId}` : "", ...ngDevMode ? [{ debugName: "magicLink" }] : (
    /* istanbul ignore next */
    []
  ));
  linkCopied = signal(false, ...ngDevMode ? [{ debugName: "linkCopied" }] : (
    /* istanbul ignore next */
    []
  ));
  inviteForm = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]]
  });
  async ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get("id") ?? "";
    await this.loadAll();
  }
  async loadAll() {
    this.loading.set(true);
    this.errorMessage.set(null);
    try {
      const [event, participants] = await Promise.all([
        this.eventService.getEvent(this.eventId),
        this.participantService.listByEvent(this.eventId)
      ]);
      if (!event) {
        this.errorMessage.set("Evento n\xE3o encontrado.");
      }
      this.event.set(event);
      this.participants.set(participants);
    } catch (error) {
      console.error("Erro ao carregar evento:", error);
      this.errorMessage.set(error?.message || "N\xE3o foi poss\xEDvel carregar o evento.");
    } finally {
      this.loading.set(false);
    }
  }
  async addParticipant() {
    if (this.inviteForm.invalid) {
      this.inviteForm.markAllAsTouched();
      return;
    }
    this.inviting.set(true);
    this.inviteError.set(null);
    try {
      const email = this.inviteForm.getRawValue().email;
      const novo = await this.participantService.invite(this.eventId, email);
      this.participants.update((list) => [novo, ...list]);
      this.inviteForm.reset();
    } catch (error) {
      console.error("Erro ao convidar:", error);
      const detalhe = error?.code === "23505" ? "Esse e-mail j\xE1 foi convidado para este sorteio." : error?.message || "Erro desconhecido";
      this.inviteError.set(detalhe);
    } finally {
      this.inviting.set(false);
    }
  }
  async removeParticipant(participant) {
    try {
      await this.participantService.remove(participant.id);
      this.participants.update((list) => list.filter((p) => p.id !== participant.id));
    } catch (error) {
      console.error("Erro ao remover participante:", error);
    }
  }
  async copyMagicLink() {
    try {
      await navigator.clipboard.writeText(this.magicLink());
      this.linkCopied.set(true);
      setTimeout(() => this.linkCopied.set(false), 2e3);
    } catch (error) {
      console.error("Erro ao copiar link:", error);
    }
  }
  static \u0275fac = function EventDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailComponent, selectors: [["app-event-detail"]], decls: 8, vars: 2, consts: [[1, "min-h-screen", "flex", "flex-col", "bg-background"], [3, "closeSidenav", "isOpen"], [3, "toggleSidenav"], [1, "flex-1", "w-full", "max-w-4xl", "mx-auto", "px-6", "py-12"], [1, "font-headline", "font-bold", "uppercase", "text-muted-foreground"], [1, "border-4", "border-black", "bg-destructive/10", "p-6", "font-bold", "text-destructive"], [1, "mb-10"], ["routerLink", "/dashboard", 1, "inline-flex", "items-center", "gap-1", "font-headline", "font-bold", "uppercase", "text-sm", "text-muted-foreground", "hover:text-foreground", "mb-4"], [1, "material-symbols-outlined", "text-base"], [1, "text-4xl", "md:text-5xl", "font-black", "font-headline", "uppercase", "tracking-tighter", "mb-2"], [1, "text-lg", "font-medium", "text-muted-foreground"], [1, "flex", "flex-wrap", "gap-3", "mt-4"], [1, "flex", "items-center", "gap-1", "bg-white", "border-2", "border-black", "px-3", "py-1", "text-xs", "font-bold", "font-headline", "uppercase"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "space-y-8"], [1, "bg-white", "border-4", "border-black", "p-6", "neo-shadow-lg"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "material-symbols-outlined", "text-3xl", "bg-primary", "p-2", "border-2", "border-black", "neo-shadow"], [1, "text-2xl", "font-black", "font-headline", "uppercase", "italic"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], ["for", "email", 1, "block", "text-xs", "font-black", "uppercase", "mb-1"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "amigo@exemplo.com", 1, "w-full", "border-4", "border-black", "p-4", "font-bold", "focus:ring-0", "focus:outline-none", "focus:bg-accent", "bg-zinc-50", "transition-colors"], [1, "text-xs", "font-bold", "text-destructive", "uppercase", "mt-1"], [1, "text-sm", "font-bold", "text-destructive"], ["type", "submit", 1, "w-full", "bg-accent", "border-4", "border-black", "font-black", "uppercase", "py-4", "flex", "items-center", "justify-center", "gap-2", "neo-shadow", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "active:translate-x-1", "active:translate-y-1", "active:shadow-none", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"], [1, "material-symbols-outlined"], [1, "bg-secondary", "border-4", "border-black", "p-6", "neo-shadow-lg"], [1, "flex", "items-center", "gap-3", "mb-4"], [1, "material-symbols-outlined", "text-3xl"], [1, "font-bold", "text-sm", "mb-4"], [1, "flex", "gap-2"], [1, "flex-1", "bg-white", "border-2", "border-black", "p-3", "font-mono", "text-sm", "overflow-hidden", "truncate"], ["type", "button", 1, "bg-black", "text-white", "p-3", "border-2", "border-black", "flex", "items-center", "justify-center", "hover:bg-zinc-800", "active:scale-95", "transition-transform", 3, "click"], [1, "bg-white", "border-4", "border-black", "p-6", "neo-shadow-lg", "h-fit"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "material-symbols-outlined", "text-zinc-400"], [1, "bg-zinc-100", "border-2", "border-dashed", "border-black", "p-6", "text-center"], [1, "space-y-4"], [1, "material-symbols-outlined", "text-sm"], [1, "text-xs", "font-bold", "uppercase", "italic", "text-zinc-500"], [1, "flex", "items-center", "justify-between", "p-3", "border-2", "border-black", "bg-zinc-50", "hover:bg-accent", "transition-colors"], [1, "flex", "items-center", "gap-3", "min-w-0"], [1, "w-10", "h-10", "border-2", "border-black", "bg-primary", "flex", "items-center", "justify-center", "font-black", "uppercase", "shrink-0"], [1, "min-w-0"], [1, "font-black", "text-sm", "truncate"], [1, "text-[10px]", "font-bold", "uppercase", "text-zinc-500"], ["type", "button", "aria-label", "Remover participante", 1, "text-zinc-400", "hover:text-destructive", "transition-colors", "shrink-0", 3, "click"], [1, "material-symbols-outlined", "text-xl"]], template: function EventDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-sidenav", 1);
      \u0275\u0275listener("closeSidenav", function EventDetailComponent_Template_app_sidenav_closeSidenav_1_listener() {
        return ctx.sidenavOpen.set(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-header", 2);
      \u0275\u0275listener("toggleSidenav", function EventDetailComponent_Template_app_header_toggleSidenav_2_listener() {
        return ctx.sidenavOpen.set(!ctx.sidenavOpen());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "main", 3);
      \u0275\u0275conditionalCreate(4, EventDetailComponent_Conditional_4_Template, 2, 0, "p", 4)(5, EventDetailComponent_Conditional_5_Template, 2, 1, "div", 5)(6, EventDetailComponent_Conditional_6_Template, 53, 13);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "app-footer");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.sidenavOpen());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 4 : ctx.errorMessage() ? 5 : (tmp_1_0 = ctx.event()) ? 6 : -1, tmp_1_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, HeaderComponent, FooterComponent, SidenavComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventDetailComponent, [{
    type: Component,
    args: [{ selector: "app-event-detail", standalone: true, imports: [ReactiveFormsModule, RouterLink, HeaderComponent, FooterComponent, SidenavComponent], template: `<div class="min-h-screen flex flex-col bg-background">\r
  <app-sidenav [isOpen]="sidenavOpen()" (closeSidenav)="sidenavOpen.set(false)"></app-sidenav>\r
  <app-header (toggleSidenav)="sidenavOpen.set(!sidenavOpen())"></app-header>\r
\r
  <main class="flex-1 w-full max-w-4xl mx-auto px-6 py-12">\r
    @if (loading()) {\r
      <p class="font-headline font-bold uppercase text-muted-foreground">Carregando evento...</p>\r
    } @else if (errorMessage()) {\r
      <div class="border-4 border-black bg-destructive/10 p-6 font-bold text-destructive">\r
        {{ errorMessage() }}\r
      </div>\r
    } @else if (event(); as ev) {\r
      <!-- Cabe\xE7alho do evento -->\r
      <div class="mb-10">\r
        <a\r
          routerLink="/dashboard"\r
          class="inline-flex items-center gap-1 font-headline font-bold uppercase text-sm text-muted-foreground hover:text-foreground mb-4"\r
        >\r
          <span class="material-symbols-outlined text-base">arrow_back</span> Voltar\r
        </a>\r
        <h1 class="text-4xl md:text-5xl font-black font-headline uppercase tracking-tighter mb-2">\r
          {{ ev.name }}\r
        </h1>\r
        <p class="text-lg font-medium text-muted-foreground">\r
          Convide a galera para o grupo. Quanto mais, melhor.\r
        </p>\r
        <div class="flex flex-wrap gap-3 mt-4">\r
          @if (ev.draw_date) {\r
            <span class="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 text-xs font-bold font-headline uppercase">\r
              <span class="material-symbols-outlined text-sm">calendar_today</span> {{ ev.draw_date }}\r
            </span>\r
          }\r
          @if (ev.budget != null) {\r
            <span class="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 text-xs font-bold font-headline uppercase">\r
              <span class="material-symbols-outlined text-sm">payments</span> R$ {{ ev.budget }}\r
            </span>\r
          }\r
        </div>\r
      </div>\r
\r
      <!-- Grid de convite -->\r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">\r
        <!-- Coluna esquerda: convite direto + magic link -->\r
        <div class="space-y-8">\r
          <!-- Convite por e-mail -->\r
          <div class="bg-white border-4 border-black p-6 neo-shadow-lg">\r
            <div class="flex items-center gap-3 mb-6">\r
              <span class="material-symbols-outlined text-3xl bg-primary p-2 border-2 border-black neo-shadow">mail</span>\r
              <h2 class="text-2xl font-black font-headline uppercase italic">Convite Direto</h2>\r
            </div>\r
            <form [formGroup]="inviteForm" (ngSubmit)="addParticipant()" class="space-y-4">\r
              <div>\r
                <label for="email" class="block text-xs font-black uppercase mb-1">E-mail</label>\r
                <input\r
                  id="email"\r
                  type="email"\r
                  formControlName="email"\r
                  placeholder="amigo@exemplo.com"\r
                  class="w-full border-4 border-black p-4 font-bold focus:ring-0 focus:outline-none focus:bg-accent bg-zinc-50 transition-colors"\r
                />\r
                @if (inviteForm.controls.email.touched && inviteForm.controls.email.invalid) {\r
                  <p class="text-xs font-bold text-destructive uppercase mt-1">Informe um e-mail v\xE1lido.</p>\r
                }\r
              </div>\r
              @if (inviteError()) {\r
                <p class="text-sm font-bold text-destructive">{{ inviteError() }}</p>\r
              }\r
              <button\r
                type="submit"\r
                [disabled]="inviting()"\r
                class="w-full bg-accent border-4 border-black font-black uppercase py-4 flex items-center justify-center gap-2 neo-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"\r
              >\r
                <span class="material-symbols-outlined">person_add</span>\r
                {{ inviting() ? 'Convidando...' : 'Adicionar Participante' }}\r
              </button>\r
            </form>\r
          </div>\r
\r
          <!-- Magic Link -->\r
          <div class="bg-secondary border-4 border-black p-6 neo-shadow-lg">\r
            <div class="flex items-center gap-3 mb-4">\r
              <span class="material-symbols-outlined text-3xl">auto_awesome</span>\r
              <h2 class="text-2xl font-black font-headline uppercase italic">Link M\xE1gico</h2>\r
            </div>\r
            <p class="font-bold text-sm mb-4">\r
              Compartilhe este link para a galera entrar no sorteio.\r
            </p>\r
            <div class="flex gap-2">\r
              <div class="flex-1 bg-white border-2 border-black p-3 font-mono text-sm overflow-hidden truncate">\r
                {{ magicLink() }}\r
              </div>\r
              <button\r
                type="button"\r
                (click)="copyMagicLink()"\r
                class="bg-black text-white p-3 border-2 border-black flex items-center justify-center hover:bg-zinc-800 active:scale-95 transition-transform"\r
                [attr.aria-label]="linkCopied() ? 'Link copiado' : 'Copiar link'"\r
              >\r
                <span class="material-symbols-outlined">{{ linkCopied() ? 'check' : 'content_copy' }}</span>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Coluna direita: convidados -->\r
        <div class="bg-white border-4 border-black p-6 neo-shadow-lg h-fit">\r
          <div class="flex justify-between items-center mb-6">\r
            <h2 class="text-2xl font-black font-headline uppercase italic">\r
              Convidados ({{ pendingCount() }})\r
            </h2>\r
            <span class="material-symbols-outlined text-zinc-400">group</span>\r
          </div>\r
\r
          @if (participants().length === 0) {\r
            <div class="bg-zinc-100 border-2 border-dashed border-black p-6 text-center">\r
              <p class="text-xs font-bold uppercase italic text-zinc-500">\r
                Ningu\xE9m por aqui ainda. Convide a galera acima!\r
              </p>\r
            </div>\r
          } @else {\r
            <div class="space-y-4">\r
              @for (p of participants(); track p.id) {\r
                <div class="flex items-center justify-between p-3 border-2 border-black bg-zinc-50 hover:bg-accent transition-colors">\r
                  <div class="flex items-center gap-3 min-w-0">\r
                    <div class="w-10 h-10 border-2 border-black bg-primary flex items-center justify-center font-black uppercase shrink-0">\r
                      {{ p.email.charAt(0) }}\r
                    </div>\r
                    <div class="min-w-0">\r
                      <p class="font-black text-sm truncate">{{ p.email }}</p>\r
                      <p class="text-[10px] font-bold uppercase text-zinc-500">\r
                        {{ p.status === 'joined' ? 'Entrou' : 'Pendente' }}\r
                      </p>\r
                    </div>\r
                  </div>\r
                  <button\r
                    type="button"\r
                    (click)="removeParticipant(p)"\r
                    class="text-zinc-400 hover:text-destructive transition-colors shrink-0"\r
                    aria-label="Remover participante"\r
                  >\r
                    <span class="material-symbols-outlined text-xl">cancel</span>\r
                  </button>\r
                </div>\r
              }\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    }\r
  </main>\r
\r
  <app-footer></app-footer>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailComponent, { className: "EventDetailComponent", filePath: "src/app/features/events/event-detail/event-detail.component.ts", lineNumber: 16 });
})();
export {
  EventDetailComponent
};
//# sourceMappingURL=chunk-5J5PCZAG.js.map
