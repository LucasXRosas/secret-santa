# 🛠️ Software Design Document (SDD)

**Projeto:** [WishDraw]
**Versão:** 1.0.0
**Status:** 🟢 Em Desenvolvimento.

## 🤖 1. Orquestração e Contexto de IA (MCP)
> Configuração dos servidores Model Context Protocol para a IDE Agêntica.

* **Figma/Stitch MCP:** `[Figma: https://www.figma.com/design/XAi2US0lA1xmbCKOxtJYRX/Design-System?node-id=0-1&p=f&t=m8Z71Zq2ByPqE4mp-0][Stitch: https://stitch.withgoogle.com/projects/15210602872070593752?pli=1]` (Ler design tokens, cores e hierarquia visual).
* **Supabase MCP:** Contexto do banco de dados real e políticas de RLS.
* **GitHub MCP:** Leitura das Issues do Kanban para orientar a implementação (Spec-Driven).

## 📦 2. Stack Tecnológica e Bibliotecas
> Definição estrita das tecnologias permitidas (package.json). Nenhuma dependência externa deve ser instalada sem refletir aqui.

* **Core:** Angular 21+ (Standalone / Signals).
* **BaaS & Auth:** Supabase-js.
* **Estilização & UI:** Tailwind V4, Spartan UI (HLM), Lucide Angular (Ícones).
* **Utilitários:** [Ex: date-fns para datas, zod para schemas].

## 🗄️ 3. Arquitetura de Dados

### 📖 3.1. Glossário Técnico (Mapeamento)
| Termo PRD (PT-BR) | Entidade Técnica (EN) | Atributos Principais                         |
| :---------------- | :-------------------- | :------------------------------------------- |
| Usuário           | `user`                | `id`, `email`, `name`, `avatar_url`          |
| Grupo             | `group`               | `id`, `name`, `owner_id`, `created_at`       |
| Participante      | `group_member`        | `id`, `group_id`, `user_id`, `role`          |
| Sorteio           | `draw`                | `id`, `group_id`, `created_at`, `status`     |
| Resultado         | `draw_result`         | `id`, `draw_id`, `giver_id`, `receiver_id`   |
| Lista de Desejos  | `wishlist`            | `id`, `user_id`, `group_id`                  |
| Item de Desejo    | `wishlist_item`       | `id`, `wishlist_id`, `title`, `url`, `notes` |
| Restrição         | `draw_restriction`    | `id`, `group_id`, `user_a`, `user_b`         |


### 📊 3.2. Diagrama ER (Mermaid)
> <img width="6069" height="6665" alt="mermaid" src="https://github.com/user-attachments/assets/7cbbccb2-c11d-49c8-9194-0e9977f49417" />

## 🚀 4. Módulos do Negócio (Features)
> Definição das funcionalidades principais do sistema.

* **Autenticação & Perfil:** Cadastro, login e gestão de perfil do usuário.
* **Dashboard de Sorteios:** Visualização de todos os grupos/sorteios que o usuário participa ou administra.
* **Gerenciamento de Sorteio (Admin):** Criação de sorteios, definição de regras, datas e convite de membros.
* **Painel do Sorteio (Individual):** Visualização do "Amigo Secreto" sorteado, status do evento e interações.
* **Lista de Desejos (Wishlist):** Gestão de itens de presente do próprio usuário e visualização da lista do amigo sorteado.

## 📑 5. Contratos Globais (Interfaces & Types)
> Tipagem TypeScript baseada no banco de dados.

> [Interfaces TypeScript globais serão inseridas aqui]

## 🏗️ 6. Scaffolding Macro (Arquitetura Frontend)

### 📂 6.1. Estrutura de Pastas Base
* **`src/app/core/`**: Services globais singleton, Interceptors, Functional Guards.
* **`src/app/features/`**: Smart Components (Páginas) que gerenciam rotas e consomem services.
* **`src/app/shared/`**: UI Components (Dumb), pipes e diretivas puros e reutilizáveis.

### 🚦 6.2. Mapa de Rotas e Páginas (Features)
| Rota | Page Component | Responsabilidade |
| :--- | :--- | :--- |
| `/login` | `src/app/features/login/login.page.ts` | Autenticação do usuário. |
| `/dashboard` | `src/app/features/dashboard/dashboard.page.ts` | Lista de todos os sorteios (Dashboard Geral). |
| `/draw/create` | `src/app/features/draw/create/create.page.ts` | Formulário de criação de novo sorteio. |
| `/draw/:id` | `src/app/features/draw/details/details.page.ts` | Dashboard do sorteio X (específico). |
| `/draw/:id/invite` | `src/app/features/draw/invite/invite.page.ts` | Convidar pessoas para o sorteio. |
| `/wishlist` | `src/app/features/wishlist/wishlist.page.ts` | Ver e editar minha lista de presentes. |
| `/wishlist/:user_id` | `src/app/features/wishlist/view/view.page.ts` | Ver lista de presente do sorteado. |

### 🧠 6.3. Core Services (Singleton)
| Service | Arquivo | Responsabilidade Macro |
| :--- | :--- | :--- |
| `AuthService` | `core/services/auth.service.ts` | Gerenciar sessão Supabase e estado do usuário logado. |
| `DrawService` | `core/services/draw.service.ts` | CRUD de sorteios e lógica de convites. |
| `WishlistService` | `core/services/wishlist.service.ts` | Gestão de itens da lista de desejos. |

## 🛡️ 7. Segurança (Supabase RLS)
> Políticas de acesso a nível de banco de dados.

| Tabela | Política (RLS) |
| :--- | :--- |
| `[tabela]` | [Regra de acesso] |
