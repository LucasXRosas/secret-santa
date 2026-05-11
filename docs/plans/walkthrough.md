# Layout Principal e Navegação Responsiva

A arquitetura base da interface da sua aplicação foi implementada com sucesso, mantendo o estilo **Neo-Brutalista**. A seguir, um resumo das modificações e novas adições:

## Componentes Criados

1. **Cabeçalho (Header)**
   - O componente `app-header` agora abriga o logotipo do aplicativo ("Wish Draw").
   - Contém o botão "Hamburger" (`lg:hidden`) para acionar o menu lateral no mobile.
   - Apresenta os links de navegação alinhados horizontalmente (Home, Sorteio, Sobre) que aparecem apenas no Desktop (`hidden lg:flex`).

2. **Menu Lateral (Sidenav / Drawer)**
   - Um Drawer fixo e overlay responsivo foi implementado no componente `app-sidenav`.
   - Inclui um fundo opaco (backdrop) clicável para fechar o menu.
   - Somente visível em telas menores (mobile), sendo controlado pelo Angular via estado (`isSidenavOpen`).

3. **Rodapé (Footer)**
   - O componente `app-footer` exibe informações de copyright, além de links rápidos (Termos, Privacidade).

## Estrutura do Template e Sticky Footer

O template raiz em `app.html` foi reorganizado usando **Flexbox**. Para garantir o comportamento de "Sticky Footer" exigido, utilizamos:

```html
<div class="min-h-screen flex flex-col font-headline bg-background">
  <app-header ...></app-header>
  <app-sidenav ...></app-sidenav>

  <!-- O flex-1 garante que o conteúdo principal ocupe todo o espaço restante empurrando o footer para baixo -->
  <main class="flex-1 ...">
    ...
  </main>

  <app-footer></app-footer>
</div>
```

## Como Testar

Execute no seu terminal local:
```bash
npm run start
```
- Acesse `http://localhost:4200/`.
- No **Desktop**: Verifique se o rodapé fica cravado na parte inferior. O Menu Superior exibirá os links horizontalmente.
- No **Mobile**: Ao reduzir o tamanho da tela ou testar num aparelho, os links somem do cabeçalho, um ícone hambúrguer aparece, e ao ser clicado, o Sidenav desliza pela lateral perfeitamente.

> [!TIP]
> Todos os novos botões, sidebars e o cabeçalho possuem bordas grossas, `neo-shadows` e interações de *hover* alinhadas com o design *Neo-Fun* que você já tinha predefinido!
