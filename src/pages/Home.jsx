import React from "react";
import Popular from "../components/Popular";
import WhyAdopt from "../components/WhyAdopts";
import PetHeroes from "../components/PetHeros";
import CategoryCards from "../components/CategoryCards";
import SliderSwip from "../components/SliderSwip";
import Faq from "./Faq";
import About from "./About";
import Newsletter from "./Newsletter";
import Testimonials from "./Testmonials";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <SliderSwip />
      <CategoryCards />
      <Popular />

      <WhyAdopt />
      <PetHeroes />
      <Testimonials />
      <Newsletter />
      <Faq />
      <About />
    </div>
  );
};

export default Home;
