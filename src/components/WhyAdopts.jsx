import React from "react";
import { LuMailQuestion } from "react-icons/lu";
import { GiLifeBar, GiLifeSupport } from "react-icons/gi";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const WhyAdopt = () => {
  return (
    <section className="py-5   px-4 md:px-20">
      <h2 className="text-2xl  flex items-center font-bold mb-3">
        <LuMailQuestion />{" "}
        <span className="ml-2"> Why Adopt from PawMart?</span>
      </h2>

      <p className="text-md  ">
        At PawMart, every pet deserves a chance to live a happy life. When you
        adopt, you rescue a pet in need and help reduce overpopulation. Adoption
        is not just bringing a pet home—it’s saving a life.
      </p>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadow-sm p-6  rounded-lg">
          <h3 className="text-xl flex items-center font-semibold mb-2">
            <GiLifeSupport /> <span className="ml-2">Rescue a Pet</span>
          </h3>
          <p className="">
            Give abandoned pets a loving forever home and a second chance.
          </p>
        </div>

        <div className=" shadow-sm p-6  rounded-lg">
          <h3 className="text-xl flex items-center font-semibold mb-2">
            <MdOutlineEmojiEmotions />
            <span className="ml-2">Promote Kindness</span>
          </h3>
          <p className="">
            Support ethical alternatives to commercial pet breeding.
          </p>
        </div>

        <div className=" shadow-sm p-6   rounded-lg">
          <h3 className="text-xl flex items-center font-semibold mb-2">
            <GiLifeBar />
            <span className="ml-2"> Save a Life</span>
          </h3>
          <p className="">
            Your adoption directly helps reduce pet homelessness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
