import React from "react";

const TL = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Team Lead Dashboard</h1>
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Pending Approvals</h3>
      </div>
      <div className="p-6 text-center text-gray-500">
        No pending approvals
      </div>
    </div>
  </div>
);

export default TL;
