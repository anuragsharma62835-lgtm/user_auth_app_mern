import React from "react";
import { useAuth } from "../context/authcontext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  return (
   <div className="min-h-screen bg-gray-50 p-8">
  <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
    <h1 className="text-3xl font-bold mb-4">Hello, {user?.name}</h1>
    <p className="text-gray-700 mb-2">Email: {user?.email}</p>
    <button
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      onClick={logout}
    >
      Logout
    </button>
  </div>
</div>

  );
};

export default Dashboard;
