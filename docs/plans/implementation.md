# Estrutura do Layout Principal e Navegação Responsiva

Este documento descreve a abordagem para criar o layout base do projeto, incluindo um cabeçalho (*header*), menu lateral (*sidenav/drawer*) para mobile, rodapé (*footer*) e uma área principal de conteúdo, assegurando responsividade e que o rodapé fique fixo no fundo da página (Sticky Footer).

## User Review Required

> [!IMPORTANT]
> A biblioteca Spartan.ng ainda não possui nenhum componente instalado no seu projeto (a pasta `libs/ui` não existe). Para implementar o Menu Lateral (Drawer/Sheet), eu posso optar por duas abordagens:
> 1. **Usar apenas Tailwind CSS e Angular:** Criar um componente do zero (que abre e fecha com uma animação simples usando Tailwind) — é mais leve e temos total controle sobre o visual Neo-Brutalista do projeto.
> 2. **Instalar o componente Sheet do Spartan.ng:** Rodar o comando do Spartan para instalar o componente na pasta `libs` e utilizá-lo.
> 
> **A abordagem sugerida e que será seguida caso aprovado é a Opção 1**, pois garante que o design Neo-Brutalista que já existe no seu `app.html` seja mais fácil de aplicar sem as formatações padrão do Spartan/Radix, e evita possíveis problemas de configuração na instalação dos componentes via CLI no projeto atual.

## Open Questions

- A Opção 1 (usar Tailwind + Angular para o Sidenav ao invés de instalar novos pacotes do Spartan) é aceitável para você?
- Quais links padrão devemos colocar na barra de navegação por enquanto? (ex: Home, Sobre, Contato)

## Proposed Changes

---

### App Layout (app.ts & app.html)

Atualizaremos o template raiz para utilizar uma estrutura de Flexbox, garantindo o "Sticky Footer". O contêiner principal ocupará o espaço central, enquanto o cabeçalho e o rodapé ficarão nas extremidades.

#### [MODIFY] [app.ts](file:///home/lucasxrosas/Documents/UTFPR/FRAMEWORK/project/secret-santa/src/app/app.ts)
- Importar os novos componentes (`HeaderComponent`, `SidenavComponent`, `FooterComponent`).

#### [MODIFY] [app.html](file:///home/lucasxrosas/Documents/UTFPR/FRAMEWORK/project/secret-santa/src/app/app.html)
- Estruturar com Flexbox (`min-h-screen flex flex-col`).
- Renderizar `<app-header>`, `<app-sidenav>`, `<main class="flex-1">` e `<app-footer>`.
- Controlar o estado de abertura/fechamento do sidenav através de variáveis/eventos ou utilizando um *Signal* no `app.ts`.

---

### Componentes Core

Criaremos 3 novos componentes standalone em `src/app/components/`.

#### [NEW] src/app/components/header/header.component.ts
- Um *Header* horizontal.
- Conterá a Logo/Nome do projeto ("Wish Draw").
- **Desktop (`Opção A`):** Links principais alinhados horizontalmente (`hidden lg:flex`).
- **Mobile:** Botão de hambúrguer (☰) visível apenas no mobile (`lg:hidden`), que ao ser clicado emitirá um evento para abrir o `Sidenav`.
- Aplicar estilos Neo-Brutalistas (bordas grossas, fundo branco ou cores da paleta, sombra sólida).

#### [NEW] src/app/components/sidenav/sidenav.component.ts
- Um Drawer lateral (posicionado de forma fixa, cobrindo parte da tela).
- **Mobile:** Visível apenas quando acionado (controlado por um `@Input()` ou Signal).
- Um fundo escuro (*backdrop*) para fechar o menu ao clicar fora.
- Uma lista vertical com os links de navegação.

#### [NEW] src/app/components/footer/footer.component.ts
- Rodapé simples com copyright e links úteis.
- Estilizado de forma Neo-Brutalista para fechar o design da página com consistência.

## Verification Plan

### Manual Verification
- Iniciaremos o projeto com `npm run start`.
- Verificaremos visualmente o "Sticky Footer" injetando pouco ou muito conteúdo na tag `<main>` para ver se o rodapé se mantém no fundo da página quando há pouco conteúdo, e se é empurrado para baixo com rolagem quando há muito.
- Testaremos a responsividade simulando o tamanho da tela de um celular (DevTools) para confirmar se os links do Desktop somem e o botão Hambúrguer aparece, e se, ao clicar, o menu lateral abre e fecha corretamente.
