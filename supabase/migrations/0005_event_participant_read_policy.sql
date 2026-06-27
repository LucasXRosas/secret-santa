-- ============================================================================
-- Permite que participantes aceitos leiam o evento em que participam.
-- Sem isso, apenas o owner consegue abrir a página do evento.
-- ============================================================================

drop policy if exists "Participantes veem eventos em que participam" on public.events;
create policy "Participantes veem eventos em que participam"
  on public.events for select
  using (
    exists (
      select 1 from public.participants
      where participants.event_id = events.id
        and participants.email = (select email from auth.users where id = auth.uid())
        and participants.status = 'joined'
    )
  );
