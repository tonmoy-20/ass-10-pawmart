import React from "react";

const PetHeroes = () => {
  const heroes = [
    {
      name: "Alice Johnson",
      role: "Pet Caregiver",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Mark Thompson",
      role: "Dedicated Adopter",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Sophia Lee",
      role: "Animal Rescue Volunteer",
      image: "https://i.pravatar.cc/150?img=47",
    },
  ];

  return (
    <section className="py-16 bg-white text-center px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Meet Our Pet Heroes
      </h2>

      <p className="text-gray-700 max-w-2xl mx-auto mb-10">
        These amazing people devote their time, compassion, and love to make
        every rescued pet feel safe, loved, and cared for. They are the true
        heroes behind PawMart.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {heroes.map((hero, index) => (
          <div key={index} className="shadow-md bg-gray-100 p-6 rounded-lg">
            <img
              src={hero.image}
              alt={hero.name}
              className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
            />

            <h3 className="text-xl font-bold">{hero.name}</h3>
            <p className="text-gray-600">{hero.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetHeroes;
