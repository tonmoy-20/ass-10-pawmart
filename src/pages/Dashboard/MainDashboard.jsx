import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router";
import { FaPaw, FaShoppingBag, FaUserCircle } from "react-icons/fa";

const MainDashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50 px-6 py-10">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <FaPaw className="text-5xl text-purple-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold">
          Welcome Back,{" "}
          <span className="text-purple-600">{user?.displayName}</span>
        </h1>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Manage your orders, explore services, and give pets the love they
          deserve with PawMart.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaUserCircle className="text-4xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">My Profile</h3>
          <p className="text-gray-500 text-sm">
            View and update your personal information.
          </p>
        </div>

        {/* Orders Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaShoppingBag className="text-4xl text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">My Orders</h3>
          <p className="text-gray-500 text-sm">
            Track your orders and adoption requests.
          </p>
        </div>

        {/* Services Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaPaw className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Explore Services</h3>
          <p className="text-gray-500 text-sm">
            Discover pets, products, and care services.
          </p>
        </div>
      </div>

      {/* Call To Action */}
      <div className="text-center">
        <Link to="/services">
          <button className="btn btn-lg bg-purple-600 hover:bg-purple-700 text-white px-10 rounded-full shadow-md">
            View All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainDashboardLayout;
