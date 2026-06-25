import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-S6SU5Y6X.js";

// apps/web/src/app/shared/pipes/relative-date.pipe.ts
var RelativeDatePipe = class _RelativeDatePipe {
  rtf = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });
  transform(value) {
    if (!value)
      return "\u2014";
    const date = /* @__PURE__ */ new Date(value + "T00:00:00");
    if (isNaN(date.getTime()))
      return value;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const diffMs = date.getTime() - today.getTime();
    const diffDays = Math.round(diffMs / (1e3 * 60 * 60 * 24));
    if (Math.abs(diffDays) < 30) {
      return this.rtf.format(diffDays, "day");
    }
    return date.toLocaleDateString("pt-BR");
  }
  static \u0275fac = function RelativeDatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RelativeDatePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "relativeDate", type: _RelativeDatePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RelativeDatePipe, [{
    type: Pipe,
    args: [{
      name: "relativeDate",
      pure: true
    }]
  }], null, null);
})();

export {
  RelativeDatePipe
};
//# sourceMappingURL=chunk-XUCKCSJZ.js.map
