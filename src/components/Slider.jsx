import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import i1 from "../assets/pets.jpg";
import i4 from "../assets/addopttion.jpg";
import i6 from "../assets/happy-owner.jpg";

const Slider = () => {
  return (
    <div className="mt-44 md:mt-2">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
