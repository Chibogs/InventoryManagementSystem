import React from "react";

const Accounting = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Accounting</h1>
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Financial Overview</h3>
      </div>
      <div className="p-6">
        <form className="max-w-md">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Customer</label>
              <input 
                type="text" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" 
                disabled 
                placeholder="Coming soon" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <input 
                type="number" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" 
                disabled 
                placeholder="Coming soon" 
              />
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md opacity-50 cursor-not-allowed" 
              disabled
            >
              Process Transaction (Coming Soon)
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Accounting;
