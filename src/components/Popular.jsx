import React, { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";
import { LuListCollapse } from "react-icons/lu";
import { motion } from "motion/react";

const Popular = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://missionscic.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(services);

  return (
    <div className=" py-5 px-4 md:px-20">
      <div>
        <h3 className="text-2xl  font-bold flex items-center mb-3">
          {" "}
          <LuListCollapse /> <span className="ml-2">Recent Listing</span>
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {services.slice(0, 6).map((service) => (
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{
              scale: 1,
              transition: { duration: 1.7 },
            }}
            className="card bg-base-100 w-full  shadow-sm"
          >
            <figure>
              <img
                className="w-full h-[300px] object-cover"
                src={service?.image}
                alt="Image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{service?.name}</h2>
              <div className="flex justify-between font-semibold items-center gap-10">
                <p className="font-semibold flex justify-normal items-center">
                  <TbCurrencyTaka />
                  {service?.price}
                </p>
                <p className="font-medium items-center flex justify-evenly">
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

export default Popular;
