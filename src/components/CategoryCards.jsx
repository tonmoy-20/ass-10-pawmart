import React from "react";

const CategoryCards = () => {
  const categories = [
    {
      title: "Pets (Adoption)",
      icon: "🐶",
      desc: "Find lovable pets waiting for a new home.",
    },
    {
      title: "Pet Food",
      icon: "🍖",
      desc: "Healthy and nutritious food for your furry friends.",
    },
    {
      title: "Accessories",
      icon: "🧸",
      desc: "Toys, collars, beds, and more for happy pets.",
    },
    {
      title: "Pet Care Products",
      icon: "💊",
      desc: "Essential grooming & medical supplies.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Browse Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-6 rounded-xl text-center 
                       hover:shadow-xl transition duration-300 hover:-translate-y-1"
          >
            <div className="text-5xl mb-4">{cat.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
            <p className="text-gray-600">{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
