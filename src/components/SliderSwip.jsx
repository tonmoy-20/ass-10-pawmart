import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import i1 from "../assets/pets.jpg";
import i4 from "../assets/addopttion.jpg";
import i6 from "../assets/happy-owner.jpg";

const SliderSwip = () => {
  return (
    <div className="mt-52 md:mt-2">
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="card bg-base-100 image-full  ">
              <figure>
                <img
                  className="w-full object-cover h-[400px]"
                  src={i1}
                  alt="Pets"
                />
              </figure>
              <div className="card-body justify-center items-center">
                <h1 className="card-title text-6xl ">
                  “Find Your Furry Friend Today!”
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card bg-base-100 image-full  ">
              <figure>
                <img
                  className="w-full object-cover h-[400px]"
                  src={i4}
                  alt="Adoptions"
                />
              </figure>
              <div className="card-body justify-center items-center">
                <h1 className="card-title text-6xl ">
                  “Adopt, Don’t Shop — Give a Pet a Home.”
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 image-full  ">
              <figure>
                <img
                  className="w-full object-cover h-[400px]"
                  src={i6}
                  alt="Happy owner"
                />
              </figure>
              <div className="card-body justify-center items-center ">
                <h1 className="card-title text-6xl ">
                  “Because Every Pet Deserves Love and Care.”
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default SliderSwip;
