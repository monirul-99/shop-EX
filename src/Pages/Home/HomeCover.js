import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import Cover1 from "../images/cover1.jpg";
import Cover2 from "../images/cover2.jpg";
import Cover3 from "../images/cover3.jpg";
const HomeCover = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-gray-400">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className=""
      >
        <SwiperSlide>
          <img src={Cover1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCover;
