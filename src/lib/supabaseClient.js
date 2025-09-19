/**
 * src/lib/supabaseClient.js
 *
 * Simple wrapper for the Supabase client. 
 * Put your keys in .env.local (REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY)
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Create a .env.local with REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
