import React from "react";
import Popular from "../components/Popular";
import WhyAdopt from "../components/WhyAdopts";
import PetHeroes from "../components/PetHeros";
import CategoryCards from "../components/CategoryCards";
import SliderSwip from "../components/SliderSwip";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <SliderSwip />
      <CategoryCards />
      <Popular />

      <WhyAdopt />
      <PetHeroes />
    </div>
  );
};

export default Home;
