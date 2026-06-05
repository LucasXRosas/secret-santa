import {
  FooterComponent,
  HeaderComponent,
  SidenavComponent
} from "./chunk-4J7WXTPV.js";
import {
  CommonModule,
  Component,
  RouterLink,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-PP7CZ2AI.js";

// apps/web/src/app/features/home/home.component.ts
var HomeComponent = class _HomeComponent {
  // Signal controlling sidenav visibility
  sidenavOpen = signal(false, ...ngDevMode ? [{ debugName: "sidenavOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  // Placeholder signal for welcome message
  welcomeMessage = signal("Bem\u2011vindo ao seu home!", ...ngDevMode ? [{ debugName: "welcomeMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  // Placeholder list of user's draws
  userDraws = signal([
    "Sorteio de Natal 2023",
    "Sorteio de Ano Novo 2024",
    "Sorteio de Ver\xE3o 2024"
  ], ...ngDevMode ? [{ debugName: "userDraws" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 91, vars: 1, consts: [[3, "closeSidenav", "isOpen"], [3, "toggleSidenav"], [1, "hero-section"], [1, "hero-content"], [1, "hero-badge"], [1, "hero-title"], [1, "hero-highlight"], [1, "hero-sub"], [1, "hero-actions"], ["routerLink", "/login", 1, "btn-primary"], ["href", "#processo", 1, "btn-outline"], [1, "hero-illustration"], [1, "gift-card", "gift-card--back"], [1, "gift-card", "gift-card--front"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.0", 1, "h-20", "w-20", "text-foreground"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4"], [1, "absolute", "-bottom-6", "-left-6", "w-20", "h-20", "bg-secondary", "border-4", "border-foreground", "neo-shadow", "rounded-full", "flex", "items-center", "justify-center", "rotate-12", "z-20"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "h-8", "w-8", "text-primary-foreground"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"], [1, "draw-label"], ["id", "processo", 1, "process-section"], [1, "process-header"], [1, "process-title"], [1, "process-badge"], [1, "process-grid"], [1, "process-card", "process-card--purple"], [1, "step-number"], [1, "step-icon"], ["width", "48", "height", "32", "viewBox", "0 0 48 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M25 15.9C25.9667 14.8333 26.7083 13.6167 27.225 12.25C27.7417 10.8833 28 9.46667 28 8C28 6.53333 27.7417 5.11667 27.225 3.75C26.7083 2.38333 25.9667 1.16667 25 0.1C27 0.366667 28.6667 1.25 30 2.75C31.3333 4.25 32 6 32 8C32 10 31.3333 11.75 30 13.25C28.6667 14.75 27 15.6333 25 15.9ZM36 32V26C36 24.8 35.7333 23.6583 35.2 22.575C34.6667 21.4917 33.9667 20.5333 33.1 19.7C34.8 20.3 36.375 21.075 37.825 22.025C39.275 22.975 40 24.3 40 26V32H36ZM40 18V14H36V10H40V6H44V10H48V14H44V18H40ZM16 16C13.8 16 11.9167 15.2167 10.35 13.65C8.78333 12.0833 8 10.2 8 8C8 5.8 8.78333 3.91667 10.35 2.35C11.9167 0.783333 13.8 0 16 0C18.2 0 20.0833 0.783333 21.65 2.35C23.2167 3.91667 24 5.8 24 8C24 10.2 23.2167 12.0833 21.65 13.65C20.0833 15.2167 18.2 16 16 16ZM0 32V26.4C0 25.2667 0.291667 24.225 0.875 23.275C1.45833 22.325 2.23333 21.6 3.2 21.1C5.26667 20.0667 7.36667 19.2917 9.5 18.775C11.6333 18.2583 13.8 18 16 18C18.2 18 20.3667 18.2583 22.5 18.775C24.6333 19.2917 26.7333 20.0667 28.8 21.1C29.7667 21.6 30.5417 22.325 31.125 23.275C31.7083 24.225 32 25.2667 32 26.4V32H0Z", "fill", "#2D2F2F"], [1, "process-card", "process-card--green"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M20 32V28H25.2L18.85 21.65L21.7 18.8L28 25.1V20H32V32H20ZM2.8 32L0 29.2L25.2 4H20V0H32V12H28V6.8L2.8 32ZM10.35 13.15L0 2.8L2.8 0L13.15 10.35L10.35 13.15Z", "fill", "#2D2F2F"], [1, "process-card", "process-card--yellow"], ["width", "44", "height", "41", "viewBox", "0 0 44 41", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 41L10 13L28 31L0 41ZM25.1 22.1L23 20L34.2 8.8C35.2667 7.73333 36.55 7.2 38.05 7.2C39.55 7.2 40.8333 7.73333 41.9 8.8L43.1 10L41 12.1L39.8 10.9C39.3333 10.4333 38.75 10.2 38.05 10.2C37.35 10.2 36.7667 10.4333 36.3 10.9L25.1 22.1ZM17.1 14.1L15 12L16.2 10.8C16.6667 10.3333 16.9 9.76667 16.9 9.1C16.9 8.43333 16.6667 7.86667 16.2 7.4L14.9 6.1L17 4L18.3 5.3C19.3667 6.36667 19.9 7.63333 19.9 9.1C19.9 10.5667 19.3667 11.8333 18.3 12.9L17.1 14.1ZM21.1 18.1L19 16L26.2 8.8C26.6667 8.33333 26.9 7.75 26.9 7.05C26.9 6.35 26.6667 5.76667 26.2 5.3L23 2.1L25.1 0L28.3 3.2C29.3667 4.26667 29.9 5.55 29.9 7.05C29.9 8.55 29.3667 9.83333 28.3 10.9L21.1 18.1ZM29.1 26.1L27 24L30.2 20.8C31.2667 19.7333 32.55 19.2 34.05 19.2C35.55 19.2 36.8333 19.7333 37.9 20.8L41.1 24L39 26.1L35.8 22.9C35.3333 22.4333 34.75 22.2 34.05 22.2C33.35 22.2 32.7667 22.4333 32.3 22.9L29.1 26.1Z", "fill", "#2D2F2F"], [1, "cta-section"], [1, "cta-badge"], [1, "cta-title"], [1, "cta-highlight"], [1, "cta-form"], ["type", "email", "placeholder", "SEU@EMAIL.COM", 1, "cta-input"], ["routerLink", "/login", 1, "btn-cta"], [1, "cta-sub"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-sidenav", 0);
      \u0275\u0275listener("closeSidenav", function HomeComponent_Template_app_sidenav_closeSidenav_0_listener() {
        return ctx.sidenavOpen.set(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1, "app-header", 1);
      \u0275\u0275listener("toggleSidenav", function HomeComponent_Template_app_header_toggleSidenav_1_listener() {
        return ctx.sidenavOpen.set(!ctx.sidenavOpen());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "section", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "100% GR\xC1TIS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7, " ORGANIZE UM");
      \u0275\u0275element(8, "br");
      \u0275\u0275text(9, " AMIGO");
      \u0275\u0275element(10, "br");
      \u0275\u0275text(11, " SECRETO");
      \u0275\u0275element(12, "br");
      \u0275\u0275elementStart(13, "span", 6);
      \u0275\u0275text(14, "R\xC1PIDO E PRATICO");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p", 7);
      \u0275\u0275text(16, " Crie um amigo secreto online em minutos.");
      \u0275\u0275element(17, "br");
      \u0275\u0275text(18, " Perfeito para amigos, colegas ou seu grupo de jogos.");
      \u0275\u0275element(19, "br");
      \u0275\u0275text(20, " Simples, r\xE1pido e sem complica\xE7\xE3o. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "a", 9);
      \u0275\u0275text(23, "COME\xC7AR TROCA \u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 10);
      \u0275\u0275text(25, "COMO FUNCIONA");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 11);
      \u0275\u0275element(27, "div", 12);
      \u0275\u0275elementStart(28, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 14);
      \u0275\u0275element(30, "path", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 17);
      \u0275\u0275element(33, "path", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "div", 19)(35, "strong");
      \u0275\u0275text(36, "SORTEIE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38, "Geometria minimalista para m\xE1xima alegria");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "section", 20)(40, "div", 21)(41, "h2", 22);
      \u0275\u0275text(42, "O PROCESSO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 23);
      \u0275\u0275text(44, "3 PASSOS SIMPLES");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 24)(46, "div", 25)(47, "div", 26);
      \u0275\u0275text(48, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "h3");
      \u0275\u0275text(50, "CRIE SEU GRUPO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "Crie um grupo de amigo secreto em segundos e gere um link para convidar todos os participantes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(54, "svg", 28);
      \u0275\u0275element(55, "path", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(56, "div", 30)(57, "div", 26);
      \u0275\u0275text(58, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h3");
      \u0275\u0275text(60, "CONVIDE SEUS AMIGOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p");
      \u0275\u0275text(62, "Envie o link para amigos, fam\xEDlia ou colegas de trabalho. Cada pessoa entra no grupo com apenas um clique.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 31);
      \u0275\u0275element(65, "path", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(66, "div", 33)(67, "div", 26);
      \u0275\u0275text(68, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "h3");
      \u0275\u0275text(70, "SORTEIO AUTOM\xC1TICO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p");
      \u0275\u0275text(72, "Nosso sistema faz o sorteio automaticamente e cada participante recebe seu amigo secreto de forma privada.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(74, "svg", 34);
      \u0275\u0275element(75, "path", 35);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(76, "section", 36)(77, "div", 37);
      \u0275\u0275text(78, "ACESSO BETA POR TEMPO LIMITADO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "h2", 38);
      \u0275\u0275text(80, " PRONTO PARA");
      \u0275\u0275element(81, "br");
      \u0275\u0275elementStart(82, "span", 39);
      \u0275\u0275text(83, "COME\xC7AR?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 40);
      \u0275\u0275element(85, "input", 41);
      \u0275\u0275elementStart(86, "a", 42);
      \u0275\u0275text(87, "CRIAR MEU AMIGO SECRETO");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "p", 43);
      \u0275\u0275text(89, "Crie seu primeiro amigo secreto agora e convide seus amigos em segundos.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(90, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275property("isOpen", ctx.sidenavOpen());
    }
  }, dependencies: [CommonModule, RouterLink, HeaderComponent, FooterComponent, SidenavComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.hero-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  min-height: 80vh;\n  padding: 5rem 6rem;\n  background-color: #f5f5f0;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 900px) {\n  .hero-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 3rem 1.5rem;\n    text-align: center;\n  }\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #A7FFB5;\n  border: 2px solid #000;\n  font-weight: 900;\n  font-size: 0.7rem;\n  letter-spacing: 0.1em;\n  padding: 4px 10px;\n  margin-bottom: 1.5rem;\n  text-transform: uppercase;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(2.5rem, 6vw, 4.5rem);\n  font-weight: 900;\n  line-height: 1.05;\n  letter-spacing: -0.02em;\n  color: #635389;\n  margin-bottom: 1.5rem;\n}\n.hero-highlight[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f5d400;\n  color: #1a1a2e;\n  padding: 0 0.2em;\n  box-shadow: 8px 8px 0 #1a1a2e;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #444;\n  line-height: 1.7;\n  max-width: 620px;\n  margin-bottom: 2rem;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: transparent;\n  color: #1a1a2e;\n  font-weight: 900;\n  font-size: 0.85rem;\n  letter-spacing: 0.05em;\n  padding: 0.8rem 1.6rem;\n  border: 2px solid #000;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n  box-shadow: 4px 4px 0 #FED709;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translate(-2px, -2px);\n  box-shadow: 6px 6px 0 #FED709;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #D7C3FF;\n  color: #1a1a2e;\n  font-weight: 900;\n  font-size: 0.85rem;\n  letter-spacing: 0.05em;\n  padding: 0.8rem 1.6rem;\n  border: 2px solid #000;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n  box-shadow: 4px 4px 0 #000;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  transform: translate(-2px, -2px);\n  box-shadow: 6px 6px 0 #000;\n}\n.hero-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 2px solid #000;\n  font-weight: 900;\n  font-size: 0.65rem;\n  letter-spacing: 0.08em;\n  padding: 4px 10px;\n  background: #f5d400;\n  text-transform: uppercase;\n}\n.hero-illustration[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 280px;\n  height: 280px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.gift-card[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 3px solid #000;\n  border-radius: 12px;\n}\n.gift-card--back[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: #D7C3FF;\n  transform: rotate(8deg);\n  top: 20px;\n  left: 40px;\n}\n.gift-card--front[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: #A7FFB5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(-4deg);\n  box-shadow: 6px 6px 0 #000;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n.gift-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n.draw-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -10px;\n  right: -10px;\n  background: #fff;\n  border: 2px solid #000;\n  padding: 8px 12px;\n  font-size: 0.7rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  max-width: 130px;\n  box-shadow: 3px 3px 0 #000;\n}\n.draw-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 400;\n  text-transform: none;\n  font-size: 0.6rem;\n  color: #555;\n  margin-top: 2px;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: rotate(-4deg) translateY(0);\n  }\n  50% {\n    transform: rotate(-4deg) translateY(-10px);\n  }\n}\n.process-section[_ngcontent-%COMP%] {\n  padding: 5rem 6rem;\n  background: #fff;\n  border-top: 4px solid #000;\n}\n@media (max-width: 900px) {\n  .process-section[_ngcontent-%COMP%] {\n    padding: 3rem 1.5rem;\n  }\n}\n.process-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2.5rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.process-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 900;\n  letter-spacing: -0.02em;\n  color: #1a1a2e;\n}\n.process-badge[_ngcontent-%COMP%] {\n  background: #1a1a2e;\n  border: 2px solid #000;\n  color: white;\n  font-weight: 900;\n  font-size: 0.7rem;\n  padding: 4px 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.process-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .process-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.process-card[_ngcontent-%COMP%] {\n  border: 3px solid #000;\n  padding: 2rem 1.5rem;\n  position: relative;\n  min-height: 220px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  box-shadow: 5px 5px 0 #000;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.process-card[_ngcontent-%COMP%]:hover {\n  transform: translate(-3px, -3px);\n  box-shadow: 8px 8px 0 #000;\n}\n.process-card--green[_ngcontent-%COMP%] {\n  background: #A7FFB4;\n}\n.process-card--yellow[_ngcontent-%COMP%] {\n  background: #FED709;\n}\n.process-card--purple[_ngcontent-%COMP%] {\n  background: #D7C3FF;\n}\n.step-number[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: inherit;\n  opacity: 0.25;\n  line-height: 1;\n}\n.process-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.process-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1.6;\n  opacity: 0.85;\n}\n.step-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin-top: auto;\n  opacity: 0.5;\n}\n.cta-section[_ngcontent-%COMP%] {\n  background: #1a1a2e;\n  border-top: 4px solid #000;\n  padding: 5rem 6rem;\n  text-align: center;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 3rem 1.5rem;\n  }\n}\n.cta-badge[_ngcontent-%COMP%] {\n  background: #A7FFB5;\n  color: #000;\n  font-weight: 900;\n  font-size: 0.65rem;\n  letter-spacing: 0.1em;\n  padding: 4px 12px;\n  border: 4px solid #000;\n  box-shadow: #000 3px 3px 0;\n  text-transform: uppercase;\n}\n.cta-title[_ngcontent-%COMP%] {\n  font-size: clamp(2.5rem, 7vw, 5rem);\n  font-weight: 900;\n  line-height: 1.05;\n  letter-spacing: -0.02em;\n}\n.cta-highlight[_ngcontent-%COMP%] {\n  color: #f5d400;\n}\n.cta-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n  max-width: 600px;\n}\n.cta-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n  padding: 0.9rem 1.2rem;\n  border: 2px solid #fff;\n  background: #fff;\n  color: #1a1a2e;\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  outline: none;\n  box-shadow: 4px 4px 0 #000;\n}\n.cta-input[_ngcontent-%COMP%]::placeholder {\n  color: #ACADB4;\n}\n.btn-cta[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #FFD708;\n  color: #000;\n  font-weight: 900;\n  font-size: 0.8rem;\n  letter-spacing: 0.05em;\n  padding: 0.9rem 1.6rem;\n  border: 2px solid #f5d400;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n  box-shadow: 4px 4px 0 #000;\n  white-space: nowrap;\n}\n.btn-cta[_ngcontent-%COMP%]:hover {\n  transform: translate(-2px, -2px);\n  box-shadow: 6px 6px 0 #000;\n}\n.cta-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #aaa;\n}\n.stats-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  border-top: 4px solid #000;\n}\n@media (max-width: 768px) {\n  .stats-section[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  border-right: 4px solid #000;\n  text-align: center;\n}\n.stat-card[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.stat-card--white[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.stat-card--purple[_ngcontent-%COMP%] {\n  background: #7c6fbf;\n  color: #fff;\n}\n.stat-card--green[_ngcontent-%COMP%] {\n  background: #a3e635;\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 900;\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  opacity: 0.7;\n  margin-top: 0.4rem;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent, SidenavComponent], template: '<app-sidenav [isOpen]="sidenavOpen()" (closeSidenav)="sidenavOpen.set(false)"></app-sidenav>\n<app-header (toggleSidenav)="sidenavOpen.set(!sidenavOpen())"></app-header>\n\n<!-- ===== HERO ===== -->\n<section class="hero-section">\n  <div class="hero-content">\n    <div class="hero-badge">100% GR\xC1TIS</div>\n\n    <h1 class="hero-title">\n      ORGANIZE UM<br>\n      AMIGO<br>\n      SECRETO<br>\n      <span class="hero-highlight">R\xC1PIDO E PRATICO</span>\n    </h1>\n\n    <p class="hero-sub">\n      Crie um amigo secreto online em minutos.<br>\n      Perfeito para amigos, colegas ou seu grupo de jogos.<br>\n      Simples, r\xE1pido e sem complica\xE7\xE3o.\n    </p>\n\n    <div class="hero-actions">\n      <a routerLink="/login" class="btn-primary">COME\xC7AR TROCA \u2192</a>\n      <a href="#processo" class="btn-outline">COMO FUNCIONA</a>\n    </div>\n\n  </div>\n\n  <div class="hero-illustration">\n    <div class="gift-card gift-card--back"></div>\n    <div class="gift-card gift-card--front">\n      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-foreground" fill="none" viewBox="0 0 24 24"\n        stroke="currentColor" stroke-width="2.0">\n        <path stroke-linecap="round" stroke-linejoin="round"\n          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />\n      </svg>\n      <div\n        class="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary border-4 border-foreground neo-shadow rounded-full flex items-center justify-center rotate-12 z-20">\n         <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">\n          <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />\n        </svg>\n      </div>\n      <div class="draw-label">\n        <strong>SORTEIE</strong>\n        <span>Geometria minimalista para m\xE1xima alegria</span>\n      </div>\n    </div>\n\n  </div>\n</section>\n\n<!-- ===== O PROCESSO ===== -->\n<section id="processo" class="process-section">\n  <div class="process-header">\n    <h2 class="process-title">O PROCESSO</h2>\n    <span class="process-badge">3 PASSOS SIMPLES</span>\n  </div>\n\n  <div class="process-grid">\n    <div class="process-card process-card--purple">\n      <div class="step-number">01</div>\n      <h3>CRIE SEU GRUPO</h3>\n      <p>Crie um grupo de amigo secreto em segundos e gere um link para convidar todos os participantes.</p>\n      <div class="step-icon"><svg width="48" height="32" viewBox="0 0 48 32" fill="none"\n          xmlns="http://www.w3.org/2000/svg">\n\n          <path\n            d="M25 15.9C25.9667 14.8333 26.7083 13.6167 27.225 12.25C27.7417 10.8833 28 9.46667 28 8C28 6.53333 27.7417 5.11667 27.225 3.75C26.7083 2.38333 25.9667 1.16667 25 0.1C27 0.366667 28.6667 1.25 30 2.75C31.3333 4.25 32 6 32 8C32 10 31.3333 11.75 30 13.25C28.6667 14.75 27 15.6333 25 15.9ZM36 32V26C36 24.8 35.7333 23.6583 35.2 22.575C34.6667 21.4917 33.9667 20.5333 33.1 19.7C34.8 20.3 36.375 21.075 37.825 22.025C39.275 22.975 40 24.3 40 26V32H36ZM40 18V14H36V10H40V6H44V10H48V14H44V18H40ZM16 16C13.8 16 11.9167 15.2167 10.35 13.65C8.78333 12.0833 8 10.2 8 8C8 5.8 8.78333 3.91667 10.35 2.35C11.9167 0.783333 13.8 0 16 0C18.2 0 20.0833 0.783333 21.65 2.35C23.2167 3.91667 24 5.8 24 8C24 10.2 23.2167 12.0833 21.65 13.65C20.0833 15.2167 18.2 16 16 16ZM0 32V26.4C0 25.2667 0.291667 24.225 0.875 23.275C1.45833 22.325 2.23333 21.6 3.2 21.1C5.26667 20.0667 7.36667 19.2917 9.5 18.775C11.6333 18.2583 13.8 18 16 18C18.2 18 20.3667 18.2583 22.5 18.775C24.6333 19.2917 26.7333 20.0667 28.8 21.1C29.7667 21.6 30.5417 22.325 31.125 23.275C31.7083 24.225 32 25.2667 32 26.4V32H0Z"\n            fill="#2D2F2F" />\n\n        </svg>\n      </div>\n    </div>\n\n    <div class="process-card process-card--green">\n      <div class="step-number">02</div>\n      <h3>CONVIDE SEUS AMIGOS</h3>\n      <p>Envie o link para amigos, fam\xEDlia ou colegas de trabalho. Cada pessoa entra no grupo com apenas um clique.</p>\n      <div class="step-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"\n          xmlns="http://www.w3.org/2000/svg">\n          <path\n            d="M20 32V28H25.2L18.85 21.65L21.7 18.8L28 25.1V20H32V32H20ZM2.8 32L0 29.2L25.2 4H20V0H32V12H28V6.8L2.8 32ZM10.35 13.15L0 2.8L2.8 0L13.15 10.35L10.35 13.15Z"\n            fill="#2D2F2F" />\n        </svg>\n      </div>\n    </div>\n\n    <div class="process-card process-card--yellow">\n      <div class="step-number">03</div>\n      <h3>SORTEIO AUTOM\xC1TICO</h3>\n      <p>Nosso sistema faz o sorteio automaticamente e cada participante recebe seu amigo secreto de forma privada.</p>\n      <div class="step-icon"><svg width="44" height="41" viewBox="0 0 44 41" fill="none"\n          xmlns="http://www.w3.org/2000/svg">\n          <path\n            d="M0 41L10 13L28 31L0 41ZM25.1 22.1L23 20L34.2 8.8C35.2667 7.73333 36.55 7.2 38.05 7.2C39.55 7.2 40.8333 7.73333 41.9 8.8L43.1 10L41 12.1L39.8 10.9C39.3333 10.4333 38.75 10.2 38.05 10.2C37.35 10.2 36.7667 10.4333 36.3 10.9L25.1 22.1ZM17.1 14.1L15 12L16.2 10.8C16.6667 10.3333 16.9 9.76667 16.9 9.1C16.9 8.43333 16.6667 7.86667 16.2 7.4L14.9 6.1L17 4L18.3 5.3C19.3667 6.36667 19.9 7.63333 19.9 9.1C19.9 10.5667 19.3667 11.8333 18.3 12.9L17.1 14.1ZM21.1 18.1L19 16L26.2 8.8C26.6667 8.33333 26.9 7.75 26.9 7.05C26.9 6.35 26.6667 5.76667 26.2 5.3L23 2.1L25.1 0L28.3 3.2C29.3667 4.26667 29.9 5.55 29.9 7.05C29.9 8.55 29.3667 9.83333 28.3 10.9L21.1 18.1ZM29.1 26.1L27 24L30.2 20.8C31.2667 19.7333 32.55 19.2 34.05 19.2C35.55 19.2 36.8333 19.7333 37.9 20.8L41.1 24L39 26.1L35.8 22.9C35.3333 22.4333 34.75 22.2 34.05 22.2C33.35 22.2 32.7667 22.4333 32.3 22.9L29.1 26.1Z"\n            fill="#2D2F2F" />\n        </svg>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- ===== CTA ===== -->\n<section class="cta-section">\n  <div class="cta-badge">ACESSO BETA POR TEMPO LIMITADO</div>\n  <h2 class="cta-title">\n    PRONTO PARA<br>\n    <span class="cta-highlight">COME\xC7AR?</span>\n  </h2>\n\n  <div class="cta-form">\n    <input type="email" placeholder="SEU@EMAIL.COM" class="cta-input" />\n    <a routerLink="/login" class="btn-cta">CRIAR MEU AMIGO SECRETO</a>\n  </div>\n\n  <p class="cta-sub">Crie seu primeiro amigo secreto agora e convide seus amigos em segundos.</p>\n</section>\n\n<app-footer></app-footer>', styles: ["/* apps/web/src/app/features/home/home.component.css */\n:host {\n  display: block;\n}\n.hero-section {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  min-height: 80vh;\n  padding: 5rem 6rem;\n  background-color: #f5f5f0;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 900px) {\n  .hero-section {\n    flex-direction: column;\n    padding: 3rem 1.5rem;\n    text-align: center;\n  }\n}\n.hero-badge {\n  display: inline-block;\n  background: #A7FFB5;\n  border: 2px solid #000;\n  font-weight: 900;\n  font-size: 0.7rem;\n  letter-spacing: 0.1em;\n  padding: 4px 10px;\n  margin-bottom: 1.5rem;\n  text-transform: uppercase;\n}\n.hero-title {\n  font-size: clamp(2.5rem, 6vw, 4.5rem);\n  font-weight: 900;\n  line-height: 1.05;\n  letter-spacing: -0.02em;\n  color: #635389;\n  margin-bottom: 1.5rem;\n}\n.hero-highlight {\n  display: inline-block;\n  background: #f5d400;\n  color: #1a1a2e;\n  padding: 0 0.2em;\n  box-shadow: 8px 8px 0 #1a1a2e;\n}\n.hero-sub {\n  font-size: 1rem;\n  color: #444;\n  line-height: 1.7;\n  max-width: 620px;\n  margin-bottom: 2rem;\n}\n.hero-actions {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.5rem;\n}\n.btn-primary {\n  display: inline-block;\n  background: transparent;\n  color: #1a1a2e;\n  font-weight: 900;\n  font-size: 0.85rem;\n  letter-spacing: 0.05em;\n  padding: 0.8rem 1.6rem;\n  border: 2px solid #000;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n  box-shadow: 4px 4px 0 #FED709;\n}\n.btn-primary:hover {\n  transform: translate(-2px, -2px);\n  box-shadow: 6px 6px 0 #FED709;\n}\n.btn-outline {\n  display: inline-block;\n  background: #D7C3FF;\n  color: #1a1a2e;\n  font-weight: 900;\n  font-size: 0.85rem;\n  letter-spacing: 0.05em;\n  padding: 0.8rem 1.6rem;\n  border: 2px solid #000;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n  box-shadow: 4px 4px 0 #000;\n}\n.btn-outline:hover {\n  transform: translate(-2px, -2px);\n  box-shadow: 6px 6px 0 #000;\n}\n.hero-tag {\n  display: inline-block;\n  border: 2px solid #000;\n  font-weight: 900;\n  font-size: 0.65rem;\n  letter-spacing: 0.08em;\n  padding: 4px 10px;\n  background: #f5d400;\n  text-transform: uppercase;\n}\n.hero-illustration {\n  position: relative;\n  flex-shrink: 0;\n  width: 280px;\n  height: 280px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.gift-card {\n  position: absolute;\n  border: 3px solid #000;\n  border-radius: 12px;\n}\n.gift-card--back {\n  width: 300px;\n  height: 300px;\n  background: #D7C3FF;\n  transform: rotate(8deg);\n  top: 20px;\n  left: 40px;\n}\n.gift-card--front {\n  width: 300px;\n  height: 300px;\n  background: #A7FFB5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(-4deg);\n  box-shadow: 6px 6px 0 #000;\n  animation: float 3s ease-in-out infinite;\n}\n.gift-icon {\n  font-size: 4rem;\n}\n.draw-label {\n  position: absolute;\n  bottom: -10px;\n  right: -10px;\n  background: #fff;\n  border: 2px solid #000;\n  padding: 8px 12px;\n  font-size: 0.7rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  max-width: 130px;\n  box-shadow: 3px 3px 0 #000;\n}\n.draw-label span {\n  display: block;\n  font-weight: 400;\n  text-transform: none;\n  font-size: 0.6rem;\n  color: #555;\n  margin-top: 2px;\n}\n@keyframes float {\n  0%, 100% {\n    transform: rotate(-4deg) translateY(0);\n  }\n  50% {\n    transform: rotate(-4deg) translateY(-10px);\n  }\n}\n.process-section {\n  padding: 5rem 6rem;\n  background: #fff;\n  border-top: 4px solid #000;\n}\n@media (max-width: 900px) {\n  .process-section {\n    padding: 3rem 1.5rem;\n  }\n}\n.process-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2.5rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.process-title {\n  font-size: 2.5rem;\n  font-weight: 900;\n  letter-spacing: -0.02em;\n  color: #1a1a2e;\n}\n.process-badge {\n  background: #1a1a2e;\n  border: 2px solid #000;\n  color: white;\n  font-weight: 900;\n  font-size: 0.7rem;\n  padding: 4px 10px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.process-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .process-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.process-card {\n  border: 3px solid #000;\n  padding: 2rem 1.5rem;\n  position: relative;\n  min-height: 220px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  box-shadow: 5px 5px 0 #000;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.process-card:hover {\n  transform: translate(-3px, -3px);\n  box-shadow: 8px 8px 0 #000;\n}\n.process-card--green {\n  background: #A7FFB4;\n}\n.process-card--yellow {\n  background: #FED709;\n}\n.process-card--purple {\n  background: #D7C3FF;\n}\n.step-number {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: inherit;\n  opacity: 0.25;\n  line-height: 1;\n}\n.process-card h3 {\n  font-size: 1rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.process-card p {\n  font-size: 0.85rem;\n  line-height: 1.6;\n  opacity: 0.85;\n}\n.step-icon {\n  font-size: 1.8rem;\n  margin-top: auto;\n  opacity: 0.5;\n}\n.cta-section {\n  background: #1a1a2e;\n  border-top: 4px solid #000;\n  padding: 5rem 6rem;\n  text-align: center;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .cta-section {\n    padding: 3rem 1.5rem;\n  }\n}\n.cta-badge {\n  background: #A7FFB5;\n  color: #000;\n  font-weight: 900;\n  font-size: 0.65rem;\n  letter-spacing: 0.1em;\n  padding: 4px 12px;\n  border: 4px solid #000;\n  box-shadow: #000 3px 3px 0;\n  text-transform: uppercase;\n}\n.cta-title {\n  font-size: clamp(2.5rem, 7vw, 5rem);\n  font-weight: 900;\n  line-height: 1.05;\n  letter-spacing: -0.02em;\n}\n.cta-highlight {\n  color: #f5d400;\n}\n.cta-form {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n  max-width: 600px;\n}\n.cta-input {\n  flex: 1;\n  min-width: 220px;\n  padding: 0.9rem 1.2rem;\n  border: 2px solid #fff;\n  background: #fff;\n  color: #1a1a2e;\n  font-size: 0.85rem;\n  letter-spacing: 0.08em;\n  outline: none;\n  box-shadow: 4px 4px 0 #000;\n}\n.cta-input::placeholder {\n  color: #ACADB4;\n}\n.btn-cta {\n  display: inline-block;\n  background: #FFD708;\n  color: #000;\n  font-weight: 900;\n  font-size: 0.8rem;\n  letter-spacing: 0.05em;\n  padding: 0.9rem 1.6rem;\n  border: 2px solid #f5d400;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n  box-shadow: 4px 4px 0 #000;\n  white-space: nowrap;\n}\n.btn-cta:hover {\n  transform: translate(-2px, -2px);\n  box-shadow: 6px 6px 0 #000;\n}\n.cta-sub {\n  font-size: 0.8rem;\n  color: #aaa;\n}\n.stats-section {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  border-top: 4px solid #000;\n}\n@media (max-width: 768px) {\n  .stats-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  border-right: 4px solid #000;\n  text-align: center;\n}\n.stat-card:last-child {\n  border-right: none;\n}\n.stat-card--white {\n  background: #fff;\n}\n.stat-card--purple {\n  background: #7c6fbf;\n  color: #fff;\n}\n.stat-card--green {\n  background: #a3e635;\n}\n.stat-number {\n  font-size: 2.5rem;\n  font-weight: 900;\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n.stat-label {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  opacity: 0.7;\n  margin-top: 0.4rem;\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "apps/web/src/app/features/home/home.component.ts", lineNumber: 15 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-LMARA2L6.js.map
