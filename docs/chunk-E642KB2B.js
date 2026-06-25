import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-S6SU5Y6X.js";

// apps/web/src/app/shared/pipes/brl-currency.pipe.ts
var BrlCurrencyPipe = class _BrlCurrencyPipe {
  formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
  });
  transform(value, showSymbol = true) {
    if (value == null)
      return "\u2014";
    const formatted = this.formatter.format(value);
    return showSymbol ? formatted : formatted.replace("R$\xA0", "").trim();
  }
  static \u0275fac = function BrlCurrencyPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrlCurrencyPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "brlCurrency", type: _BrlCurrencyPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrlCurrencyPipe, [{
    type: Pipe,
    args: [{
      name: "brlCurrency",
      pure: true
    }]
  }], null, null);
})();

export {
  BrlCurrencyPipe
};
//# sourceMappingURL=chunk-E642KB2B.js.map
