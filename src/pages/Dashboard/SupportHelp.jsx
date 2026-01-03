import React from "react";
import {
  FaPaw,
  FaEnvelope,
  FaPhoneAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router";

const SupportHelp = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FaPaw className="text-5xl text-purple-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-3">Help & Support</h1>
        <p className="text-gray-600">
          Need help with orders, adoptions, or services? PawMart support is
          always here for you 🐾
        </p>
      </div>

      {/* Support Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        <div className=" rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
          <FaQuestionCircle className="text-4xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">FAQs</h3>
          <p className="text-gray-500 text-sm">
            Find answers to common questions about PawMart services.
          </p>
        </div>

        <div className=" rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
          <FaEnvelope className="text-4xl text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email Support</h3>
          <p className="text-gray-500 text-sm">
            Reach us at
            <span className="block font-medium text-gray-700 mt-1">
              support@pawmart.com
            </span>
          </p>
        </div>

        <div className=" rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
          <FaPhoneAlt className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-500 text-sm">
            Available 9 AM – 6 PM
            <span className="block font-medium text-gray-700 mt-1">
              +880 1234-567890
            </span>
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto  rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="border rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold">
              How do I adopt a pet from PawMart?
            </summary>
            <p className="text-gray-600 mt-2">
              Browse available pets, submit an adoption request, and our team
              will contact you for verification.
            </p>
          </details>

          <details className="border rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold">
              How can I track my order?
            </summary>
            <p className="text-gray-600 mt-2">
              Go to your dashboard and check the “My Orders” section.
            </p>
          </details>

          <details className="border rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold">Can I cancel an order?</summary>
            <p className="text-gray-600 mt-2">
              Yes, orders can be cancelled before they are approved.
            </p>
          </details>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <p className="text-gray-600 mb-4">Still need help?</p>
        <Link to={"/contact"}>
          <button className="btn bg-purple-600 hover:bg-purple-700 text-white px-10 rounded-full">
            Contact Support
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SupportHelp;
