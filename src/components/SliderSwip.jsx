import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import i1 from "../assets/pets.jpg";
import i4 from "../assets/addopttion.jpg";
import i6 from "../assets/happy-owner.jpg";

const SliderSwip = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card bg-base-100 image-full">
            <figure>
              <img
                className="w-full object-cover h-[400px]"
                src={i1}
                alt="Pets"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h1 className="card-title  mt-35 text-4xl text-amber-100">
                “Find Your Furry Friend Today!”
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100 image-full">
            <figure>
              <img
                className="w-full object-cover h-[400px]"
                src={i4}
                alt="Adoptions"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h1 className="card-title mt-35 text-4xl  text-amber-100">
                “Adopt Now — Give a Pet a Home.”
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100 image-full">
            <figure>
              <img
                className="w-full object-cover h-[400px]"
                src={i6}
                alt="Happy owner"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h1 className="card-title mt-35 text-4xl text-amber-100">
                “Because Every Pet Deserves Love and Care.”
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderSwip;
