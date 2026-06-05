-- ============================================================================
-- Atualização: Adiciona a coluna para armazenar o resultado do sorteio
-- ============================================================================

alter table public.participants 
add column if not exists drawn_participant_id uuid references public.participants(id) on delete set null;
