import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-CU26WE3Z.js";

// apps/web/src/app/core/services/toast.service.ts
var STORAGE_KEY = "pendingToast";
var ToastService = class _ToastService {
  toasts = signal([], ...ngDevMode ? [{ debugName: "toasts" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      sessionStorage.removeItem(STORAGE_KEY);
      try {
        const { message, type } = JSON.parse(stored);
        setTimeout(() => this.show(message, type), 100);
      } catch {
      }
    }
  }
  show(message, type = "info", duration = 4e3) {
    const id = crypto.randomUUID();
    this.toasts.update((t) => [...t, { id, message, type }]);
    setTimeout(() => this.dismiss(id), duration);
  }
  success(message) {
    this.show(message, "success");
  }
  error(message) {
    this.show(message, "error");
  }
  info(message) {
    this.show(message, "info");
  }
  showAfterReload(message, type = "info") {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ message, type }));
  }
  dismiss(id) {
    this.toasts.update((t) => t.filter((toast) => toast.id !== id));
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-YETSNVPI.js.map
