import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "./../Provider/AuthProvider";
import axios from "axios";

const ServiceDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://missionscic.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(id);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const buyerName = form.buyerNAme.value;
    const buyerEmail = form.buyerEmail.value;
    const quantity = parseInt(form.quantity.value);
    const address = form.address.value;

    const price = parseInt(form.price.value);
    const phoneNum = form.phoneNum.value;
    const additionalNote = form.additionalNote.value;

    const formData = {
      productID: id,
      productName,
      buyerName,
      buyerEmail,
      quantity,
      address,
      price,
      phoneNum,
      additionalNote,
      date: new Date(),
    };

    axios
      .post("https://missionscic.vercel.app/orders", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="flex flex-col items-center mt-5 mb-5 px-[145px]">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={services?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">
            {services?.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <p className="font-lg">{services?.description}</p>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">{services?.category}</div>
            <div className="badge badge-outline">{services?.price}</div>
          </div>

          {/* ▶️ BUTTON MOVED INSIDE CARD */}
          <button
            className="btn btn-outline w-full mt-3"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Adopt / Order
          </button>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form
            onSubmit={handleOrder}
            className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4"
          >
            <legend className="fieldset-legend">Order Details</legend>

            <label className="label">Product Name</label>
            <input
              readOnly
              defaultValue={services?.name}
              name="productName"
              type="text"
              className="input"
              placeholder="Product Name"
            />

            <label className="label">Buyer Name</label>
            <input
              defaultValue={user?.displayName}
              name="buyerNAme"
              type="text"
              className="input"
              placeholder="Buyer Name"
            />

            <label className="label">Buyer Email</label>
            <input
              readOnly
              defaultValue={user?.email}
              name="buyerEmail"
              type="email"
              className="input"
              placeholder="Your email"
            />

            <label className="label">Quantity</label>
            <input
              required
              type="number"
              name="quantity"
              className="input"
              placeholder="Quantity"
            />

            <label className="label">Price</label>
            <input
              readOnly
              defaultValue={services?.price}
              name="price"
              type="number"
              className="input"
              placeholder="Price"
            />

            <label className="label">Address</label>
            <input
              type="text"
              name="address"
              className="input"
              placeholder="Address"
            />

            <label className="label">Phone Number</label>
            <input
              name="phoneNum"
              type="text"
              className="input"
              placeholder="Your Phone Number"
            />

            <label className="label">Additional Note</label>
            <textarea
              name="additionalNote"
              type="text"
              className="input"
              placeholder="Additional Note"
            />

            <button type="submit" className="btn btn-primary mt-3 w-full">
              Place Order
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;
