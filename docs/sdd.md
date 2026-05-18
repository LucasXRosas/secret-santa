# 🛠️ Software Design Document (SDD)

**Projeto:** WishDraw
**Versão:** 1.0.0
**Status:** ⚪ Aguardando Geração de Especificações.

## 🤖 1. Orquestração e Contexto de IA (MCP)

* **Figma/Stitch MCP:** `[A DEFINIR - Design System / Logo + UI baseado no conceito dark/light]`
* **Supabase MCP:** Conexão com projeto Supabase (schemas públicos + RLS policies)
* **GitHub MCP:** Integração com repositório (issues → user stories do PRD)

---

## 📦 2. Stack Tecnológica e Bibliotecas

* **Core:** Angular 21+ (Standalone Components + Signals)

* **BaaS & Auth:** Supabase (`@supabase/supabase-js`)

* **Estilização & UI:**

  * Tailwind CSS 4.3.0
  * Spartan UI (HLM)
  * Lucide Angular (ícones)

* **Utilitários:**

  * `date-fns` (datas)
  * `zod` (validação e schemas)
  * `uuid` (geração de IDs client-side quando necessário)

---

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

---

## 🏗️ 5. Scaffolding Macro (Arquitetura Frontend)

### 📂 5.1. Estrutura de Pastas Base

```
src/app/
  core/
    services/
    guards/
    interceptors/
  features/
    auth/
    groups/
    draw/
    wishlist/
  shared/
    components/
    pipes/
    directives/
```

---

### 🚦 5.2. Mapa de Rotas e Páginas (Features)

| Rota                  | Page Component                | Guard     |
| :-------------------- | :---------------------------- | :-------- |
| `/login`              | `auth/login.page.ts`          | Público   |
| `/dashboard`          | `groups/dashboard.page.ts`    | AuthGuard |
| `/group/:id`          | `groups/group-detail.page.ts` | AuthGuard |
| `/group/:id/wishlist` | `wishlist/wishlist.page.ts`   | AuthGuard |
| `/group/:id/draw`     | `draw/draw.page.ts`           | AuthGuard |
| `/profile`            | `auth/profile.page.ts`        | AuthGuard |

---

### 🧠 5.3. Core Services (Singleton)

| Service               | Arquivo                                 | Responsabilidade               |
| :-------------------- | :-------------------------------------- | :----------------------------- |
| `AuthService`         | `core/services/auth.service.ts`         | Login, logout, sessão Supabase |
| `GroupService`        | `core/services/group.service.ts`        | CRUD de grupos                 |
| `DrawService`         | `core/services/draw.service.ts`         | Lógica de sorteio              |
| `WishlistService`     | `core/services/wishlist.service.ts`     | Gestão de desejos              |
| `NotificationService` | `core/services/notification.service.ts` | Alertas básicos                |

---

## 🔄 5.4. Fluxo do Sorteio (Algoritmo)

### Regras:

* Não pode tirar a si mesmo
* Deve respeitar restrições

## 🛡️ 6. Segurança (Supabase RLS)

| Tabela          | Política (RLS)                             |
| :-------------- | :----------------------------------------- |
| `group`         | Usuário só vê grupos onde é membro         |
| `group_member`  | Usuário só vê registros do próprio grupo   |
| `draw`          | Apenas membros do grupo podem ver          |
| `draw_result`   | Usuário só vê onde `giver_id = auth.uid()` |
| `wishlist`      | Usuário só vê a própria + do sorteado      |
| `wishlist_item` | Vinculado à regra acima                    |

### Exemplo (Supabase SQL)

```sql
CREATE POLICY "Users can see their draw result"
ON draw_result
FOR SELECT
USING (giver_id = auth.uid());
```

---

## 🔐 7. Considerações de Segurança

* JWT via Supabase
* RLS obrigatório (não confiar no frontend)
* IDs UUID (evitar enumeração)
* Proteção contra replay de sorteio
* Logs de auditoria (futuro)

---

## ⚡ 8. Estratégias de Performance

* Lazy loading de rotas
* Cache local com Signals
* Realtime Supabase (para atualização de sorteio)
* Indexação:

  * `group_id`
  * `user_id`
  * `draw_id`

---

## 🚀 9. Extensibilidade (Futuro)

* 🎁 Sugestão de presentes (IA)
* 💬 Chat por grupo
* 📅 Integração com calendário
* 🔔 Push notifications
* 🎨 Temas (dark/light – já alinhado com logo)
