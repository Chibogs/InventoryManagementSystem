import React from "react";

const Accounting = () => (
  <div style={{ padding: '16px' }}>
    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Accounting</h1>
    <form style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '16px', maxWidth: '400px', margin: '0 auto' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Charge Customer</label>
      <input type="text" placeholder="Customer Name" style={{ border: '1px solid #d1d5db', padding: '8px', width: '100%', marginBottom: '8px', borderRadius: '4px' }} />
      <input type="number" placeholder="Amount" style={{ border: '1px solid #d1d5db', padding: '8px', width: '100%', marginBottom: '8px', borderRadius: '4px' }} />
      <button type="submit" style={{ backgroundColor: '#2563eb', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Charge</button>
    </form>
  </div>
);

export default Accounting;
