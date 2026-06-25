import {
  AuthService,
  HttpClient,
  environment
} from "./chunk-UW2S6YIE.js";
import {
  Injectable,
  __spreadValues,
  firstValueFrom,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-S6SU5Y6X.js";

// apps/web/src/app/core/services/event.service.ts
var EventService = class _EventService {
  authService = inject(AuthService);
  /** [ID23] HttpClient permite que os Functional Interceptors (auth + error) atuem nas requisições. */
  http = inject(HttpClient);
  /** Base do PostgREST: https://<projeto>.supabase.co/rest/v1 */
  baseUrl = `${environment.supabaseUrl}/rest/v1`;
  /**
   * Headers exigidos pelo PostgREST:
   * - apikey: a anon key do projeto (identifica a aplicação).
   * - Authorization: Bearer <JWT do usuário> para que o RLS reconheça quem está logado.
   * - Content-Type: JSON nas escritas.
   */
  async buildHeaders(extra = {}) {
    const token = await this.authService.getAccessToken();
    return __spreadValues({
      apikey: environment.supabaseKey,
      Authorization: `Bearer ${token ?? environment.supabaseKey}`,
      "Content-Type": "application/json"
    }, extra);
  }
  /** Busca um único evento pelo id (respeitando o RLS do usuário logado). */
  async getEvent(id) {
    const res = await fetch(`${this.baseUrl}/events?id=eq.${id}&select=*`, { headers: await this.buildHeaders() });
    if (!res.ok) {
      throw new Error(`Erro ao buscar evento: ${res.status} ${res.statusText}`);
    }
    const rows = await res.json();
    return rows[0] ?? null;
  }
  /**
   * Lista os eventos do usuário logado, dos mais recentes para os mais antigos.
   * [ID23] Usa HttpClient para que o authInterceptor injete o Bearer token automaticamente
   * e o errorInterceptor trate erros 401/403/500 de forma centralizada.
   */
  async listMyEvents() {
    return firstValueFrom(this.http.get(`${this.baseUrl}/events?select=*&order=created_at.desc`, { headers: { apikey: environment.supabaseKey } }));
  }
  /** Cria um novo evento para o usuário logado. */
  async createEvent(event) {
    const user = this.authService.currentUser();
    if (!user) {
      throw new Error("\xC9 preciso estar logado para criar um evento.");
    }
    const res = await fetch(`${this.baseUrl}/events`, {
      method: "POST",
      // Prefer: return=representation faz o PostgREST devolver a linha criada.
      headers: await this.buildHeaders({ Prefer: "return=representation" }),
      body: JSON.stringify({
        owner_id: user.id,
        name: event.name,
        budget: event.budget ?? null,
        draw_date: event.draw_date ?? null,
        organizer_name: event.organizer_name?.trim() || null,
        location: event.location?.trim() || null
      })
    });
    if (!res.ok) {
      throw new Error(`Erro ao criar evento: ${res.status} ${res.statusText}`);
    }
    const rows = await res.json();
    return rows[0];
  }
  /** Atualiza um evento existente. */
  async updateEvent(id, event) {
    const body = {};
    if (event.name !== void 0)
      body["name"] = event.name;
    if (event.budget !== void 0)
      body["budget"] = event.budget ?? null;
    if (event.draw_date !== void 0)
      body["draw_date"] = event.draw_date ?? null;
    if (event.organizer_name !== void 0)
      body["organizer_name"] = event.organizer_name?.trim() || null;
    if (event.location !== void 0)
      body["location"] = event.location?.trim() || null;
    const res = await fetch(`${this.baseUrl}/events?id=eq.${id}`, {
      method: "PATCH",
      headers: await this.buildHeaders({ Prefer: "return=representation" }),
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      throw new Error(`Erro ao atualizar evento: ${res.status} ${res.statusText}`);
    }
    const rows = await res.json();
    return rows[0];
  }
  /** Exclui um evento existente. */
  async deleteEvent(id) {
    const res = await fetch(`${this.baseUrl}/events?id=eq.${id}`, {
      method: "DELETE",
      headers: await this.buildHeaders()
    });
    if (!res.ok) {
      throw new Error(`Erro ao excluir evento: ${res.status} ${res.statusText}`);
    }
  }
  static \u0275fac = function EventService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventService, factory: _EventService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  EventService
};
//# sourceMappingURL=chunk-3UQHFIVU.js.map
