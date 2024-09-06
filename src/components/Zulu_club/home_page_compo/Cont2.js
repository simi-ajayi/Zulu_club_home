import React from "react";
import a1 from "../../../assets/images/img/nc4.webp";
import a2 from "../../../assets/images/img/nc3.webp";
import a3 from "../../../assets/images/img/nc2.webp";
import a4 from "../../../assets/images/img/nc1.webp";
import a11 from "../../../assets/images/legacy-businesses.webp";
import a12 from "../../../assets/images/rising-brands.webp";
import a13 from "../../../assets/images/d2c-boutiques.webp";
import a14 from "../../../assets/images/private-labels.png.webp";
import "../../../pages/zulu_club/Home.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Cont2 = () => {
  return (
    <div className="container mx-auto text-center mt-20 font-bold text-4xl text-white">
      <h1 className="pb-10 font-bold text-4xl">
        World-class offering
        <span className="highlight"> tailor-made</span> for Indian businesses
      </h1>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="flex justify-center items-center flex-col card-item">
          <div className="img-container rounded-sm">
            <img
              src={a1}
              alt="Private Labels"
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <img
              src={a11}
              alt="Legacy Businesses"
              className="w-full h-auto absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
            />
          </div>
          <p className="text-center">
            Legacy <br />
            Businesses
          </p>
        </div>
        <div className="flex justify-center items-center flex-col   card-item">
          <div className="img-container">
            <img
              src={a2}
              alt="D2C & Boutiques"
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <img
              src={a12}
              alt="Rising Brands"
              className="w-full h-auto absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
            />
          </div>
          <p className="mt-2 text-center">
            Rising <br />
            Brands
          </p>
        </div>
        <div className="flex justify-center items-center flex-col   card-item">
          <div className="img-container">
            <img
              src={a3}
              alt="D2C & Boutiques"
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <img
              src={a13}
              alt="D2C & Boutiques"
              className="w-full h-auto absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
            />
          </div>
          <p className="mt-2 text-center">
            D2C & <br />
            Boutiques
          </p>
        </div>
        <div className="flex justify-center items-center flex-col  card-item">
          <div className="img-container">
            <img
              src={a4}
              alt="Private Labels"
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <img
              src={a14}
              alt="Private Labels"
              className="w-full h-auto absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
            />
          </div>
          <p className="mt-2 text-center">
            Private <br />
            Labels
          </p>
        </div>
      </div> */}

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
        <SwiperSlide className="w-fit h-fit">
        <img
              src={a2}
              alt="D2C & Boutiques"
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
        </SwiperSlide>
        <SwiperSlide>
        <img
              src={a2}
              alt="D2C & Boutiques"
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
        </SwiperSlide>
        <SwiperSlide>
        <img
              src={a2}
              alt="D2C & Boutiques"
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
        </SwiperSlide>
        <SwiperSlide>
        <img
              src={a2}
              alt="D2C & Boutiques"
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cont2;
