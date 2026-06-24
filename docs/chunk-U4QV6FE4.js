import {
  ToastService
} from "./chunk-YETSNVPI.js";
import {
  AuthService,
  Router,
  RouterLink,
  environment
} from "./chunk-6MYGOC25.js";
import {
  Component,
  Injectable,
  Input,
  Output,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  model,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CU26WE3Z.js";

// apps/web/src/app/core/services/participant.service.ts
var ParticipantService = class _ParticipantService {
  authService = inject(AuthService);
  baseUrl = `${environment.supabaseUrl}/rest/v1`;
  async buildHeaders(extra = {}) {
    const token = await this.authService.getAccessToken();
    return __spreadValues({
      apikey: environment.supabaseKey,
      Authorization: `Bearer ${token ?? environment.supabaseKey}`,
      "Content-Type": "application/json"
    }, extra);
  }
  /** Lança um Error com a mensagem do PostgREST quando a resposta não é ok. */
  async ensureOk(res, contexto) {
    if (res.ok)
      return;
    let detalhe = `${res.status} ${res.statusText}`;
    try {
      const body = await res.json();
      if (body?.message)
        detalhe = body.message;
      if (body?.code)
        res._pgcode = body.code;
    } catch {
    }
    const erro = new Error(`${contexto}: ${detalhe}`);
    erro.code = res._pgcode;
    throw erro;
  }
  /** Lista os participantes de um evento, dos mais recentes para os mais antigos. */
  async listByEvent(eventId) {
    const res = await fetch(`${this.baseUrl}/participants?event_id=eq.${eventId}&select=*&order=invited_at.desc`, { headers: await this.buildHeaders() });
    await this.ensureOk(res, "Erro ao listar participantes");
    return await res.json();
  }
  /** Convida (adiciona) um participante por e-mail. */
  async invite(eventId, email, name) {
    const res = await fetch(`${this.baseUrl}/participants`, {
      method: "POST",
      headers: await this.buildHeaders({ Prefer: "return=representation" }),
      body: JSON.stringify({
        event_id: eventId,
        email: email.trim().toLowerCase(),
        name: name?.trim() || null
      })
    });
    await this.ensureOk(res, "Erro ao convidar participante");
    const rows = await res.json();
    return rows[0];
  }
  /** Remove um participante do evento. */
  async remove(participantId) {
    const res = await fetch(`${this.baseUrl}/participants?id=eq.${participantId}`, {
      method: "DELETE",
      headers: await this.buildHeaders()
    });
    await this.ensureOk(res, "Erro ao remover participante");
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
        drawn_participant_id: nextParticipant.id
      };
    });
    const headers = await this.buildHeaders();
    const requests = updates.map((u) => fetch(`${this.baseUrl}/participants?id=eq.${u.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ drawn_participant_id: u.drawn_participant_id })
    }));
    const results = await Promise.all(requests);
    const falha = results.find((r) => !r.ok);
    if (falha) {
      await this.ensureOk(falha, "Erro ao realizar o sorteio");
    }
  }
  async buildAdminHeaders(extra = {}) {
    const serviceRoleKey = environment.supabaseServiceRoleKey;
    return __spreadValues({
      apikey: environment.supabaseKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json"
    }, extra);
  }
  /** Busca todos os convites pendentes de um determinado e-mail. */
  async listInvitations(email) {
    const headers = await this.buildAdminHeaders();
    const res = await fetch(`${this.baseUrl}/participants?email=eq.${encodeURIComponent(email.trim().toLowerCase())}&status=eq.pending&select=*,events(name)`, { headers });
    await this.ensureOk(res, "Erro ao buscar convites");
    const rows = await res.json();
    return rows.map((row) => __spreadProps(__spreadValues({}, row), {
      event_name: row.events?.name || "Sorteio Sem Nome"
    }));
  }
  /** Aceita um convite alterando o status para 'joined'. */
  async acceptInvitation(participantId) {
    const headers = await this.buildAdminHeaders();
    const res = await fetch(`${this.baseUrl}/participants?id=eq.${participantId}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ status: "joined" })
    });
    await this.ensureOk(res, "Erro ao aceitar convite");
  }
  /**
   * Busca todos os eventos em que o usuário participa como convidado aceito.
   * Usa service role para contornar o RLS (que filtraria apenas eventos do owner).
   */
  async listParticipatingEvents(email) {
    const headers = await this.buildAdminHeaders();
    const res = await fetch(`${this.baseUrl}/participants?email=eq.${encodeURIComponent(email.trim().toLowerCase())}&status=eq.joined&select=events(*)`, { headers });
    await this.ensureOk(res, "Erro ao buscar eventos participados");
    const rows = await res.json();
    return rows.map((r) => r.events).filter(Boolean);
  }
  /** Recusa um convite removendo o participante do sorteio. */
  async declineInvitation(participantId) {
    const headers = await this.buildAdminHeaders();
    const res = await fetch(`${this.baseUrl}/participants?id=eq.${participantId}`, {
      method: "DELETE",
      headers
    });
    await this.ensureOk(res, "Erro ao recusar convite");
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

// apps/web/src/app/components/header/header.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function HeaderComponent_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.invitations().length, " ");
  }
}
function HeaderComponent_Conditional_8_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, " Nenhum convite ");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_8_Conditional_5_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div")(2, "p", 20);
    \u0275\u0275text(3, "Sorteio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "button", 23);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_8_Conditional_5_Conditional_5_For_2_Template_button_click_7_listener() {
      const invite_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.acceptInvite(invite_r5.id));
    });
    \u0275\u0275text(8, " Aceitar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 24);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_8_Conditional_5_Conditional_5_For_2_Template_button_click_9_listener() {
      const invite_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.declineInvite(invite_r5.id));
    });
    \u0275\u0275text(10, " Recusar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const invite_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", invite_r5.event_name, " ");
  }
}
function HeaderComponent_Conditional_8_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, HeaderComponent_Conditional_8_Conditional_5_Conditional_5_For_2_Template, 11, 1, "div", 19, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.invitations());
  }
}
function HeaderComponent_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_8_Conditional_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeInvitations());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 15)(2, "h3", 16);
    \u0275\u0275text(3, " Convites Pendentes ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HeaderComponent_Conditional_8_Conditional_5_Conditional_4_Template, 2, 0, "p", 17)(5, HeaderComponent_Conditional_8_Conditional_5_Conditional_5_Template, 3, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.invitations().length === 0 ? 4 : 5);
  }
}
function HeaderComponent_Conditional_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_8_Conditional_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeProfile());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 25)(2, "button", 26);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_8_Conditional_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToDashboard());
    });
    \u0275\u0275text(3, " Dashboard ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 27);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_8_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(5, " Logout ");
    \u0275\u0275elementEnd()();
  }
}
function HeaderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleInvitations());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HeaderComponent_Conditional_8_Conditional_4_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, HeaderComponent_Conditional_8_Conditional_5_Template, 6, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 8)(7, "button", 13);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleProfile());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, HeaderComponent_Conditional_8_Conditional_9_Template, 6, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.isInvitationsOpen());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.invitations().length > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isInvitationsOpen() ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", ctx_r1.isProfileOpen());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.userInitial(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isProfileOpen() ? 9 : -1);
  }
}
function HeaderComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1, " Login ");
    \u0275\u0275elementEnd();
  }
}
var HeaderComponent = class _HeaderComponent {
  toggleSidenav = output();
  authService = inject(AuthService);
  participantService = inject(ParticipantService);
  router = inject(Router);
  toastService = inject(ToastService);
  // Estado de autenticação vindo do AuthService
  isAuthenticated = this.authService.isAuthenticated;
  // Controla a abertura da caixinha de perfil
  isProfileOpen = signal(false, ...ngDevMode ? [{ debugName: "isProfileOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  // Controla a caixinha de convites
  isInvitationsOpen = signal(false, ...ngDevMode ? [{ debugName: "isInvitationsOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  // Lista de convites pendentes
  invitations = signal([], ...ngDevMode ? [{ debugName: "invitations" }] : (
    /* istanbul ignore next */
    []
  ));
  // Inicial exibida no ícone de perfil (primeira letra do nome ou e-mail)
  userInitial = computed(() => {
    const user = this.authService.currentUser();
    const source = user?.user_metadata?.["name"] || user?.email || "?";
    return source.charAt(0).toUpperCase();
  }, ...ngDevMode ? [{ debugName: "userInitial" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      const user = this.authService.currentUser();
      if (user && user.email) {
        this.loadInvitations(user.email);
      } else {
        this.invitations.set([]);
      }
    });
  }
  async loadInvitations(email) {
    try {
      const list = await this.participantService.listInvitations(email);
      this.invitations.set(list);
    } catch (error) {
      console.error("Erro ao carregar convites:", error);
    }
  }
  toggleInvitations() {
    this.isInvitationsOpen.update((open) => !open);
    if (this.isInvitationsOpen()) {
      this.isProfileOpen.set(false);
    }
  }
  closeInvitations() {
    this.isInvitationsOpen.set(false);
  }
  async acceptInvite(inviteId) {
    try {
      await this.participantService.acceptInvitation(inviteId);
      this.closeInvitations();
      this.toastService.showAfterReload("Voc\xEA entrou no sorteio! \u{1F389}", "success");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao aceitar convite:", error);
      this.toastService.error("N\xE3o foi poss\xEDvel aceitar o convite.");
    }
  }
  async declineInvite(inviteId) {
    try {
      await this.participantService.declineInvitation(inviteId);
      this.invitations.update((list) => list.filter((i) => i.id !== inviteId));
      this.closeInvitations();
      this.toastService.info("Convite recusado.");
    } catch (error) {
      console.error("Erro ao recusar convite:", error);
      this.toastService.error("N\xE3o foi poss\xEDvel recusar o convite.");
    }
  }
  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
  toggleProfile() {
    this.isProfileOpen.update((open) => !open);
    if (this.isProfileOpen()) {
      this.isInvitationsOpen.set(false);
    }
  }
  closeProfile() {
    this.isProfileOpen.set(false);
  }
  goToDashboard() {
    this.closeProfile();
    this.router.navigate(["/dashboard"]);
  }
  async logout() {
    this.closeProfile();
    await this.authService.signOut();
    this.router.navigate(["/home"]);
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], outputs: { toggleSidenav: "toggleSidenav" }, decls: 14, vars: 1, consts: [[1, "w-full", "bg-primary", "border-b-4", "border-black", "px-6", "py-4", "flex", "items-center", "justify-between", "z-40", "relative"], ["routerLink", "/", 1, "text-2xl", "font-headline", "font-black", "uppercase", "tracking-tighter", "text-black", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"], [1, "hidden", "lg:flex", "items-center", "gap-6"], ["routerLink", "/", 1, "text-black", "font-headline", "font-bold", "uppercase", "hover:bg-black", "hover:text-white", "px-3", "py-1", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"], ["routerLink", "/dashboard", 1, "text-black", "font-headline", "font-bold", "uppercase", "hover:bg-black", "hover:text-white", "px-3", "py-1", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"], ["routerLink", "/login", 1, "text-black", "font-headline", "font-bold", "uppercase", "hover:bg-black", "hover:text-white", "px-3", "py-1", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"], ["aria-label", "Abrir menu", 1, "lg:hidden", "p-2", "bg-white", "border-2", "border-black", "neo-shadow-sm", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black", "flex", "flex-col", "justify-center", "items-center", "gap-1", "w-10", "h-10", 3, "click"], [1, "block", "w-5", "h-0.5", "bg-black"], [1, "relative"], ["aria-label", "Abrir convites de sorteios", 1, "relative", "w-10", "h-10", "bg-white", "border-2", "border-black", "neo-shadow-sm", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black", "flex", "items-center", "justify-center", "text-black", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2.5", "stroke", "currentColor", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"], [1, "absolute", "-top-1.5", "-right-1.5", "bg-destructive", "text-white", "text-[10px]", "font-black", "border-2", "border-black", "rounded-full", "w-5", "h-5", "flex", "items-center", "justify-center", "shadow-[1px_1px_0px_0px_black]", "animate-bounce"], ["aria-label", "Abrir menu do perfil", 1, "w-10", "h-10", "bg-white", "border-2", "border-black", "neo-shadow-sm", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black", "flex", "items-center", "justify-center", "font-headline", "font-black", "text-black", "uppercase", 3, "click"], ["aria-hidden", "true", 1, "fixed", "inset-0", "z-40", 3, "click"], [1, "absolute", "right-0", "mt-2", "w-80", "bg-white", "border-2", "border-black", "neo-shadow-lg", "z-50", "flex", "flex-col", "p-4"], [1, "font-headline", "font-black", "text-lg", "uppercase", "tracking-tight", "text-black", "border-b-2", "border-black", "pb-2", "mb-3"], [1, "text-sm", "font-headline", "text-muted-foreground", "py-2", "text-center", "uppercase", "font-bold"], [1, "flex", "flex-col", "gap-3", "max-h-64", "overflow-y-auto", "pr-1"], [1, "border-2", "border-black", "p-3", "bg-primary/10", "flex", "flex-col", "gap-2", "rounded-sm", "relative"], [1, "text-xs", "uppercase", "font-black", "tracking-wider", "text-muted-foreground"], [1, "font-headline", "font-bold", "text-black", "text-sm", "uppercase", "break-words", "leading-tight"], [1, "flex", "gap-2", "mt-1"], [1, "flex-1", "bg-accent", "border-2", "border-black", "py-1", "px-2", "text-xs", "font-headline", "font-black", "uppercase", "text-black", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "shadow-[2px_2px_0px_0px_black]", "transition-all", "cursor-pointer", "outline-none", "focus-visible:ring-1", "focus-visible:ring-black", 3, "click"], [1, "flex-1", "bg-destructive", "border-2", "border-black", "py-1", "px-2", "text-xs", "font-headline", "font-black", "uppercase", "text-white", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "shadow-[2px_2px_0px_0px_black]", "transition-all", "cursor-pointer", "outline-none", "focus-visible:ring-1", "focus-visible:ring-black", 3, "click"], [1, "absolute", "right-0", "mt-2", "w-48", "bg-white", "border-2", "border-black", "neo-shadow-lg", "z-50", "flex", "flex-col"], [1, "text-left", "text-black", "font-headline", "font-bold", "uppercase", "px-4", "py-3", "hover:bg-primary", "border-b-2", "border-black", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black", 3, "click"], [1, "text-left", "text-black", "font-headline", "font-bold", "uppercase", "px-4", "py-3", "hover:bg-black", "hover:text-white", "transition-colors", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "a", 1);
      \u0275\u0275text(2, " Wish Draw ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "nav", 2)(4, "a", 3);
      \u0275\u0275text(5, " In\xEDcio ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 4);
      \u0275\u0275text(7, " Meus Sorteios ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, HeaderComponent_Conditional_8_Template, 10, 6)(9, HeaderComponent_Conditional_9_Template, 2, 0, "a", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_10_listener() {
        return ctx.onToggleSidenav();
      });
      \u0275\u0275element(11, "span", 7)(12, "span", 7)(13, "span", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.isAuthenticated() ? 8 : 9);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [RouterLink], template: '<header\r\n  class="w-full bg-primary border-b-4 border-black px-6 py-4 flex items-center justify-between z-40 relative"\r\n>\r\n  <!-- Logo / T\xEDtulo -->\r\n  <a\r\n    routerLink="/"\r\n    class="text-2xl font-headline font-black uppercase tracking-tighter text-black outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n  >\r\n    Wish Draw\r\n  </a>\r\n\r\n  <!-- Menu Desktop -->\r\n  <nav class="hidden lg:flex items-center gap-6">\r\n    <a\r\n      routerLink="/"\r\n      class="text-black font-headline font-bold uppercase hover:bg-black hover:text-white px-3 py-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n    >\r\n      In\xEDcio\r\n    </a>\r\n    <a\r\n      routerLink="/dashboard"\r\n      class="text-black font-headline font-bold uppercase hover:bg-black hover:text-white px-3 py-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n    >\r\n      Meus Sorteios\r\n    </a>\r\n\r\n    @if (isAuthenticated()) {\r\n      <!-- Convites / Box de Email -->\r\n      <div class="relative">\r\n        <button\r\n          (click)="toggleInvitations()"\r\n          class="relative w-10 h-10 bg-white border-2 border-black neo-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all outline-none focus-visible:ring-2 focus-visible:ring-black flex items-center justify-center text-black"\r\n          aria-label="Abrir convites de sorteios"\r\n          [attr.aria-expanded]="isInvitationsOpen()"\r\n        >\r\n          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">\r\n            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />\r\n          </svg>\r\n\r\n          @if (invitations().length > 0) {\r\n            <span class="absolute -top-1.5 -right-1.5 bg-destructive text-white text-[10px] font-black border-2 border-black rounded-full w-5 h-5 flex items-center justify-center shadow-[1px_1px_0px_0px_black] animate-bounce">\r\n              {{ invitations().length }}\r\n            </span>\r\n          }\r\n        </button>\r\n\r\n        @if (isInvitationsOpen()) {\r\n          <div class="fixed inset-0 z-40" (click)="closeInvitations()" aria-hidden="true"></div>\r\n\r\n          <div\r\n            class="absolute right-0 mt-2 w-80 bg-white border-2 border-black neo-shadow-lg z-50 flex flex-col p-4"\r\n          >\r\n            <h3 class="font-headline font-black text-lg uppercase tracking-tight text-black border-b-2 border-black pb-2 mb-3">\r\n              Convites Pendentes\r\n            </h3>\r\n\r\n            @if (invitations().length === 0) {\r\n              <p class="text-sm font-headline text-muted-foreground py-2 text-center uppercase font-bold">\r\n                Nenhum convite\r\n              </p>\r\n            } @else {\r\n              <div class="flex flex-col gap-3 max-h-64 overflow-y-auto pr-1">\r\n                @for (invite of invitations(); track invite.id) {\r\n                  <div class="border-2 border-black p-3 bg-primary/10 flex flex-col gap-2 rounded-sm relative">\r\n                    <div>\r\n                      <p class="text-xs uppercase font-black tracking-wider text-muted-foreground">Sorteio</p>\r\n                      <p class="font-headline font-bold text-black text-sm uppercase break-words leading-tight">\r\n                        {{ invite.event_name }}\r\n                      </p>\r\n                    </div>\r\n                    \r\n                    <div class="flex gap-2 mt-1">\r\n                      <button\r\n                        (click)="acceptInvite(invite.id)"\r\n                        class="flex-1 bg-accent border-2 border-black py-1 px-2 text-xs font-headline font-black uppercase text-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none shadow-[2px_2px_0px_0px_black] transition-all cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-black"\r\n                      >\r\n                        Aceitar\r\n                      </button>\r\n                      <button\r\n                        (click)="declineInvite(invite.id)"\r\n                        class="flex-1 bg-destructive border-2 border-black py-1 px-2 text-xs font-headline font-black uppercase text-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none shadow-[2px_2px_0px_0px_black] transition-all cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-black"\r\n                      >\r\n                        Recusar\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                }\r\n              </div>\r\n            }\r\n          </div>\r\n        }\r\n      </div>\r\n\r\n      <!-- Perfil do usu\xE1rio com caixinha (dropdown) -->\r\n      <div class="relative">\r\n        <button\r\n          (click)="toggleProfile()"\r\n          class="w-10 h-10 bg-white border-2 border-black neo-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all outline-none focus-visible:ring-2 focus-visible:ring-black flex items-center justify-center font-headline font-black text-black uppercase"\r\n          aria-label="Abrir menu do perfil"\r\n          [attr.aria-expanded]="isProfileOpen()"\r\n        >\r\n          {{ userInitial() }}\r\n        </button>\r\n\r\n        @if (isProfileOpen()) {\r\n          <!-- Backdrop invis\xEDvel para fechar ao clicar fora -->\r\n          <div class="fixed inset-0 z-40" (click)="closeProfile()" aria-hidden="true"></div>\r\n\r\n          <!-- Caixinha -->\r\n          <div\r\n            class="absolute right-0 mt-2 w-48 bg-white border-2 border-black neo-shadow-lg z-50 flex flex-col"\r\n          >\r\n            <button\r\n              (click)="goToDashboard()"\r\n              class="text-left text-black font-headline font-bold uppercase px-4 py-3 hover:bg-primary border-b-2 border-black transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n            >\r\n              Dashboard\r\n            </button>\r\n            <button\r\n              (click)="logout()"\r\n              class="text-left text-black font-headline font-bold uppercase px-4 py-3 hover:bg-black hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n            >\r\n              Logout\r\n            </button>\r\n          </div>\r\n        }\r\n      </div>\r\n    } @else {\r\n      <a\r\n        routerLink="/login"\r\n        class="text-black font-headline font-bold uppercase hover:bg-black hover:text-white px-3 py-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n      >\r\n        Login\r\n      </a>\r\n    }\r\n  </nav>\r\n\r\n  <!-- Bot\xE3o Menu Mobile -->\r\n  <button\r\n    (click)="onToggleSidenav()"\r\n    class="lg:hidden p-2 bg-white border-2 border-black neo-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all outline-none focus-visible:ring-2 focus-visible:ring-black flex flex-col justify-center items-center gap-1 w-10 h-10"\r\n    aria-label="Abrir menu"\r\n  >\r\n    <span class="block w-5 h-0.5 bg-black"></span>\r\n    <span class="block w-5 h-0.5 bg-black"></span>\r\n    <span class="block w-5 h-0.5 bg-black"></span>\r\n  </button>\r\n</header>\r\n' }]
  }], () => [], { toggleSidenav: [{ type: Output, args: ["toggleSidenav"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "apps/web/src/app/components/header/header.component.ts", lineNumber: 13 });
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
function SidenavComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function SidenavComponent_Conditional_12_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(1, " Dashboard ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 11);
    \u0275\u0275listener("click", function SidenavComponent_Conditional_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(3, " Logout ");
    \u0275\u0275elementEnd();
  }
}
function SidenavComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function SidenavComponent_Conditional_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(1, " Login ");
    \u0275\u0275elementEnd();
  }
}
var SidenavComponent = class _SidenavComponent {
  isOpen = model(false, ...ngDevMode ? [{ debugName: "isOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  authService = inject(AuthService);
  router = inject(Router);
  isAuthenticated = this.authService.isAuthenticated;
  onClose() {
    this.isOpen.set(false);
  }
  async logout() {
    this.onClose();
    await this.authService.signOut();
    this.router.navigate(["/home"]);
  }
  static \u0275fac = function SidenavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidenavComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidenavComponent, selectors: [["app-sidenav"]], inputs: { isOpen: [1, "isOpen"] }, outputs: { isOpen: "isOpenChange" }, decls: 14, vars: 6, consts: [["aria-hidden", "true", 1, "fixed", "inset-0", "bg-black/50", "z-40", "transition-opacity", "lg:hidden"], [1, "fixed", "top-0", "left-0", "w-64", "h-full", "bg-secondary", "border-r-4", "border-black", "z-50", "transform", "transition-transform", "duration-300", "ease-in-out", "lg:hidden", "neo-shadow-lg"], [1, "flex", "items-center", "justify-between", "p-4", "border-b-4", "border-black", "bg-white"], [1, "text-xl", "font-headline", "font-black", "uppercase", "tracking-tighter", "text-black"], ["aria-label", "Fechar menu", 1, "p-2", "bg-primary", "border-2", "border-black", "neo-shadow-sm", "hover:translate-x-0.5", "hover:translate-y-0.5", "hover:shadow-none", "transition-all", "focus:outline-none", "focus-visible:ring-2", "focus-visible:ring-black", "w-8", "h-8", "flex", "items-center", "justify-center", "font-bold", 3, "click"], [1, "flex", "flex-col", "p-4", "gap-4"], ["routerLink", "/", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"], ["routerLink", "/sorteio", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"], ["routerLink", "/login", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none"], ["aria-hidden", "true", 1, "fixed", "inset-0", "bg-black/50", "z-40", "transition-opacity", "lg:hidden", 3, "click"], ["routerLink", "/dashboard", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"], [1, "text-left", "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-black", "hover:text-white", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"], ["routerLink", "/login", 1, "text-black", "font-headline", "font-bold", "uppercase", "border-2", "border-black", "bg-white", "py-3", "px-4", "hover:bg-primary", "hover:-translate-y-1", "neo-shadow-sm", "transition-all", "focus:outline-none", 3, "click"]], template: function SidenavComponent_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(12, SidenavComponent_Conditional_12_Template, 4, 0)(13, SidenavComponent_Conditional_13_Template, 2, 0, "a", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("-translate-x-full", !ctx.isOpen())("translate-x-0", ctx.isOpen());
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.isAuthenticated() ? 12 : 13);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidenavComponent, [{
    type: Component,
    args: [{ selector: "app-sidenav", standalone: true, imports: [RouterLink], template: '<!-- Backdrop Overlay (escurece o fundo e permite clicar para fechar) -->\r\n@if (isOpen()) {\r\n  <div\r\n    class="fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden"\r\n    (click)="onClose()"\r\n    aria-hidden="true"\r\n  ></div>\r\n}\r\n\r\n<!-- Menu Lateral (Drawer) -->\r\n<aside\r\n  class="fixed top-0 left-0 w-64 h-full bg-secondary border-r-4 border-black z-50 transform transition-transform duration-300 ease-in-out lg:hidden neo-shadow-lg"\r\n  [class.-translate-x-full]="!isOpen()"\r\n  [class.translate-x-0]="isOpen()"\r\n>\r\n  <div class="flex items-center justify-between p-4 border-b-4 border-black bg-white">\r\n    <span class="text-xl font-headline font-black uppercase tracking-tighter text-black">Menu</span>\r\n    <!-- Bot\xE3o Fechar -->\r\n    <button\r\n      (click)="onClose()"\r\n      class="p-2 bg-primary border-2 border-black neo-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black w-8 h-8 flex items-center justify-center font-bold"\r\n      aria-label="Fechar menu"\r\n    >\r\n      X\r\n    </button>\r\n  </div>\r\n\r\n  <nav class="flex flex-col p-4 gap-4">\r\n    <a\r\n      routerLink="/"\r\n      (click)="onClose()"\r\n      class="text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-primary hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n    >\r\n      In\xEDcio\r\n    </a>\r\n    <a\r\n      routerLink="/sorteio"\r\n      (click)="onClose()"\r\n      class="text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-primary hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n    >\r\n      Sorteio\r\n    </a>\r\n    @if (isAuthenticated()) {\r\n      <a\r\n        routerLink="/dashboard"\r\n        (click)="onClose()"\r\n        class="text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-primary hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n      >\r\n        Dashboard\r\n      </a>\r\n      <button\r\n        (click)="logout()"\r\n        class="text-left text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-black hover:text-white hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n      >\r\n        Logout\r\n      </button>\r\n    } @else {\r\n      <a\r\n        routerLink="/login"\r\n        (click)="onClose()"\r\n        class="text-black font-headline font-bold uppercase border-2 border-black bg-white py-3 px-4 hover:bg-primary hover:-translate-y-1 neo-shadow-sm transition-all focus:outline-none"\r\n      >\r\n        Login\r\n      </a>\r\n    }\r\n  </nav>\r\n</aside>\r\n' }]
  }], null, { isOpen: [{ type: Input, args: [{ isSignal: true, alias: "isOpen", required: false }] }, { type: Output, args: ["isOpenChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidenavComponent, { className: "SidenavComponent", filePath: "apps/web/src/app/components/sidenav/sidenav.component.ts", lineNumber: 11 });
})();

export {
  ParticipantService,
  HeaderComponent,
  SidenavComponent
};
//# sourceMappingURL=chunk-U4QV6FE4.js.map
