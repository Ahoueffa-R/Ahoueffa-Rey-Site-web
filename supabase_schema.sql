-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Table: inscriptions_dating
create table public.inscriptions_dating (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  nom text not null,
  entreprise text,
  email text not null,
  whatsapp text,
  ville_pays text,
  type_activite text,
  objectif_principal text,
  budget text,
  disponibilites text,
  status text default 'pending'
);

-- Table: realisations
create table public.realisations (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  titre text not null,
  description text,
  categorie text, -- 'branding', 'conseil', 'gestion', etc.
  image_url text,
  annee text,
  type_prestation text
);

-- Table: contacts
create table public.contacts (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  nom text not null,
  entreprise text,
  pays text,
  email text not null,
  whatsapp text,
  type_besoin text,
  budget_estimatif text,
  message text
);

-- Storage Bucket: realisations
-- Note: You'll need to create a storage bucket named 'realisations' in the Supabase dashboard
-- and set up appropriate public access policies.

-- RLS Policies (Row Level Security)
-- Enable RLS
alter table public.inscriptions_dating enable row level security;
alter table public.realisations enable row level security;
alter table public.contacts enable row level security;

-- Policies for inscriptions_dating (Insert only for public, Select for authenticated admins)
create policy "Enable insert for everyone" on public.inscriptions_dating for insert with check (true);
create policy "Enable read for authenticated users only" on public.inscriptions_dating for select using (auth.role() = 'authenticated');

-- Policies for contacts (Insert only for public)
create policy "Enable insert for everyone" on public.contacts for insert with check (true);
create policy "Enable read for authenticated users only" on public.contacts for select using (auth.role() = 'authenticated');

-- Policies for realisations (Read for everyone, Insert/Update for admins)
create policy "Enable read for everyone" on public.realisations for select using (true);
create policy "Enable all for authenticated users" on public.realisations for all using (auth.role() = 'authenticated');
