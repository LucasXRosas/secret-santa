-- ============================================================================
-- Corrige recursão infinita no RLS entre events e participants.
--
-- O problema:
--   - A policy de events (SELECT) consultava participants, disparando o RLS de participants.
--   - A policy de participants (SELECT) consultava events, disparando o RLS de events.
--   - Ciclo infinito: events → participants → events → ...
--
-- A solução:
--   - Criar uma função SECURITY DEFINER que consulta participants SEM passar
--     pelo RLS deles (roda com permissão do criador da função). Assim, quando
--     a policy de events chama essa função, ela não dispara o RLS de participants.
-- ============================================================================

-- 1. Função helper: verifica se o usuário logado é participante aceito do evento.
--    SECURITY DEFINER => roda com privilégios do criador, bypassando RLS de participants.
create or replace function public.is_event_participant(p_event_id uuid)
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1 from public.participants
    where event_id = p_event_id
      and email    = (select email from auth.users where id = auth.uid())
      and status   = 'joined'
  );
$$;

-- 2. Recria a policy de events para usar a função (sem ciclo).
drop policy if exists "Participantes veem eventos em que participam" on public.events;
create policy "Participantes veem eventos em que participam"
  on public.events for select
  using (public.is_event_participant(id));

-- 3. Permite que participantes aceitos vejam os outros participantes do mesmo evento.
--    Também usa a função para evitar o ciclo.
drop policy if exists "Participante vê participantes do mesmo evento" on public.participants;
create policy "Participante vê participantes do mesmo evento"
  on public.participants for select
  using (public.is_event_participant(event_id));
