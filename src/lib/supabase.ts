import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
// We use a lazy initialization pattern to avoid crashing if keys are missing during development
// The user will need to provide these in their .env file (or AI Studio secrets)

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const isSupabaseConfigured = () => {
  return !!supabase;
};
