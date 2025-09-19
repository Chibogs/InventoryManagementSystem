-- supabase_schema.sql
-- Run this in the Supabase SQL editor to create the 'items' table.
-- You may need to enable the pgcrypto extension for gen_random_uuid().
create extension if not exists pgcrypto;

create table if not exists public.items (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  quantity integer default 0 not null,
  price numeric(12,2) default 0.00 not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- trigger function to update updated_at on row changes
create or replace function public.trigger_set_timestamp()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_timestamp on public.items;
create trigger set_timestamp
before update on public.items
for each row execute procedure public.trigger_set_timestamp();
