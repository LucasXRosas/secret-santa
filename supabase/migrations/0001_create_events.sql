-- ============================================================================
-- Tabela: events (Sorteios de Amigo Secreto)
-- Cada evento pertence a um usuário (owner_id => auth.users).
-- ============================================================================

create table if not exists public.events (
  id          uuid        primary key default gen_random_uuid(),
  owner_id    uuid        not null references auth.users (id) on delete cascade,
  name        text        not null,
  budget      numeric(10, 2),            -- Limite de orçamento por pessoa (opcional)
  draw_date   date,                      -- Data do sorteio/revelação (opcional)
  created_at  timestamptz not null default now()
);

-- Índice para listar rapidamente os eventos de um usuário.
create index if not exists events_owner_id_idx on public.events (owner_id);

-- ============================================================================
-- Row Level Security: cada usuário só enxerga e manipula os próprios eventos.
-- ============================================================================
alter table public.events enable row level security;

drop policy if exists "Usuários veem seus próprios eventos" on public.events;
create policy "Usuários veem seus próprios eventos"
  on public.events for select
  using (auth.uid() = owner_id);

drop policy if exists "Usuários criam seus próprios eventos" on public.events;
create policy "Usuários criam seus próprios eventos"
  on public.events for insert
  with check (auth.uid() = owner_id);

drop policy if exists "Usuários atualizam seus próprios eventos" on public.events;
create policy "Usuários atualizam seus próprios eventos"
  on public.events for update
  using (auth.uid() = owner_id)
  with check (auth.uid() = owner_id);

drop policy if exists "Usuários removem seus próprios eventos" on public.events;
create policy "Usuários removem seus próprios eventos"
  on public.events for delete
  using (auth.uid() = owner_id);
