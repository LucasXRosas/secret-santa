import {
  AuthService,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-GQUNLRQT.js";

// apps/web/src/app/core/services/event.service.ts
var EventService = class _EventService {
  authService = inject(AuthService);
  /** Garante que o Supabase está configurado antes de qualquer query. */
  getClient() {
    const client = this.authService.client;
    if (!client) {
      throw new Error("Supabase n\xE3o configurado. Verifique o environment.");
    }
    return client;
  }
  /** Busca um único evento pelo id (respeitando o RLS do usuário logado). */
  async getEvent(id) {
    const { data, error } = await this.getClient().from("events").select("*").eq("id", id).maybeSingle();
    if (error)
      throw error;
    return data ?? null;
  }
  /** Lista os eventos do usuário logado, dos mais recentes para os mais antigos. */
  async listMyEvents() {
    const { data, error } = await this.getClient().from("events").select("*").order("created_at", { ascending: false });
    if (error)
      throw error;
    return data ?? [];
  }
  /** Cria um novo evento para o usuário logado. */
  async createEvent(event) {
    const user = this.authService.currentUser();
    if (!user) {
      throw new Error("\xC9 preciso estar logado para criar um evento.");
    }
    const { data, error } = await this.getClient().from("events").insert({
      owner_id: user.id,
      name: event.name,
      budget: event.budget ?? null,
      draw_date: event.draw_date ?? null
    }).select().single();
    if (error)
      throw error;
    return data;
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
//# sourceMappingURL=chunk-UUE54GPX.js.map
