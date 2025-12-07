import { useParams } from "react-router";
import { useEffect, useState } from "react";

const CategoryFiltered = () => {
  const { categoryName } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/services?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [categoryName]);

  return (
    <div className="px-4 md:px-20 py-10">
      <h2 className="text-3xl font-bold mb-6 capitalize">
        {categoryName} Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((p) => (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={p?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                {p?.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>

              <p className="font-lg">{p?.description}</p>

              <div className="card-actions justify-end">
                <div className="badge badge-outline">{p?.category}</div>
                <div className="badge badge-outline">$ {p?.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFiltered;
