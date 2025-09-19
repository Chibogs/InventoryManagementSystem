import React from "react";

const Orders = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Orders</h1>
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Customer Orders</h3>
      </div>
      <div className="p-6 text-center text-gray-500">
        No orders to display
      </div>
    </div>
  </div>
);

export default Orders;
