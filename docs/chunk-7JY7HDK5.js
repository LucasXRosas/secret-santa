import {
  BrlCurrencyPipe,
  RelativeDatePipe
} from "./chunk-6GD34B6A.js";
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
} from "./chunk-D2NPQOVP.js";
import {
  EventService
} from "./chunk-EVQMUCJN.js";
import {
  FooterComponent,
  HeaderComponent,
  SidenavComponent
} from "./chunk-4J7WXTPV.js";
import {
  AuthService,
  Component,
  Injectable,
  Input,
  Router,
  RouterLink,
  computed,
  effect,
  inject,
  input,
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
} from "./chunk-PP7CZ2AI.js";

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
  /**
   * Realiza o sorteio do amigo secreto usando o algoritmo de embaralhamento de Fisher-Yates
   * e formando um único ciclo fechado onde A tira B, B tira C, e o último tira A.
   */
  async performDraw(eventId, participants) {
    if (participants.length < 3) {
      throw new Error("O sorteio requer pelo menos 3 participantes.");
    }
    const shuffled = [...participants];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const updates = shuffled.map((p, index) => {
      const nextParticipant = index === shuffled.length - 1 ? shuffled[0] : shuffled[index + 1];
      return {
        id: p.id,
        event_id: eventId,
        // Necessário para a política RLS (se aplicável ao UPDATE em lote) ou validações
        drawn_participant_id: nextParticipant.id
      };
    });
    const client = this.getClient();
    const promises = updates.map((u) => client.from("participants").update({ drawn_participant_id: u.drawn_participant_id }).eq("id", u.id));
    const results = await Promise.all(promises);
    const errorResult = results.find((r) => r.error != null);
    if (errorResult?.error) {
      throw errorResult.error;
    }
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
function EventDetailComponent_Conditional_6_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14)(1, "span", 26);
    \u0275\u0275text(2, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "relativeDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ev_r3.draw_date), " ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14)(1, "span", 26);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "brlCurrency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ev_r3.budget), " ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_19_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, "Informe um e-mail v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_6_Conditional_19_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inviteError());
  }
}
function EventDetailComponent_Conditional_6_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 20);
    \u0275\u0275text(5, "Convite Direto");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 30);
    \u0275\u0275listener("ngSubmit", function EventDetailComponent_Conditional_6_Conditional_19_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addParticipant());
    });
    \u0275\u0275elementStart(7, "div")(8, "label", 31);
    \u0275\u0275text(9, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 32);
    \u0275\u0275conditionalCreate(11, EventDetailComponent_Conditional_6_Conditional_19_Conditional_11_Template, 2, 0, "p", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, EventDetailComponent_Conditional_6_Conditional_19_Conditional_12_Template, 2, 1, "p", 34);
    \u0275\u0275elementStart(13, "button", 35)(14, "span", 36);
    \u0275\u0275text(15, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 37)(18, "div", 38)(19, "span", 39);
    \u0275\u0275text(20, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h2", 20);
    \u0275\u0275text(22, "Link M\xE1gico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p", 40);
    \u0275\u0275text(24, " Compartilhe este link para a galera entrar no sorteio. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 41)(26, "div", 42);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 43);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Conditional_19_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyMagicLink());
    });
    \u0275\u0275elementStart(29, "span", 36);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r0.inviteForm);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.inviteForm.controls.email.touched && ctx_r0.inviteForm.controls.email.invalid ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.inviteError() ? 12 : -1);
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
  }
}
function EventDetailComponent_Conditional_6_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 44);
    \u0275\u0275text(2, "celebration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 45);
    \u0275\u0275text(4, "Sorteio Realizado!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 46);
    \u0275\u0275text(6, " Os participantes j\xE1 foram sorteados e n\xE3o \xE9 mais poss\xEDvel alterar o grupo. ");
    \u0275\u0275elementEnd()();
  }
}
function EventDetailComponent_Conditional_6_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p", 47);
    \u0275\u0275text(2, " Ningu\xE9m por aqui ainda. Convide a galera acima! ");
    \u0275\u0275elementEnd()();
  }
}
function EventDetailComponent_Conditional_6_Conditional_28_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F449} Tirou: ", ctx_r0.getDrawnEmail(p_r5.drawn_participant_id), " ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_28_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Conditional_28_For_2_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeParticipant(p_r5));
    });
    \u0275\u0275elementStart(1, "span", 58);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function EventDetailComponent_Conditional_6_Conditional_28_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51)(5, "p", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 54);
    \u0275\u0275conditionalCreate(10, EventDetailComponent_Conditional_6_Conditional_28_For_2_Conditional_10_Template, 2, 1, "div", 55)(11, EventDetailComponent_Conditional_6_Conditional_28_For_2_Conditional_11_Template, 3, 0, "button", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r5.email.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r5.status === "joined" ? "Entrou" : "Pendente", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasDrawn() ? 10 : 11);
  }
}
function EventDetailComponent_Conditional_6_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, EventDetailComponent_Conditional_6_Conditional_28_For_2_Template, 12, 4, "div", 48, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.participants());
  }
}
function EventDetailComponent_Conditional_6_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fazerSorteio());
    });
    \u0275\u0275elementStart(1, "span", 36);
    \u0275\u0275text(2, "shuffle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.drawing());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.drawing() ? "Sorteando..." : "Fazer o Sorteio", " ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, " Adicione pelo menos 3 pessoas para realizar o sorteio. ");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "a", 8)(3, "span", 9);
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Voltar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 10);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteEvent());
    });
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Excluir Sorteio ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h1", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 12);
    \u0275\u0275text(13, " Convide a galera para o grupo. Quanto mais, melhor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13);
    \u0275\u0275conditionalCreate(15, EventDetailComponent_Conditional_6_Conditional_15_Template, 5, 3, "span", 14);
    \u0275\u0275conditionalCreate(16, EventDetailComponent_Conditional_6_Conditional_16_Template, 5, 3, "span", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 15)(18, "div", 16);
    \u0275\u0275conditionalCreate(19, EventDetailComponent_Conditional_6_Conditional_19_Template, 31, 8)(20, EventDetailComponent_Conditional_6_Conditional_20_Template, 7, 0, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "div", 19)(23, "h2", 20);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 21);
    \u0275\u0275text(26, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, EventDetailComponent_Conditional_6_Conditional_27_Template, 3, 0, "div", 22)(28, EventDetailComponent_Conditional_6_Conditional_28_Template, 3, 0, "div", 23);
    \u0275\u0275conditionalCreate(29, EventDetailComponent_Conditional_6_Conditional_29_Template, 4, 2, "button", 24)(30, EventDetailComponent_Conditional_6_Conditional_30_Template, 2, 0, "p", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ev_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ev_r3.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ev_r3.draw_date ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ev_r3.budget != null ? 16 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.hasDrawn() ? 19 : 20);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Convidados (", ctx_r0.pendingCount(), ") ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.participants().length === 0 ? 27 : 28);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.hasDrawn() && ctx_r0.participants().length >= 3 ? 29 : !ctx_r0.hasDrawn() && ctx_r0.participants().length > 0 ? 30 : -1);
  }
}
var EventDetailComponent = class _EventDetailComponent {
  fb = inject(FormBuilder);
  eventService = inject(EventService);
  participantService = inject(ParticipantService);
  router = inject(Router);
  /** Controla a abertura do menu lateral. */
  sidenavOpen = signal(false, ...ngDevMode ? [{ debugName: "sidenavOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * [ID17] input() signal: o Router injeta o parâmetro :id da URL diretamente
   * aqui via withComponentInputBinding(). Não é mais necessário usar ActivatedRoute.
   * O nome da propriedade deve ser idêntico ao param da rota ('id').
   */
  id = input.required(...ngDevMode ? [{ debugName: "id" }] : (
    /* istanbul ignore next */
    []
  ));
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
  /** Estado do sorteio */
  drawing = signal(false, ...ngDevMode ? [{ debugName: "drawing" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Quantidade de convidados (usada no título "Pendentes"). */
  pendingCount = computed(() => this.participants().length, ...ngDevMode ? [{ debugName: "pendingCount" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Indica se o sorteio já foi realizado (pelo menos um com drawn_participant_id) */
  hasDrawn = computed(() => this.participants().some((p) => p.drawn_participant_id != null), ...ngDevMode ? [{ debugName: "hasDrawn" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Link mágico para entrar no sorteio (copiável). */
  magicLink = computed(() => this.id() ? `${location.origin}/join/${this.id()}` : "", ...ngDevMode ? [{ debugName: "magicLink" }] : (
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
  constructor() {
    effect(() => {
      const eventId = this.id();
      if (eventId) {
        this.loadAll(eventId);
      }
    });
  }
  async loadAll(eventId) {
    this.loading.set(true);
    this.errorMessage.set(null);
    try {
      const [event, participants] = await Promise.all([
        this.eventService.getEvent(eventId),
        this.participantService.listByEvent(eventId)
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
      const novo = await this.participantService.invite(this.id(), email);
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
  async deleteEvent() {
    if (!confirm("Tem certeza de que deseja excluir este sorteio? Esta a\xE7\xE3o n\xE3o pode ser desfeita.")) {
      return;
    }
    try {
      await this.eventService.deleteEvent(this.id());
      this.router.navigate(["/dashboard"]);
    } catch (error) {
      console.error("Erro ao excluir evento:", error);
      alert("N\xE3o foi poss\xEDvel excluir o evento.");
    }
  }
  async fazerSorteio() {
    if (this.participants().length < 3) {
      alert("\xC9 necess\xE1rio ter pelo menos 3 participantes para realizar o sorteio.");
      return;
    }
    if (!confirm("Deseja realmente realizar o sorteio? Ap\xF3s sorteado, voc\xEA n\xE3o poder\xE1 adicionar ou remover participantes.")) {
      return;
    }
    this.drawing.set(true);
    try {
      await this.participantService.performDraw(this.id(), this.participants());
      await this.loadAll(this.id());
    } catch (error) {
      console.error("Erro ao realizar o sorteio:", error);
      alert("N\xE3o foi poss\xEDvel realizar o sorteio: " + (error?.message || "Erro desconhecido."));
    } finally {
      this.drawing.set(false);
    }
  }
  getDrawnEmail(drawnId) {
    if (!drawnId)
      return "";
    const participant = this.participants().find((p) => p.id === drawnId);
    return participant ? participant.name || participant.email : "Desconhecido";
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailComponent, selectors: [["app-event-detail"]], inputs: { id: [1, "id"] }, decls: 8, vars: 2, consts: [[1, "min-h-screen", "flex", "flex-col", "bg-background"], [3, "isOpenChange", "isOpen"], [3, "toggleSidenav"], [1, "flex-1", "w-full", "max-w-4xl", "mx-auto", "px-6", "py-12"], [1, "font-headline", "font-bold", "uppercase", "text-muted-foreground"], [1, "border-4", "border-black", "bg-destructive/10", "p-6", "font-bold", "text-destructive"], [1, "mb-10"], [1, "flex", "justify-between", "items-center", "mb-4"], ["routerLink", "/dashboard", 1, "inline-flex", "items-center", "gap-1", "font-headline", "font-bold", "uppercase", "text-sm", "text-muted-foreground", "hover:text-foreground"], [1, "material-symbols-outlined", "text-base"], [1, "inline-flex", "items-center", "gap-1", "text-sm", "font-bold", "uppercase", "text-destructive", "hover:opacity-80", "transition-opacity", 3, "click"], [1, "text-4xl", "md:text-5xl", "font-black", "font-headline", "uppercase", "tracking-tighter", "mb-2"], [1, "text-lg", "font-medium", "text-muted-foreground"], [1, "flex", "flex-wrap", "gap-3", "mt-4"], [1, "flex", "items-center", "gap-1", "bg-white", "border-2", "border-black", "px-3", "py-1", "text-xs", "font-bold", "font-headline", "uppercase"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "space-y-8"], [1, "bg-primary/20", "border-4", "border-black", "p-6", "neo-shadow-lg", "text-center", "flex", "flex-col", "items-center"], [1, "bg-white", "border-4", "border-black", "p-6", "neo-shadow-lg", "h-fit"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-black", "font-headline", "uppercase", "italic"], [1, "material-symbols-outlined", "text-zinc-400"], [1, "bg-zinc-100", "border-2", "border-dashed", "border-black", "p-6", "text-center"], [1, "space-y-4"], [1, "mt-6", "w-full", "bg-primary", "border-4", "border-black", "font-black", "uppercase", "py-4", "flex", "items-center", "justify-center", "gap-2", "neo-shadow", "hover:bg-accent", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"], [1, "mt-6", "text-center", "text-xs", "font-bold", "text-zinc-500", "uppercase"], [1, "material-symbols-outlined", "text-sm"], [1, "bg-white", "border-4", "border-black", "p-6", "neo-shadow-lg"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "material-symbols-outlined", "text-3xl", "bg-primary", "p-2", "border-2", "border-black", "neo-shadow"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], ["for", "email", 1, "block", "text-xs", "font-black", "uppercase", "mb-1"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "amigo@exemplo.com", 1, "w-full", "border-4", "border-black", "p-4", "font-bold", "focus:ring-0", "focus:outline-none", "focus:bg-accent", "bg-zinc-50", "transition-colors"], [1, "text-xs", "font-bold", "text-destructive", "uppercase", "mt-1"], [1, "text-sm", "font-bold", "text-destructive"], ["type", "submit", 1, "w-full", "bg-accent", "border-4", "border-black", "font-black", "uppercase", "py-4", "flex", "items-center", "justify-center", "gap-2", "neo-shadow", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "active:translate-x-1", "active:translate-y-1", "active:shadow-none", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"], [1, "material-symbols-outlined"], [1, "bg-secondary", "border-4", "border-black", "p-6", "neo-shadow-lg"], [1, "flex", "items-center", "gap-3", "mb-4"], [1, "material-symbols-outlined", "text-3xl"], [1, "font-bold", "text-sm", "mb-4"], [1, "flex", "gap-2"], [1, "flex-1", "bg-white", "border-2", "border-black", "p-3", "font-mono", "text-sm", "overflow-hidden", "truncate"], ["type", "button", 1, "bg-black", "text-white", "p-3", "border-2", "border-black", "flex", "items-center", "justify-center", "hover:bg-zinc-800", "active:scale-95", "transition-transform", 3, "click"], [1, "material-symbols-outlined", "text-6xl", "text-primary", "mb-4"], [1, "text-2xl", "font-black", "font-headline", "uppercase", "italic", "mb-2"], [1, "font-bold", "text-sm"], [1, "text-xs", "font-bold", "uppercase", "italic", "text-zinc-500"], [1, "flex", "items-center", "justify-between", "p-3", "border-2", "border-black", "bg-zinc-50", "hover:bg-accent", "transition-colors"], [1, "flex", "items-center", "gap-3", "min-w-0"], [1, "w-10", "h-10", "border-2", "border-black", "bg-primary", "flex", "items-center", "justify-center", "font-black", "uppercase", "shrink-0"], [1, "min-w-0"], [1, "font-black", "text-sm", "truncate"], [1, "text-[10px]", "font-bold", "uppercase", "text-zinc-500"], [1, "flex", "items-center", "gap-2"], [1, "bg-secondary", "px-3", "py-1", "border-2", "border-black", "text-xs", "font-bold", "uppercase"], ["type", "button", "aria-label", "Remover participante", 1, "text-zinc-400", "hover:text-destructive", "transition-colors", "shrink-0"], ["type", "button", "aria-label", "Remover participante", 1, "text-zinc-400", "hover:text-destructive", "transition-colors", "shrink-0", 3, "click"], [1, "material-symbols-outlined", "text-xl"], [1, "mt-6", "w-full", "bg-primary", "border-4", "border-black", "font-black", "uppercase", "py-4", "flex", "items-center", "justify-center", "gap-2", "neo-shadow", "hover:bg-accent", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "click", "disabled"]], template: function EventDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-sidenav", 1);
      \u0275\u0275twoWayListener("isOpenChange", function EventDetailComponent_Template_app_sidenav_isOpenChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sidenavOpen, $event) || (ctx.sidenavOpen = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-header", 2);
      \u0275\u0275listener("toggleSidenav", function EventDetailComponent_Template_app_header_toggleSidenav_2_listener() {
        return ctx.sidenavOpen.set(!ctx.sidenavOpen());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "main", 3);
      \u0275\u0275conditionalCreate(4, EventDetailComponent_Conditional_4_Template, 2, 0, "p", 4)(5, EventDetailComponent_Conditional_5_Template, 2, 1, "div", 5)(6, EventDetailComponent_Conditional_6_Template, 31, 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "app-footer");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("isOpen", ctx.sidenavOpen);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 4 : ctx.errorMessage() ? 5 : (tmp_1_0 = ctx.event()) ? 6 : -1, tmp_1_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, HeaderComponent, FooterComponent, SidenavComponent, BrlCurrencyPipe, RelativeDatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventDetailComponent, [{
    type: Component,
    args: [{ selector: "app-event-detail", standalone: true, imports: [ReactiveFormsModule, RouterLink, HeaderComponent, FooterComponent, SidenavComponent, BrlCurrencyPipe, RelativeDatePipe], template: `<div class="min-h-screen flex flex-col bg-background">\r
  <!-- [ID12] two-way binding via model(): [(isOpen)] sincroniza sidenavOpen bidireccionalmente -->\r
  <app-sidenav [(isOpen)]="sidenavOpen"></app-sidenav>\r
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
        <div class="flex justify-between items-center mb-4">\r
          <a\r
            routerLink="/dashboard"\r
            class="inline-flex items-center gap-1 font-headline font-bold uppercase text-sm text-muted-foreground hover:text-foreground"\r
          >\r
            <span class="material-symbols-outlined text-base">arrow_back</span> Voltar\r
          </a>\r
          <button\r
            (click)="deleteEvent()"\r
            class="inline-flex items-center gap-1 text-sm font-bold uppercase text-destructive hover:opacity-80 transition-opacity"\r
          >\r
            <span class="material-symbols-outlined text-base">delete</span> Excluir Sorteio\r
          </button>\r
        </div>\r
        <h1 class="text-4xl md:text-5xl font-black font-headline uppercase tracking-tighter mb-2">\r
          {{ ev.name }}\r
        </h1>\r
        <p class="text-lg font-medium text-muted-foreground">\r
          Convide a galera para o grupo. Quanto mais, melhor.\r
        </p>\r
        <div class="flex flex-wrap gap-3 mt-4">\r
          @if (ev.draw_date) {\r
            <!-- [ID8] RelativeDatePipe: converte ISO date em texto relativo pt-BR -->\r
            <span class="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 text-xs font-bold font-headline uppercase">\r
              <span class="material-symbols-outlined text-sm">calendar_today</span> {{ ev.draw_date | relativeDate }}\r
            </span>\r
          }\r
          @if (ev.budget != null) {\r
            <!-- [ID8] BrlCurrencyPipe: formata n\xFAmero como R$ 00,00 via Intl.NumberFormat -->\r
            <span class="flex items-center gap-1 bg-white border-2 border-black px-3 py-1 text-xs font-bold font-headline uppercase">\r
              <span class="material-symbols-outlined text-sm">payments</span> {{ ev.budget | brlCurrency }}\r
            </span>\r
          }\r
        </div>\r
      </div>\r
\r
      <!-- Grid de convite -->\r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">\r
        <!-- Coluna esquerda: convite direto + magic link -->\r
        <div class="space-y-8">\r
          @if (!hasDrawn()) {\r
            <!-- Convite por e-mail (Vis\xEDvel apenas antes do sorteio) -->\r
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
          } @else {\r
            <div class="bg-primary/20 border-4 border-black p-6 neo-shadow-lg text-center flex flex-col items-center">\r
              <span class="material-symbols-outlined text-6xl text-primary mb-4">celebration</span>\r
              <h2 class="text-2xl font-black font-headline uppercase italic mb-2">Sorteio Realizado!</h2>\r
              <p class="font-bold text-sm">\r
                Os participantes j\xE1 foram sorteados e n\xE3o \xE9 mais poss\xEDvel alterar o grupo.\r
              </p>\r
            </div>\r
          }\r
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
                <div class="flex items-center gap-2">\r
                  @if (hasDrawn()) {\r
                    <div class="bg-secondary px-3 py-1 border-2 border-black text-xs font-bold uppercase">\r
                      \u{1F449} Tirou: {{ getDrawnEmail(p.drawn_participant_id) }}\r
                    </div>\r
                  } @else {\r
                    <button\r
                      type="button"\r
                      (click)="removeParticipant(p)"\r
                      class="text-zinc-400 hover:text-destructive transition-colors shrink-0"\r
                      aria-label="Remover participante"\r
                    >\r
                      <span class="material-symbols-outlined text-xl">cancel</span>\r
                    </button>\r
                  }\r
                </div>\r
              </div>\r
              }\r
            </div>\r
          }\r
\r
          @if (!hasDrawn() && participants().length >= 3) {\r
            <button\r
              (click)="fazerSorteio()"\r
              [disabled]="drawing()"\r
              class="mt-6 w-full bg-primary border-4 border-black font-black uppercase py-4 flex items-center justify-center gap-2 neo-shadow hover:bg-accent transition-all disabled:opacity-60 disabled:cursor-not-allowed"\r
            >\r
              <span class="material-symbols-outlined">shuffle</span>\r
              {{ drawing() ? 'Sorteando...' : 'Fazer o Sorteio' }}\r
            </button>\r
          } @else if (!hasDrawn() && participants().length > 0) {\r
            <p class="mt-6 text-center text-xs font-bold text-zinc-500 uppercase">\r
              Adicione pelo menos 3 pessoas para realizar o sorteio.\r
            </p>\r
          }\r
        </div>\r
      </div>\r
    }\r
  </main>\r
\r
  <app-footer></app-footer>\r
</div>\r
` }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailComponent, { className: "EventDetailComponent", filePath: "apps/web/src/app/features/events/event-detail/event-detail.component.ts", lineNumber: 18 });
})();
export {
  EventDetailComponent
};
//# sourceMappingURL=chunk-7JY7HDK5.js.map
