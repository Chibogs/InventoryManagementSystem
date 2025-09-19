import React from "react";

const Staff = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Staff Management</h1>
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 max-w-2xl mx-auto">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Staff Assignment</h3>
      </div>
      <div className="p-6">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Staff Name</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" disabled placeholder="Coming soon" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Assignment</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" disabled placeholder="Coming soon" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md" disabled>
            Assign (Coming Soon)
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Staff;
