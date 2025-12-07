import React from "react";
import { Link } from "react-router";

const categories = [
  {
    title: "Pets (Adoption)",
    image:
      "https://i.ibb.co.com/bj8fVLLT/humberto-arellano-N-G2-Sqdy9-QY-unsplash.jpg",
    category: "Pets",
  },

  {
    title: "Pet Food",
    image:
      "https://i.ibb.co.com/v4FLJ9q8/sam-moghadam-SRz-VKw8l-t-A-unsplash.jpg",
    category: "Food",
  },

  {
    title: "Accessories",
    image:
      "https://i.ibb.co.com/99GYjLfZ/chris-jarvis-NOLrg-L3h-UJg-unsplash.jpg",
    category: "Accessories",
  },

  {
    title: "Pet Care Products",
    image:
      "https://i.ibb.co.com/FbNVKX7t/pmv-chamara-u-WR8-Fc-QMl5k-unsplash.jpg",
    category: "Care Products",
  },
];

const CategoryCards = () => {
  return (
    <section className="py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Browse Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <Link key={i} to={`/category-filtered-product/${cat?.category}`}>
            <div className="card bg-base-100 image-full   p-3 rounded-xl shadow-lg text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition">
              <figure>
                <img src={cat?.image} alt="Shoes" />
              </figure>
              <div className="card-body justify-center items-center">
                <h2 className="card-title">{cat?.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
