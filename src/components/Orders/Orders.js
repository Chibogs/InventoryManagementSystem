import React from "react";

const Orders = () => (
  <div style={{ padding: '16px' }}>
    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Customer Orders</h1>
    <table style={{ minWidth: '100%', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
      <thead>
        <tr>
          <th style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Order ID</th>
          <th style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Customer</th>
          <th style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Items</th>
          <th style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>001</td>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Retailer A</td>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Item A, Item B</td>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Pending</td>
        </tr>
        <tr>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>002</td>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Store B</td>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Item X</td>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Completed</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Orders;
