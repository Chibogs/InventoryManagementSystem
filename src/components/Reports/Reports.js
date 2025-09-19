import React from "react";

const Reports = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Reports</h1>
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Generated Reports</h3>
      </div>
      <div className="p-6">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-700">Report ID</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-700">Type</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-700">Date</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 text-center text-gray-500" colSpan="4">
                No reports available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Reports;
