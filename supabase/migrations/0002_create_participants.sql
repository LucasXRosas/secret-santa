-- ============================================================================
-- Tabela: participants (Convidados de um sorteio)
-- Cada participante pertence a um evento (event_id => events).
-- O dono do evento é quem convida/remove participantes.
-- ============================================================================

create table if not exists public.participants (
  id          uuid        primary key default gen_random_uuid(),
  event_id    uuid        not null references public.events (id) on delete cascade,
  email       text        not null,
  name        text,
  status      text        not null default 'pending',  -- 'pending' | 'joined'
  invited_at  timestamptz not null default now(),
  -- Evita convidar o mesmo e-mail duas vezes no mesmo evento.
  unique (event_id, email)
);

create index if not exists participants_event_id_idx on public.participants (event_id);

-- ============================================================================
-- Row Level Security: só o dono do evento enxerga/gerencia os participantes.
-- Usamos um EXISTS na tabela events para checar o owner.
-- ============================================================================
alter table public.participants enable row level security;

drop policy if exists "Dono vê participantes do seu evento" on public.participants;
create policy "Dono vê participantes do seu evento"
  on public.participants for select
  using (
    exists (
      select 1 from public.events e
      where e.id = participants.event_id and e.owner_id = auth.uid()
    )
  );

drop policy if exists "Dono adiciona participantes no seu evento" on public.participants;
create policy "Dono adiciona participantes no seu evento"
  on public.participants for insert
  with check (
    exists (
      select 1 from public.events e
      where e.id = participants.event_id and e.owner_id = auth.uid()
    )
  );

drop policy if exists "Dono atualiza participantes do seu evento" on public.participants;
create policy "Dono atualiza participantes do seu evento"
  on public.participants for update
  using (
    exists (
      select 1 from public.events e
      where e.id = participants.event_id and e.owner_id = auth.uid()
    )
  );

drop policy if exists "Dono remove participantes do seu evento" on public.participants;
create policy "Dono remove participantes do seu evento"
  on public.participants for delete
  using (
    exists (
      select 1 from public.events e
      where e.id = participants.event_id and e.owner_id = auth.uid()
    )
  );
