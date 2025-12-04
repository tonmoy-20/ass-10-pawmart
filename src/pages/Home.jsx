import React from "react";
import Slider from "../components/Slider";
import Popular from "../components/Popular";
import WhyAdopt from "../components/WhyAdopts";
import PetHeroes from "../components/PetHeros";
import CategoryCards from "../components/CategoryCards";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <Slider />
      <CategoryCards />
      <Popular />

      <WhyAdopt />
      <PetHeroes />
    </div>
  );
};

export default Home;
