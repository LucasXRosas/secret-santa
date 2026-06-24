-- ============================================================================
-- Adiciona campos opcionais de organizer_name e location na tabela events.
-- Ambas as colunas são nullable (retrocompatível com eventos já existentes).
-- ============================================================================

alter table public.events
  add column if not exists organizer_name text,
  add column if not exists location       text;
