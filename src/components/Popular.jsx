import React, { useEffect, useState } from "react";
import { Link } from "react-router";

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
    <div className="mt-5 mb-5 md:px-40 px-4">
      <div>
        <h3 className="font-bold mb-6 text-3xl  text-center">Recent Listing</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, 6).map((service) => (
          <div className="card bg-base-100 w-full  shadow-sm">
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
                <p className="font-semibold">Price : {service?.price}</p>
                <p className="font-medium">Category : {service?.category}</p>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/details/${service?._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
