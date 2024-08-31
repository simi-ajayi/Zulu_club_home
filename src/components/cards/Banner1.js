import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner1 = ({ images }) => {
  // console.log(sliderImages);
  return (
    <div className="mt-10">
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
        }}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={`https://zulushop.in/uploads/seller/${item.file_name}`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner1;
