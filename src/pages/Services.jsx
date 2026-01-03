import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { TbCurrencyTaka } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
const Services = () => {
  const [services, setServices] = useState([]);

  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(`https://missionscic.vercel.app/services?category=${category}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="mt-5 mb-5 md:px-40 px-4">
      <select
        onChange={(e) => setCategory(e.target.value)}
        defaultValue="Pick a color"
        className="select my-5"
      >
        <option disabled={true}>Choose Category</option>
        <option value="">All</option>
        <option value="Pets">Pets</option>
        <option value="Food">Food</option>
        <option value="Accessories">Accessories</option>
        <option value="Care Products">Care Products</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{
              scale: 1,
              transition: { duration: 1 },
            }}
            className="card bg-base-100 w-full  shadow-sm"
          >
            <figure>
              <img
                className="w-full h-[250px] object-cover"
                src={service?.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service?.name}</h2>
              <div className="flex justify-between font-semibold items-center gap-10">
                <p className="flex items-center justify-normal ">
                  <TbCurrencyTaka />
                  {service?.price}
                </p>
                <p className="flex items-center justify-evenly">
                  <BiCategory /> {service?.category}
                </p>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/details/${service?._id}`}>
                  <button className="btn btn-soft btn-primary">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
