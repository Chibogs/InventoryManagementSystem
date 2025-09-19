/**
 * src/components/Warehouse/Warehouse.js
 *
 * Replaced the static Warehouse view with a simple Inventory CRUD UI using Supabase.
 * This component is intentionally minimal and commented for learning.
 */

import React, { useEffect, useState } from 'react';
import { fetchItems, createItem, updateItem, deleteItem } from '../../services/inventoryService';

const EmptyForm = { name: '', description: '', quantity: 0, price: 0 };

const Warehouse = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(EmptyForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);

  async function loadItems() {
    setLoading(true);
    const { data, error } = await fetchItems();
    if (error) {
      setError(error.message || JSON.stringify(error));
    } else {
      setItems(data || []);
      setError(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadItems();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'quantity' ? parseInt(value || 0, 10) : (name === 'price' ? parseFloat(value || 0) : value) }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (!form.name || form.name.trim() === '') {
      setError('Name is required');
      setLoading(false);
      return;
    }
    if (editingId) {
      const { data, error } = await updateItem(editingId, form);
      if (error) setError(error.message || JSON.stringify(error));
      else {
        setForm(EmptyForm);
        setEditingId(null);
        await loadItems();
      }
    } else {
      const { data, error } = await createItem(form);
      if (error) setError(error.message || JSON.stringify(error));
      else {
        setForm(EmptyForm);
        await loadItems();
      }
    }
    setLoading(false);
  }

  function startEdit(item) {
    setEditingId(item.id);
    setForm({ name: item.name, description: item.description || '', quantity: item.quantity || 0, price: item.price || 0 });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleDelete(id) {
    if (!confirm('Delete this item?')) return;
    setLoading(true);
    const { error } = await deleteItem(id);
    if (error) setError(error.message || JSON.stringify(error));
    else await loadItems();
    setLoading(false);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Warehouse / Inventory</h1>

      <form onSubmit={handleSubmit} className="mb-6 bg-white rounded-lg p-4 shadow-sm max-w-2xl">
        <h2 className="text-lg font-semibold mb-2">{editingId ? 'Edit item' : 'Add new item'}</h2>
        {error && <div className="mb-2 text-sm text-red-600">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="p-2 border rounded" />
          <input name="quantity" value={form.quantity} onChange={handleChange} type="number" min="0" placeholder="Quantity" className="p-2 border rounded" />
          <input name="price" value={form.price} onChange={handleChange} type="number" step="0.01" min="0" placeholder="Price" className="p-2 border rounded" />
          <input name="description" value={form.description} onChange={handleChange} placeholder="Description (optional)" className="p-2 border rounded" />
        </div>
        <div className="mt-3">
          <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            {editingId ? 'Save changes' : 'Add item'}
          </button>
          {editingId && <button type="button" onClick={() => { setEditingId(null); setForm(EmptyForm); }} className="ml-2 px-3 py-2 border rounded">Cancel</button>}
        </div>
      </form>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold mb-3">Items</h3>
        {loading ? (
          <div>Loading...</div>
        ) : items.length === 0 ? (
          <div className="text-sm text-gray-600">No items yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Quantity</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Price</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Description</th>
                  <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map(item => (
                  <tr key={item.id}>
                    <td className="px-4 py-3 whitespace-nowrap">{item.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.quantity ?? 0}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.price != null ? item.price.toFixed(2) : '0.00'}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.description}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-right">
                      <button onClick={() => startEdit(item)} className="text-sm mr-2 px-2 py-1 border rounded">Edit</button>
                      <button onClick={() => handleDelete(item.id)} className="text-sm px-2 py-1 border rounded bg-red-50 hover:bg-red-100">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Warehouse;
