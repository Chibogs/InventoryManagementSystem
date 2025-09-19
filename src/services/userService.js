import { supabase } from "../lib/supabaseClient";
import bcrypt from "bcryptjs";

// Register new user
export async function registerUser(name, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, password: hashedPassword }]);
  if (error) throw error;
  return data;
}

// Login user
export async function loginUser(email, password) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error) throw error;
  const valid = await bcrypt.compare(password, data.password);
  if (!valid) throw new Error("Invalid credentials");
  return data;
}
