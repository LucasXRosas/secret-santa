import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
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
  BrlCurrencyPipe
} from "./chunk-E642KB2B.js";
import {
  RelativeDatePipe
} from "./chunk-XUCKCSJZ.js";
import {
  EventService
} from "./chunk-3UQHFIVU.js";
import {
  HeaderComponent,
  ParticipantService,
  SidenavComponent
} from "./chunk-CAIZGX2S.js";
import {
  ToastService
} from "./chunk-4G5YQTUP.js";
import {
  AuthService,
  Router,
  RouterLink
} from "./chunk-UW2S6YIE.js";
import {
  Component,
  Input,
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
  ɵɵdefer,
  ɵɵdeferEnableTimerScheduling,
  ɵɵdeferOnIdle,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-S6SU5Y6X.js";

// apps/web/src/app/features/events/event-detail/event-detail.component.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function EventDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Carregando evento...");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 21)(1, "span", 11);
    \u0275\u0275text(2, "edit_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar Sorteio ");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_6_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Conditional_7_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openEditModal());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar Sorteio ");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, EventDetailComponent_Conditional_6_Conditional_7_Conditional_0_Template, 4, 0, "button", 21)(1, EventDetailComponent_Conditional_6_Conditional_7_Conditional_1_Template, 4, 0, "button", 22);
    \u0275\u0275elementStart(2, "button", 23);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Conditional_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteEvent());
    });
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Excluir Sorteio ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.hasDrawn() ? 0 : 1);
  }
}
function EventDetailComponent_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13)(1, "span", 25);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Somente ", ((tmp_3_0 = ctx_r0.event()) == null ? null : tmp_3_0.organizer_name) || "o organizador", " pode editar ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17)(1, "span", 25);
    \u0275\u0275text(2, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "relativeDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ev_r4.draw_date), " ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17)(1, "span", 25);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "brlCurrency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ev_r4.budget), " ");
  }
}
function EventDetailComponent_Conditional_6_Conditional_18_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, "Informe um e-mail v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_6_Conditional_18_Conditional_12_Template(rf, ctx) {
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
function EventDetailComponent_Conditional_6_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 29);
    \u0275\u0275text(5, "Convite Direto");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 30);
    \u0275\u0275listener("ngSubmit", function EventDetailComponent_Conditional_6_Conditional_18_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addParticipant());
    });
    \u0275\u0275elementStart(7, "div")(8, "label", 31);
    \u0275\u0275text(9, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 32);
    \u0275\u0275conditionalCreate(11, EventDetailComponent_Conditional_6_Conditional_18_Conditional_11_Template, 2, 0, "p", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, EventDetailComponent_Conditional_6_Conditional_18_Conditional_12_Template, 2, 1, "p", 34);
    \u0275\u0275elementStart(13, "button", 35)(14, "span", 36);
    \u0275\u0275text(15, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 37)(18, "div", 38)(19, "span", 39);
    \u0275\u0275text(20, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h2", 29);
    \u0275\u0275text(22, "Link M\xE1gico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p", 40);
    \u0275\u0275text(24, " Compartilhe este link para a galera entrar no sorteio. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 41)(26, "div", 42);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 43);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Conditional_18_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r5);
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
function EventDetailComponent_Conditional_6_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 44);
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
function EventDetailComponent_Conditional_6_Defer_20_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "p", 54);
    \u0275\u0275text(2, " Ningu\xE9m por aqui ainda. Convide a galera acima! ");
    \u0275\u0275elementEnd()();
  }
}
function EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Conditional_10_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openRevealModal(p_r7));
    });
    \u0275\u0275elementStart(1, "span", 25);
    \u0275\u0275text(2, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isOwner() && p_r7.email !== ctx_r0.currentUserEmail() ? "Ver" : "Revelar", " ");
  }
}
function EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, "\u{1F512}");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Conditional_10_Conditional_0_Template, 4, 1, "button", 62)(1, EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Conditional_10_Conditional_1_Template, 2, 0, "span", 63);
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r0.isOwner() || p_r7.email === ctx_r0.currentUserEmail() ? 0 : 1);
  }
}
function EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Conditional_11_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const p_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.removeParticipant(p_r7));
    });
    \u0275\u0275elementStart(1, "span", 67);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Conditional_11_Conditional_0_Template, 3, 0, "button", 65);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional(ctx_r0.isOwner() ? 0 : -1);
  }
}
function EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 58)(5, "p", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 60);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 61);
    \u0275\u0275conditionalCreate(10, EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Conditional_10_Template, 2, 1)(11, EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Conditional_11_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r7.email.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r7.status === "joined" ? "Entrou" : "Pendente", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasDrawn() ? 10 : 11);
  }
}
function EventDetailComponent_Conditional_6_Defer_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275repeaterCreate(1, EventDetailComponent_Conditional_6_Defer_20_Conditional_7_For_2_Template, 12, 4, "div", 55, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.participants());
  }
}
function EventDetailComponent_Conditional_6_Defer_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_6_Defer_20_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.fazerSorteio());
    });
    \u0275\u0275elementStart(1, "span", 36);
    \u0275\u0275text(2, "shuffle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.drawing());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.drawing() ? "Sorteando..." : "Fazer o Sorteio", " ");
  }
}
function EventDetailComponent_Conditional_6_Defer_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1, " Adicione pelo menos 3 pessoas para realizar o sorteio. ");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_6_Defer_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "h2", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 49);
    \u0275\u0275text(5, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, EventDetailComponent_Conditional_6_Defer_20_Conditional_6_Template, 3, 0, "div", 50)(7, EventDetailComponent_Conditional_6_Defer_20_Conditional_7_Template, 3, 0, "div", 51);
    \u0275\u0275conditionalCreate(8, EventDetailComponent_Conditional_6_Defer_20_Conditional_8_Template, 4, 2, "button", 52)(9, EventDetailComponent_Conditional_6_Defer_20_Conditional_9_Template, 2, 0, "p", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Convidados (", ctx_r0.pendingCount(), ") ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.participants().length === 0 ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.hasDrawn() && ctx_r0.participants().length >= 3 ? 8 : !ctx_r0.hasDrawn() && ctx_r0.participants().length > 0 ? 9 : -1);
  }
}
function EventDetailComponent_Conditional_6_DeferLoading_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 70);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 71);
    \u0275\u0275text(4, " Carregando convidados... ");
    \u0275\u0275elementEnd()();
  }
}
function EventDetailComponent_Conditional_6_DeferPlaceholder_22_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275element(1, "div", 75);
    \u0275\u0275elementStart(2, "div", 76);
    \u0275\u0275element(3, "div", 77)(4, "div", 78);
    \u0275\u0275elementEnd()();
  }
}
function EventDetailComponent_Conditional_6_DeferPlaceholder_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275element(2, "div", 72)(3, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275repeaterCreate(5, EventDetailComponent_Conditional_6_DeferPlaceholder_22_For_6_Template, 5, 0, "div", 74, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function EventDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "a", 10)(3, "span", 11);
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Voltar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275conditionalCreate(7, EventDetailComponent_Conditional_6_Conditional_7_Template, 6, 1)(8, EventDetailComponent_Conditional_6_Conditional_8_Template, 4, 1, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h1", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 15);
    \u0275\u0275text(12, " Convide a galera para o grupo. Quanto mais, melhor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 16);
    \u0275\u0275conditionalCreate(14, EventDetailComponent_Conditional_6_Conditional_14_Template, 5, 3, "span", 17);
    \u0275\u0275conditionalCreate(15, EventDetailComponent_Conditional_6_Conditional_15_Template, 5, 3, "span", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 18)(17, "div", 19);
    \u0275\u0275conditionalCreate(18, EventDetailComponent_Conditional_6_Conditional_18_Template, 31, 8)(19, EventDetailComponent_Conditional_6_Conditional_19_Template, 7, 0, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275domTemplate(20, EventDetailComponent_Conditional_6_Defer_20_Template, 10, 3)(21, EventDetailComponent_Conditional_6_DeferLoading_21_Template, 5, 0)(22, EventDetailComponent_Conditional_6_DeferPlaceholder_22_Template, 7, 1);
    \u0275\u0275defer(23, 20, null, 21, 22, null, 0, null, \u0275\u0275deferEnableTimerScheduling);
    \u0275\u0275deferOnIdle();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r4 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.isOwner() ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ev_r4.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ev_r4.draw_date ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ev_r4.budget != null ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.hasDrawn() ? 18 : 19);
  }
}
function EventDetailComponent_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 83);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 84);
    \u0275\u0275text(4, "Aten\xE7\xE3o!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 85);
    \u0275\u0275text(6, " Passe o dispositivo para ");
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "span", 86);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ". ");
    \u0275\u0275element(11, "br")(12, "br");
    \u0275\u0275text(13, " Apenas ele(a) deve ver a pr\xF3xima tela para n\xE3o estragar a surpresa! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 87);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_8_Conditional_5_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmIdentity());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(p_r12.name || p_r12.email);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Eu sou o(a) ", p_r12.name || p_r12.email, " ");
  }
}
function EventDetailComponent_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "span", 44);
    \u0275\u0275text(2, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 88);
    \u0275\u0275text(4, "Voc\xEA tirou:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 89)(6, "p", 90);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 91);
    \u0275\u0275text(9, " Guarde segredo! Feche esta tela antes de devolver o dispositivo. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 92);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_8_Conditional_6_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeRevealModal());
    });
    \u0275\u0275elementStart(11, "span", 36);
    \u0275\u0275text(12, "visibility_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Ocultar e Fechar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getDrawnEmail(p_r12.drawn_participant_id), " ");
  }
}
function EventDetailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 79)(2, "button", 80);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRevealModal());
    });
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, EventDetailComponent_Conditional_8_Conditional_5_Template, 16, 2, "div", 81)(6, EventDetailComponent_Conditional_8_Conditional_6_Template, 14, 1, "div", 82);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.revealStep() === "warning" ? 5 : 6);
  }
}
function EventDetailComponent_Conditional_9_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, "O nome \xE9 obrigat\xF3rio.");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 93)(2, "button", 80);
    \u0275\u0275listener("click", function EventDetailComponent_Conditional_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditModal());
    });
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2", 94);
    \u0275\u0275text(6, "Editar Evento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 30);
    \u0275\u0275listener("ngSubmit", function EventDetailComponent_Conditional_9_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateEventDetails());
    });
    \u0275\u0275elementStart(8, "div")(9, "label", 95);
    \u0275\u0275text(10, "Nome do Sorteio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 96);
    \u0275\u0275conditionalCreate(12, EventDetailComponent_Conditional_9_Conditional_12_Template, 2, 0, "p", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "label", 97);
    \u0275\u0275text(15, "Or\xE7amento (Opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "label", 99);
    \u0275\u0275text(19, "Data do Sorteio (Opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "label", 101);
    \u0275\u0275text(23, "\u{1F4CD} Local (Opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 103)(26, "span", 36);
    \u0275\u0275text(27, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r0.editForm);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.editForm.controls.name.touched && ctx_r0.editForm.controls.name.invalid ? 12 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275property("disabled", ctx_r0.updating());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.updating() ? "Salvando..." : "Salvar Altera\xE7\xF5es", " ");
  }
}
var DRAW_NOTIFICATIONS_KEY = "wd_draw_notifications";
var EventDetailComponent = class _EventDetailComponent {
  fb = inject(FormBuilder);
  eventService = inject(EventService);
  participantService = inject(ParticipantService);
  authService = inject(AuthService);
  router = inject(Router);
  toastService = inject(ToastService);
  /** Controla a abertura do menu lateral. */
  sidenavOpen = signal(false, ...ngDevMode ? [{ debugName: "sidenavOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  id = input.required(...ngDevMode ? [{ debugName: "id" }] : (
    /* istanbul ignore next */
    []
  ));
  /** [ID19] Dado pré-carregado pelo eventResolver antes da rota abrir. */
  eventData = input(null, ...ngDevMode ? [{ debugName: "eventData" }] : (
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
  /** Estado do Modal de Revelação (Passa o Celular) */
  showRevealModal = signal(false, ...ngDevMode ? [{ debugName: "showRevealModal" }] : (
    /* istanbul ignore next */
    []
  ));
  revealedParticipant = signal(null, ...ngDevMode ? [{ debugName: "revealedParticipant" }] : (
    /* istanbul ignore next */
    []
  ));
  revealStep = signal("warning", ...ngDevMode ? [{ debugName: "revealStep" }] : (
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
  /** [ID21] O usuário logado é o dono deste evento? Controla visibilidade de editar/excluir. */
  isOwner = computed(() => {
    const ev = this.event();
    const user = this.authService.currentUser();
    return !!ev && !!user && ev.owner_id === user.id;
  }, ...ngDevMode ? [{ debugName: "isOwner" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Email do usuário logado, para identificar qual card de participante é "meu". */
  currentUserEmail = computed(() => this.authService.currentUser()?.email ?? "", ...ngDevMode ? [{ debugName: "currentUserEmail" }] : (
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
  /** Estado e formulário de edição do evento */
  showEditModal = signal(false, ...ngDevMode ? [{ debugName: "showEditModal" }] : (
    /* istanbul ignore next */
    []
  ));
  updating = signal(false, ...ngDevMode ? [{ debugName: "updating" }] : (
    /* istanbul ignore next */
    []
  ));
  editForm = this.fb.group({
    name: this.fb.control("", { validators: [Validators.required], nonNullable: true }),
    budget: this.fb.control(null),
    draw_date: this.fb.control(null),
    location: this.fb.control(null)
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
      const resolvedEvent = this.eventData();
      const [event, participants] = await Promise.all([
        resolvedEvent ? Promise.resolve(resolvedEvent) : this.eventService.getEvent(eventId),
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
      this.toastService.success(`Convite enviado para ${email}! \u{1F381}`);
    } catch (error) {
      console.error("Erro ao convidar:", error);
      const detalhe = error?.code === "23505" ? "Esse e-mail j\xE1 foi convidado para este sorteio." : error?.message || "Erro desconhecido";
      this.inviteError.set(detalhe);
      this.toastService.error(detalhe);
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
  openEditModal() {
    const current = this.event();
    if (current) {
      this.editForm.patchValue({
        name: current.name,
        budget: current.budget,
        draw_date: current.draw_date,
        location: current.location
      });
      this.showEditModal.set(true);
    }
  }
  closeEditModal() {
    this.showEditModal.set(false);
  }
  async updateEventDetails() {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }
    this.updating.set(true);
    try {
      const values = this.editForm.getRawValue();
      const updatedEvent = await this.eventService.updateEvent(this.id(), {
        name: values.name,
        budget: values.budget,
        draw_date: values.draw_date,
        location: values.location
      });
      this.event.set(updatedEvent);
      this.closeEditModal();
    } catch (error) {
      console.error("Erro ao atualizar evento:", error);
      alert("N\xE3o foi poss\xEDvel atualizar o evento.");
    } finally {
      this.updating.set(false);
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
      this.toastService.success(`Sorteio de "${this.event()?.name}" realizado! \u{1F389}`);
      const stored = JSON.parse(localStorage.getItem(DRAW_NOTIFICATIONS_KEY) ?? "[]");
      stored.push({ eventId: this.id(), eventName: this.event()?.name ?? "Sorteio", ts: Date.now() });
      localStorage.setItem(DRAW_NOTIFICATIONS_KEY, JSON.stringify(stored));
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
  openRevealModal(participant) {
    this.revealedParticipant.set(participant);
    this.revealStep.set("warning");
    this.showRevealModal.set(true);
  }
  confirmIdentity() {
    this.revealStep.set("result");
  }
  closeRevealModal() {
    this.showRevealModal.set(false);
    setTimeout(() => {
      this.revealedParticipant.set(null);
      this.revealStep.set("warning");
    }, 200);
  }
  async copyMagicLink() {
    try {
      await navigator.clipboard.writeText(this.magicLink());
      this.linkCopied.set(true);
      this.toastService.success("Link copiado para a \xE1rea de transfer\xEAncia!");
      setTimeout(() => this.linkCopied.set(false), 2e3);
    } catch (error) {
      console.error("Erro ao copiar link:", error);
      this.toastService.error("N\xE3o foi poss\xEDvel copiar o link.");
    }
  }
  static \u0275fac = function EventDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailComponent, selectors: [["app-event-detail"]], inputs: { id: [1, "id"], eventData: [1, "eventData"] }, decls: 10, vars: 4, consts: [[300, null], [1, "min-h-screen", "flex", "flex-col", "bg-background"], [3, "isOpenChange", "isOpen"], [3, "toggleSidenav"], [1, "flex-1", "w-full", "max-w-4xl", "mx-auto", "px-6", "py-12"], [1, "font-headline", "font-bold", "uppercase", "text-muted-foreground"], [1, "border-4", "border-black", "bg-destructive/10", "p-6", "font-bold", "text-destructive"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "backdrop-blur-sm", "p-4"], [1, "mb-10"], [1, "flex", "justify-between", "items-center", "mb-4"], ["routerLink", "/dashboard", 1, "inline-flex", "items-center", "gap-1", "font-headline", "font-bold", "uppercase", "text-sm", "text-muted-foreground", "hover:text-foreground"], [1, "material-symbols-outlined", "text-base"], [1, "flex", "items-center", "gap-4"], [1, "inline-flex", "items-center", "gap-1", "text-xs", "font-bold", "uppercase", "text-muted-foreground", "bg-zinc-100", "border-2", "border-black", "px-3", "py-1"], [1, "text-4xl", "md:text-5xl", "font-black", "font-headline", "uppercase", "tracking-tighter", "mb-2"], [1, "text-lg", "font-medium", "text-muted-foreground"], [1, "flex", "flex-wrap", "gap-3", "mt-4"], [1, "flex", "items-center", "gap-1", "bg-white", "border-2", "border-black", "px-3", "py-1", "text-xs", "font-bold", "font-headline", "uppercase"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "space-y-8"], [1, "bg-primary/20", "border-4", "border-black", "p-6", "neo-shadow-lg", "text-center", "flex", "flex-col", "items-center"], ["disabled", "", "title", "N\xE3o \xE9 poss\xEDvel editar ap\xF3s o sorteio ser realizado", 1, "inline-flex", "items-center", "gap-1", "text-sm", "font-bold", "uppercase", "text-zinc-400", "cursor-not-allowed"], [1, "inline-flex", "items-center", "gap-1", "text-sm", "font-bold", "uppercase", "text-primary", "hover:opacity-80", "transition-opacity"], [1, "inline-flex", "items-center", "gap-1", "text-sm", "font-bold", "uppercase", "text-destructive", "hover:opacity-80", "transition-opacity", 3, "click"], [1, "inline-flex", "items-center", "gap-1", "text-sm", "font-bold", "uppercase", "text-primary", "hover:opacity-80", "transition-opacity", 3, "click"], [1, "material-symbols-outlined", "text-sm"], [1, "bg-white", "border-4", "border-black", "p-6", "neo-shadow-lg"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "material-symbols-outlined", "text-3xl", "bg-primary", "p-2", "border-2", "border-black", "neo-shadow"], [1, "text-2xl", "font-black", "font-headline", "uppercase", "italic"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], ["for", "email", 1, "block", "text-xs", "font-black", "uppercase", "mb-1"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "amigo@exemplo.com", 1, "w-full", "border-4", "border-black", "p-4", "font-bold", "focus:ring-0", "focus:outline-none", "focus:bg-accent", "bg-zinc-50", "transition-colors"], [1, "text-xs", "font-bold", "text-destructive", "uppercase", "mt-1"], [1, "text-sm", "font-bold", "text-destructive"], ["type", "submit", 1, "w-full", "bg-accent", "border-4", "border-black", "font-black", "uppercase", "py-4", "flex", "items-center", "justify-center", "gap-2", "neo-shadow", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "active:translate-x-1", "active:translate-y-1", "active:shadow-none", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"], [1, "material-symbols-outlined"], [1, "bg-secondary", "border-4", "border-black", "p-6", "neo-shadow-lg"], [1, "flex", "items-center", "gap-3", "mb-4"], [1, "material-symbols-outlined", "text-3xl"], [1, "font-bold", "text-sm", "mb-4"], [1, "flex", "gap-2"], [1, "flex-1", "bg-white", "border-2", "border-black", "p-3", "font-mono", "text-sm", "overflow-hidden", "truncate"], ["type", "button", 1, "bg-black", "text-white", "p-3", "border-2", "border-black", "flex", "items-center", "justify-center", "hover:bg-zinc-800", "active:scale-95", "transition-transform", 3, "click"], [1, "material-symbols-outlined", "text-6xl", "text-primary", "mb-4"], [1, "text-2xl", "font-black", "font-headline", "uppercase", "italic", "mb-2"], [1, "font-bold", "text-sm"], [1, "bg-white", "border-4", "border-black", "p-6", "neo-shadow-lg", "h-fit"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "material-symbols-outlined", "text-zinc-400"], [1, "bg-zinc-100", "border-2", "border-dashed", "border-black", "p-6", "text-center"], [1, "space-y-4"], [1, "mt-6", "w-full", "bg-primary", "border-4", "border-black", "font-black", "uppercase", "py-4", "flex", "items-center", "justify-center", "gap-2", "neo-shadow", "hover:bg-accent", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "disabled"], [1, "mt-6", "text-center", "text-xs", "font-bold", "text-zinc-500", "uppercase"], [1, "text-xs", "font-bold", "uppercase", "italic", "text-zinc-500"], [1, "flex", "items-center", "justify-between", "p-3", "border-2", "border-black", "bg-zinc-50", "hover:bg-accent", "transition-colors"], [1, "flex", "items-center", "gap-3", "min-w-0"], [1, "w-10", "h-10", "border-2", "border-black", "bg-primary", "flex", "items-center", "justify-center", "font-black", "uppercase", "shrink-0"], [1, "min-w-0"], [1, "font-black", "text-sm", "truncate"], [1, "text-[10px]", "font-bold", "uppercase", "text-zinc-500"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "bg-secondary", "px-3", "py-2", "border-2", "border-black", "text-xs", "font-black", "uppercase", "flex", "items-center", "gap-1", "hover:bg-black", "hover:text-white", "transition-colors"], ["title", "Somente voc\xEA pode ver o seu sorteado", 1, "text-zinc-300", "text-lg"], ["type", "button", 1, "bg-secondary", "px-3", "py-2", "border-2", "border-black", "text-xs", "font-black", "uppercase", "flex", "items-center", "gap-1", "hover:bg-black", "hover:text-white", "transition-colors", 3, "click"], ["type", "button", "aria-label", "Remover participante", 1, "text-zinc-400", "hover:text-destructive", "transition-colors", "shrink-0"], ["type", "button", "aria-label", "Remover participante", 1, "text-zinc-400", "hover:text-destructive", "transition-colors", "shrink-0", 3, "click"], [1, "material-symbols-outlined", "text-xl"], [1, "mt-6", "w-full", "bg-primary", "border-4", "border-black", "font-black", "uppercase", "py-4", "flex", "items-center", "justify-center", "gap-2", "neo-shadow", "hover:bg-accent", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "bg-white", "border-4", "border-black", "p-6", "neo-shadow-lg", "h-fit", "flex", "items-center", "gap-3"], [1, "material-symbols-outlined", "animate-spin", "text-primary"], [1, "font-headline", "font-bold", "uppercase", "text-muted-foreground", "text-sm"], [1, "h-8", "w-40", "bg-zinc-200", "border-2", "border-black", "animate-pulse"], [1, "w-6", "h-6", "bg-zinc-200", "border-2", "border-black", "animate-pulse"], [1, "flex", "items-center", "gap-3", "p-3", "border-2", "border-black"], [1, "w-10", "h-10", "bg-zinc-200", "border-2", "border-black", "animate-pulse", "shrink-0"], [1, "flex-1", "space-y-2"], [1, "h-3", "bg-zinc-200", "border", "border-black", "animate-pulse", "w-3/4"], [1, "h-2", "bg-zinc-100", "border", "border-black", "animate-pulse", "w-1/3"], [1, "bg-white", "border-4", "border-black", "w-full", "max-w-md", "p-8", "neo-shadow-xl", "text-center", "relative", "animate-in", "fade-in", "zoom-in", "duration-200"], ["type", "button", "aria-label", "Fechar", 1, "absolute", "top-4", "right-4", "text-zinc-400", "hover:text-black", "transition-colors", 3, "click"], [1, "flex", "flex-col", "items-center"], [1, "flex", "flex-col", "items-center", "animate-in", "fade-in", "slide-in-from-bottom-4"], [1, "material-symbols-outlined", "text-6xl", "text-destructive", "mb-4", "animate-bounce"], [1, "text-3xl", "font-black", "font-headline", "uppercase", "italic", "mb-4"], [1, "font-bold", "text-lg", "mb-8"], [1, "bg-primary", "px-2", "border-2", "border-black"], [1, "w-full", "bg-black", "text-white", "font-black", "uppercase", "py-4", "border-2", "border-black", "hover:bg-zinc-800", "transition-colors", 3, "click"], [1, "text-xl", "font-bold", "uppercase", "text-muted-foreground", "mb-2"], [1, "bg-secondary", "border-4", "border-black", "p-6", "w-full", "mb-8"], [1, "text-3xl", "font-black", "font-headline", "uppercase", "italic", "truncate"], [1, "text-sm", "font-bold", "text-zinc-500", "mb-6"], [1, "w-full", "bg-destructive", "text-white", "font-black", "uppercase", "py-4", "border-2", "border-black", "flex", "items-center", "justify-center", "gap-2", "hover:bg-red-600", "transition-colors", 3, "click"], [1, "bg-white", "border-4", "border-black", "w-full", "max-w-md", "p-8", "neo-shadow-xl", "relative", "animate-in", "fade-in", "zoom-in", "duration-200"], [1, "text-2xl", "font-black", "font-headline", "uppercase", "italic", "mb-6"], ["for", "edit-name", 1, "block", "text-xs", "font-black", "uppercase", "mb-1"], ["id", "edit-name", "type", "text", "formControlName", "name", "placeholder", "Ex: Amigo Secreto da Fam\xEDlia", 1, "w-full", "border-4", "border-black", "p-4", "font-bold", "focus:ring-0", "focus:outline-none", "focus:bg-accent", "bg-zinc-50", "transition-colors"], ["for", "edit-budget", 1, "block", "text-xs", "font-black", "uppercase", "mb-1"], ["id", "edit-budget", "type", "number", "formControlName", "budget", "placeholder", "Ex: 50", 1, "w-full", "border-4", "border-black", "p-4", "font-bold", "focus:ring-0", "focus:outline-none", "focus:bg-accent", "bg-zinc-50", "transition-colors"], ["for", "edit-date", 1, "block", "text-xs", "font-black", "uppercase", "mb-1"], ["id", "edit-date", "type", "date", "formControlName", "draw_date", 1, "w-full", "border-4", "border-black", "p-4", "font-bold", "focus:ring-0", "focus:outline-none", "focus:bg-accent", "bg-zinc-50", "transition-colors"], ["for", "edit-location", 1, "block", "text-xs", "font-black", "uppercase", "mb-1"], ["id", "edit-location", "type", "text", "formControlName", "location", "placeholder", "Ex: Casa da Ana", 1, "w-full", "border-4", "border-black", "p-4", "font-bold", "focus:ring-0", "focus:outline-none", "focus:bg-accent", "bg-zinc-50", "transition-colors"], ["type", "submit", 1, "w-full", "bg-primary", "border-4", "border-black", "font-black", "uppercase", "py-4", "flex", "items-center", "justify-center", "gap-2", "neo-shadow", "hover:bg-accent", "transition-all", "disabled:opacity-60", "disabled:cursor-not-allowed", "mt-4", 3, "disabled"]], template: function EventDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "app-sidenav", 2);
      \u0275\u0275twoWayListener("isOpenChange", function EventDetailComponent_Template_app_sidenav_isOpenChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sidenavOpen, $event) || (ctx.sidenavOpen = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-header", 3);
      \u0275\u0275listener("toggleSidenav", function EventDetailComponent_Template_app_header_toggleSidenav_2_listener() {
        return ctx.sidenavOpen.set(!ctx.sidenavOpen());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "main", 4);
      \u0275\u0275conditionalCreate(4, EventDetailComponent_Conditional_4_Template, 2, 0, "p", 5)(5, EventDetailComponent_Conditional_5_Template, 2, 1, "div", 6)(6, EventDetailComponent_Conditional_6_Template, 25, 5);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "app-footer");
      \u0275\u0275conditionalCreate(8, EventDetailComponent_Conditional_8_Template, 7, 1, "div", 7);
      \u0275\u0275conditionalCreate(9, EventDetailComponent_Conditional_9_Template, 29, 4, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("isOpen", ctx.sidenavOpen);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 4 : ctx.errorMessage() ? 5 : (tmp_1_0 = ctx.event()) ? 6 : -1, tmp_1_0);
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_2_0 = ctx.showRevealModal() && ctx.revealedParticipant()) ? 8 : -1, tmp_2_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showEditModal() ? 9 : -1);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    BrlCurrencyPipe,
    RelativeDatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventDetailComponent, [{
    type: Component,
    args: [{ selector: "app-event-detail", standalone: true, imports: [
      ReactiveFormsModule,
      RouterLink,
      HeaderComponent,
      FooterComponent,
      SidenavComponent,
      BrlCurrencyPipe,
      RelativeDatePipe
    ], template: `<div class="min-h-screen flex flex-col bg-background">\r
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
          <div class="flex items-center gap-4">\r
            @if (isOwner()) {\r
              @if (hasDrawn()) {\r
                <button\r
                  disabled\r
                  title="N\xE3o \xE9 poss\xEDvel editar ap\xF3s o sorteio ser realizado"\r
                  class="inline-flex items-center gap-1 text-sm font-bold uppercase text-zinc-400 cursor-not-allowed"\r
                >\r
                  <span class="material-symbols-outlined text-base">edit_off</span> Editar Sorteio\r
                </button>\r
              } @else {\r
                <button\r
                  (click)="openEditModal()"\r
                  class="inline-flex items-center gap-1 text-sm font-bold uppercase text-primary hover:opacity-80 transition-opacity"\r
                >\r
                  <span class="material-symbols-outlined text-base">edit</span> Editar Sorteio\r
                </button>\r
              }\r
              <button\r
                (click)="deleteEvent()"\r
                class="inline-flex items-center gap-1 text-sm font-bold uppercase text-destructive hover:opacity-80 transition-opacity"\r
              >\r
                <span class="material-symbols-outlined text-base">delete</span> Excluir Sorteio\r
              </button>\r
            } @else {\r
              <span class="inline-flex items-center gap-1 text-xs font-bold uppercase text-muted-foreground bg-zinc-100 border-2 border-black px-3 py-1">\r
                <span class="material-symbols-outlined text-sm">lock</span>\r
                Somente {{ event()?.organizer_name || 'o organizador' }} pode editar\r
              </span>\r
            }\r
          </div>\r
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
        <!-- [ID9] @defer: a lista de convidados \xE9 conte\xFAdo secund\xE1rio.\r
             Com "on idle", o browser renderiza o formul\xE1rio de convite primeiro\r
             e s\xF3 carrega este bloco quando estiver livre, melhorando o LCP. -->\r
        @defer (on idle) {\r
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
                        <!-- Criador v\xEA todos. Participante s\xF3 v\xEA o pr\xF3prio. -->\r
                        @if (isOwner() || p.email === currentUserEmail()) {\r
                          <button\r
                            type="button"\r
                            (click)="openRevealModal(p)"\r
                            class="bg-secondary px-3 py-2 border-2 border-black text-xs font-black uppercase flex items-center gap-1 hover:bg-black hover:text-white transition-colors"\r
                          >\r
                            <span class="material-symbols-outlined text-sm">visibility</span>\r
                            {{ isOwner() && p.email !== currentUserEmail() ? 'Ver' : 'Revelar' }}\r
                          </button>\r
                        } @else {\r
                          <span class="text-zinc-300 text-lg" title="Somente voc\xEA pode ver o seu sorteado">\u{1F512}</span>\r
                        }\r
                      } @else {\r
                        @if (isOwner()) {\r
                          <button\r
                            type="button"\r
                            (click)="removeParticipant(p)"\r
                            class="text-zinc-400 hover:text-destructive transition-colors shrink-0"\r
                            aria-label="Remover participante"\r
                          >\r
                            <span class="material-symbols-outlined text-xl">cancel</span>\r
                          </button>\r
                        }\r
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
        } @placeholder {\r
          <!-- Skeleton exibido enquanto o bloco ainda n\xE3o foi carregado -->\r
          <div class="bg-white border-4 border-black p-6 neo-shadow-lg h-fit">\r
            <div class="flex justify-between items-center mb-6">\r
              <div class="h-8 w-40 bg-zinc-200 border-2 border-black animate-pulse"></div>\r
              <div class="w-6 h-6 bg-zinc-200 border-2 border-black animate-pulse"></div>\r
            </div>\r
            <div class="space-y-4">\r
              @for (i of [1, 2, 3]; track i) {\r
                <div class="flex items-center gap-3 p-3 border-2 border-black">\r
                  <div class="w-10 h-10 bg-zinc-200 border-2 border-black animate-pulse shrink-0"></div>\r
                  <div class="flex-1 space-y-2">\r
                    <div class="h-3 bg-zinc-200 border border-black animate-pulse w-3/4"></div>\r
                    <div class="h-2 bg-zinc-100 border border-black animate-pulse w-1/3"></div>\r
                  </div>\r
                </div>\r
              }\r
            </div>\r
          </div>\r
        } @loading (minimum 300ms) {\r
          <!-- Exibido enquanto o Angular carrega o bloco diferido -->\r
          <div class="bg-white border-4 border-black p-6 neo-shadow-lg h-fit flex items-center gap-3">\r
            <span class="material-symbols-outlined animate-spin text-primary">progress_activity</span>\r
            <p class="font-headline font-bold uppercase text-muted-foreground text-sm">\r
              Carregando convidados...\r
            </p>\r
          </div>\r
        }\r
      </div>\r
    }\r
  </main>\r
\r
  <app-footer></app-footer>\r
\r
  <!-- Modal de Revela\xE7\xE3o de Amigo Secreto ("Passa o Celular") -->\r
  @if (showRevealModal() && revealedParticipant(); as p) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">\r
      <div class="bg-white border-4 border-black w-full max-w-md p-8 neo-shadow-xl text-center relative animate-in fade-in zoom-in duration-200">\r
        <!-- Bot\xE3o fechar discreto -->\r
        <button\r
          type="button"\r
          (click)="closeRevealModal()"\r
          class="absolute top-4 right-4 text-zinc-400 hover:text-black transition-colors"\r
          aria-label="Fechar"\r
        >\r
          <span class="material-symbols-outlined">close</span>\r
        </button>\r
\r
        @if (revealStep() === 'warning') {\r
          <!-- Passo 1: Aviso -->\r
          <div class="flex flex-col items-center">\r
            <span class="material-symbols-outlined text-6xl text-destructive mb-4 animate-bounce">warning</span>\r
            <h2 class="text-3xl font-black font-headline uppercase italic mb-4">Aten\xE7\xE3o!</h2>\r
            <p class="font-bold text-lg mb-8">\r
              Passe o dispositivo para <br>\r
              <span class="bg-primary px-2 border-2 border-black">{{ p.name || p.email }}</span>.\r
              <br><br>\r
              Apenas ele(a) deve ver a pr\xF3xima tela para n\xE3o estragar a surpresa!\r
            </p>\r
            <button\r
              (click)="confirmIdentity()"\r
              class="w-full bg-black text-white font-black uppercase py-4 border-2 border-black hover:bg-zinc-800 transition-colors"\r
            >\r
              Eu sou o(a) {{ p.name || p.email }}\r
            </button>\r
          </div>\r
        } @else {\r
          <!-- Passo 2: Resultado -->\r
          <div class="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4">\r
            <span class="material-symbols-outlined text-6xl text-primary mb-4">visibility</span>\r
            <h2 class="text-xl font-bold uppercase text-muted-foreground mb-2">Voc\xEA tirou:</h2>\r
            <div class="bg-secondary border-4 border-black p-6 w-full mb-8">\r
              <p class="text-3xl font-black font-headline uppercase italic truncate">\r
                {{ getDrawnEmail(p.drawn_participant_id) }}\r
              </p>\r
            </div>\r
            <p class="text-sm font-bold text-zinc-500 mb-6">\r
              Guarde segredo! Feche esta tela antes de devolver o dispositivo.\r
            </p>\r
            <button\r
              (click)="closeRevealModal()"\r
              class="w-full bg-destructive text-white font-black uppercase py-4 border-2 border-black flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"\r
            >\r
              <span class="material-symbols-outlined">visibility_off</span>\r
              Ocultar e Fechar\r
            </button>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  }\r
  <!-- Modal de Edi\xE7\xE3o -->\r
  @if (showEditModal()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">\r
      <div class="bg-white border-4 border-black w-full max-w-md p-8 neo-shadow-xl relative animate-in fade-in zoom-in duration-200">\r
        <button\r
          type="button"\r
          (click)="closeEditModal()"\r
          class="absolute top-4 right-4 text-zinc-400 hover:text-black transition-colors"\r
          aria-label="Fechar"\r
        >\r
          <span class="material-symbols-outlined">close</span>\r
        </button>\r
\r
        <h2 class="text-2xl font-black font-headline uppercase italic mb-6">Editar Evento</h2>\r
\r
        <form [formGroup]="editForm" (ngSubmit)="updateEventDetails()" class="space-y-4">\r
          <div>\r
            <label for="edit-name" class="block text-xs font-black uppercase mb-1">Nome do Sorteio</label>\r
            <input\r
              id="edit-name"\r
              type="text"\r
              formControlName="name"\r
              placeholder="Ex: Amigo Secreto da Fam\xEDlia"\r
              class="w-full border-4 border-black p-4 font-bold focus:ring-0 focus:outline-none focus:bg-accent bg-zinc-50 transition-colors"\r
            />\r
            @if (editForm.controls.name.touched && editForm.controls.name.invalid) {\r
              <p class="text-xs font-bold text-destructive uppercase mt-1">O nome \xE9 obrigat\xF3rio.</p>\r
            }\r
          </div>\r
\r
          <div>\r
            <label for="edit-budget" class="block text-xs font-black uppercase mb-1">Or\xE7amento (Opcional)</label>\r
            <input\r
              id="edit-budget"\r
              type="number"\r
              formControlName="budget"\r
              placeholder="Ex: 50"\r
              class="w-full border-4 border-black p-4 font-bold focus:ring-0 focus:outline-none focus:bg-accent bg-zinc-50 transition-colors"\r
            />\r
          </div>\r
\r
          <div>\r
            <label for="edit-date" class="block text-xs font-black uppercase mb-1">Data do Sorteio (Opcional)</label>\r
            <input\r
              id="edit-date"\r
              type="date"\r
              formControlName="draw_date"\r
              class="w-full border-4 border-black p-4 font-bold focus:ring-0 focus:outline-none focus:bg-accent bg-zinc-50 transition-colors"\r
            />\r
          </div>\r
\r
          <div>\r
            <label for="edit-location" class="block text-xs font-black uppercase mb-1">\u{1F4CD} Local (Opcional)</label>\r
            <input\r
              id="edit-location"\r
              type="text"\r
              formControlName="location"\r
              placeholder="Ex: Casa da Ana"\r
              class="w-full border-4 border-black p-4 font-bold focus:ring-0 focus:outline-none focus:bg-accent bg-zinc-50 transition-colors"\r
            />\r
          </div>\r
\r
          <button\r
            type="submit"\r
            [disabled]="updating()"\r
            class="w-full bg-primary border-4 border-black font-black uppercase py-4 flex items-center justify-center gap-2 neo-shadow hover:bg-accent transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-4"\r
          >\r
            <span class="material-symbols-outlined">save</span>\r
            {{ updating() ? 'Salvando...' : 'Salvar Altera\xE7\xF5es' }}\r
          </button>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
</div>\r
` }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: true }] }], eventData: [{ type: Input, args: [{ isSignal: true, alias: "eventData", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailComponent, { className: "EventDetailComponent", filePath: "apps/web/src/app/features/events/event-detail/event-detail.component.ts", lineNumber: 30 });
})();
export {
  EventDetailComponent
};
//# sourceMappingURL=chunk-Z4LS6DY4.js.map
