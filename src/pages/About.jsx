import React from "react";
import { FaPaw, FaHeart, FaUsers, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FaPaw className="text-5xl text-purple-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-3">About PawMart</h1>
        <p className="text-gray-600">
          PawMart is a trusted platform dedicated to connecting loving homes
          with happy pets and quality pet care services.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        <div className=" rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <FaHeart className="text-red-500" /> Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to ensure every pet receives love, care, and a safe
            home. We strive to make pet adoption, shopping, and services simple,
            ethical, and accessible for everyone.
          </p>
        </div>

        <div className=" rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <FaUsers className="text-blue-500" /> Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a world where every pet is valued as family. PawMart
            aims to become the most trusted digital destination for pet lovers
            worldwide.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose PawMart?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className=" rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <FaPaw className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted Adoption</h3>
            <p className="text-gray-600 text-sm">
              We work with verified shelters and pet owners to ensure safe and
              responsible adoptions.
            </p>
          </div>

          <div className=" rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <FaShieldAlt className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600 text-sm">
              Carefully selected pet products to ensure health, safety, and
              happiness.
            </p>
          </div>

          <div className=" rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <FaHeart className="text-4xl text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600 text-sm">
              Built by pet lovers, for pet lovers — your trust means everything
              to us.
            </p>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Join the PawMart Family</h2>
        <p className="text-gray-600 mb-6">
          Whether you’re adopting, shopping, or simply exploring, PawMart is
          here to support your journey with your furry companions.
        </p>
        <Link to={"/services"}>
          <button className="btn bg-purple-600 hover:bg-purple-700 text-white px-10 rounded-full">
            Explore PawMart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
