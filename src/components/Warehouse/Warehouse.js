import React from "react";

const Warehouse = () => (
  <div style={{ padding: '16px' }}>
    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Warehouse</h1>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
      <div style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '16px' }}>
        <h2 style={{ fontWeight: '600' }}>Received Items</h2>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Item A - Spoiled</li>
          <li>Item B - Damaged</li>
        </ul>
      </div>
      <div style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '16px' }}>
        <h2 style={{ fontWeight: '600' }}>Outgoing Items</h2>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Item X</li>
          <li>Item Y</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Warehouse;
