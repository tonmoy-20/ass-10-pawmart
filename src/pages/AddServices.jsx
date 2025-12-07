import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddServices = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;

    const formData = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
    };
    console.log(formData);

    axios
      .post("https://missionscic.vercel.app/services", formData)
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Listing is created successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          }).catch((err) => {
            console.log(err);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          });
        }
      });
  };

  return (
    <div>
      <div className="max-w-xl  mx-auto p-6  shadow-xl rounded-xl mt-8 my-10">
        <h2 className="text-2xl font-semibold mb-6">Create Listing</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Product/Pet Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              name="category"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Pets">Pets</option>
              <option value="Food">Food</option>
              <option value="Accessories">Accessories</option>
              <option value="Care Products">Care Products</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 
            }`}
              min="0"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="url"
              name="image"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-medium mb-1">Pick Up Date</label>
            <input
              type="date"
              name="date"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              className="w-full border border-gray-300 rounded-md p-2  cursor-not-allowed"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
