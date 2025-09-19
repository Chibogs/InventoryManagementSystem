import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://vubnjoruamtpobxfrfcz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1Ym5qb3J1YW10cG9ieGZyZmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyNjEyODAsImV4cCI6MjA3MzgzNzI4MH0.V6M7O-_4By8AUMFK1-cyEVkyPuhf5zMv4859uzCrbg4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
