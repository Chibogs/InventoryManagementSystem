/**
 * src/services/inventoryService.js
 *
 * CRUD helpers for the 'items' table in Supabase.
 * Each function returns { data, error } similar to supabase-js responses.
 */

import { supabase } from '../lib/supabaseClient';

/** Fetch all items, newest first */
export async function fetchItems() {
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .order('created_at', { ascending: false });
  return { data, error };
}

/** Create a new item */
export async function createItem(payload) {
  // payload: { name, description, quantity, price }
  const { data, error } = await supabase
    .from('items')
    .insert([{ 
      name: payload.name, 
      description: payload.description || null, 
      quantity: payload.quantity ?? 0, 
      price: payload.price ?? 0 
    }])
    .select()
    .single();
  return { data, error };
}

/** Update an item by id */
export async function updateItem(id, updates) {
  const { data, error } = await supabase
    .from('items')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  return { data, error };
}

/** Delete an item by id */
export async function deleteItem(id) {
  const { data, error } = await supabase
    .from('items')
    .delete()
    .eq('id', id);
  return { data, error };
}
