-- Run this in the Supabase SQL editor: https://supabase.com/dashboard/project/_/sql
-- Then run supabase/seed.sql to populate the data.

create table if not exists public.vehicles (
  id          bigserial primary key,
  make        text not null,
  model       text not null,
  year_range  text not null,
  fuel_type   text not null check (fuel_type in ('petrol', 'diesel', 'hybrid', 'electric')),
  consumption numeric(4,1) not null,
  created_at  timestamptz default now()
);

create index if not exists vehicles_make_idx on public.vehicles(make);
create index if not exists vehicles_make_model_idx on public.vehicles(make, model);

alter table public.vehicles enable row level security;

create policy "vehicles_public_read"
  on public.vehicles for select
  using (true);
