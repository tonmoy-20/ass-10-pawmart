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
import SupportHelp from "./Dashboard/SupportHelp";

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

      <About />
      <Newsletter />
      <SupportHelp />
    </div>
  );
};

export default Home;
