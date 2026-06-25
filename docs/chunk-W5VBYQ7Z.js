import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-S6SU5Y6X.js";

// apps/web/src/app/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "w-full", "bg-accent", "border-t-4", "border-black", "px-6", "py-8", "flex", "flex-col", "md:flex-row", "items-center", "justify-between", "gap-4", "mt-auto"], [1, "font-headline", "font-bold", "text-black", "text-center", "md:text-left"], [1, "uppercase"], [1, "text-sm"], [1, "flex", "gap-4"], ["href", "#", 1, "text-black", "font-headline", "font-bold", "uppercase", "hover:underline", "outline-none", "focus-visible:ring-2", "focus-visible:ring-black"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "footer", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3, "\xA9 2026 Wish Draw");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p", 3);
      \u0275\u0275text(5, "Sorteio de Amigo Secreto com estilo!");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 4)(7, "a", 5);
      \u0275\u0275text(8, " Termos ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "a", 5);
      \u0275\u0275text(10, " Privacidade ");
      \u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, template: '<footer\r\n  class="w-full bg-accent border-t-4 border-black px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-auto"\r\n>\r\n  <div class="font-headline font-bold text-black text-center md:text-left">\r\n    <p class="uppercase">\xA9 2026 Wish Draw</p>\r\n    <p class="text-sm">Sorteio de Amigo Secreto com estilo!</p>\r\n  </div>\r\n\r\n  <div class="flex gap-4">\r\n    <a\r\n      href="#"\r\n      class="text-black font-headline font-bold uppercase hover:underline outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n    >\r\n      Termos\r\n    </a>\r\n    <a\r\n      href="#"\r\n      class="text-black font-headline font-bold uppercase hover:underline outline-none focus-visible:ring-2 focus-visible:ring-black"\r\n    >\r\n      Privacidade\r\n    </a>\r\n  </div>\r\n</footer>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "apps/web/src/app/components/footer/footer.component.ts", lineNumber: 8 });
})();

export {
  FooterComponent
};
//# sourceMappingURL=chunk-W5VBYQ7Z.js.map
