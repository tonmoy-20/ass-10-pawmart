import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [category, setCategory] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    axios.get(`https://missionscic.vercel.app/services/${id}`).then((res) => {
      setService(res.data);
      setCategory(res.data.category);
    });
  }, [id]);

  const handleUpdate = (e) => {
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
      createdAt: service?.createdAt,
    };

    axios
      .put(`https://missionscic.vercel.app/update/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        navigation("/dashboard/my-services");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-8 my-10">
        <h2 className="text-2xl font-semibold mb-6">Update Listing</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Product/Pet Name</label>
            <input
              defaultValue={service?.name}
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              value={category}
              name="category"
              className="w-full border border-gray-300 rounded-md p-2"
              onChange={(e) => setCategory(e.target.value)}
              required
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
              defaultValue={service?.price}
              type="number"
              name="price"
              className="w-full border border-gray-300 rounded-md p-2"
              min="0"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium mb-1">Location</label>
            <input
              defaultValue={service?.location}
              type="text"
              name="location"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              defaultValue={service?.description}
              name="description"
              className="w-full border border-gray-300 rounded-md p-2"
              rows="4"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              defaultValue={service?.image}
              type="url"
              name="image"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-medium mb-1">Pick Up Date</label>
            <input
              defaultValue={service?.date}
              type="date"
              name="date"
              className="w-full border border-gray-300 rounded-md p-2"
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
              className="w-full border border-gray-300 rounded-md p-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
