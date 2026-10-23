-- Apply to the clinic-controlled Supabase project using the SQL editor.
-- Never expose the service-role key in browser-side code.
create extension if not exists pgcrypto;
create table if not exists public.appointment_requests (
 id uuid primary key default gen_random_uuid(),
 reference text unique not null,
 created_at timestamptz not null default now(),
 name text not null check (length(name) between 2 and 100),
 phone text not null,
 concern_category text not null,
 doctor text not null,
 clinic text not null,
 preferred_date date not null,
 preferred_window text,
 status text not null default 'requested' check (status in ('requested','contacted','confirmed','declined','cancelled','attended')),
 service_consent boolean not null default false,
 marketing_consent boolean not null default false,
 utm_source text,
 utm_medium text,
 utm_campaign text,
 updated_at timestamptz not null default now()
);
alter table public.appointment_requests enable row level security;
-- No policy: anon and authenticated client JWT roles cannot read/write patients.
revoke all on table public.appointment_requests from anon, authenticated;
-- Application inserts server-side only via service role; staff use secured Supabase/admin access.
create index if not exists appointment_requests_created_idx on public.appointment_requests (created_at desc);
create index if not exists appointment_requests_status_idx on public.appointment_requests (status);
-- Deploy a separate role-based admin interface only after clinic authorization and privacy review.
