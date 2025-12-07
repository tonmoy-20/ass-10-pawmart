import React from "react";

const WhyAdopt = () => {
  return (
    <section className="py-16  text-center px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Why Adopt from PawMart?
      </h2>

      <p className="text-lg md:text-xl  max-w-3xl mx-auto">
        At PawMart, every pet deserves a chance to live a happy life. When you
        adopt, you rescue a pet in need and help reduce overpopulation. Adoption
        is not just bringing a pet home—it’s saving a life.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" shadow-xl p-6  border-1  rounded-lg">
          <h3 className="text-xl font-semibold mb-2">🐶 Rescue a Pet</h3>
          <p className="">
            Give abandoned pets a loving forever home and a second chance.
          </p>
        </div>

        <div className=" shadow-xl p-6 border-1 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">🐾 Promote Kindness</h3>
          <p className="">
            Support ethical alternatives to commercial pet breeding.
          </p>
        </div>

        <div className=" shadow-xl p-6 border-1 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">❤️ Save a Life</h3>
          <p className="">
            Your adoption directly helps reduce pet homelessness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
