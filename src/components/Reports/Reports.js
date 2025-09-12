import React from "react";

const Reports = () => (
  <div style={{ padding: '16px' }}>
    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Reports</h1>
    <table style={{ minWidth: '100%', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
      <thead>
        <tr>
          <th style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Report ID</th>
          <th style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Type</th>
          <th style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>R001</td>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Sales</td>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>2025-09-12</td>
        </tr>
        <tr>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>R002</td>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>Inventory</td>
          <td style={{ padding: '8px 16px', borderBottom: '1px solid #e5e7eb' }}>2025-09-11</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Reports;
