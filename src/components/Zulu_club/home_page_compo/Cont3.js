import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../cards/styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "../../../pages/zulu_club//Home.css";
import im1 from "../../../assets/images/a.png";
import im2 from "../../../assets/images/b.png";
import im3 from "../../../assets/images/c.png";
import im4 from "../../../assets/images/d.png";
import im5 from "../../../assets/images/e.png";
import im6 from "../../../assets/images/f.png";
import im7 from "../../../assets/images/g.png";
import im8 from "../../../assets/images/h.png";
import im9 from "../../../assets/images/i.png";

import a1 from "../../../assets/images/q11.webp";
import a2 from "../../../assets/images/q12.webp";
import a3 from "../../../assets/images/q13.webp";
import a4 from "../../../assets/images/q14.webp";
import a5 from "../../../assets/images/q15.webp";
const Cont3 = () => {
  // function scaleDiv(element) {
  //   element.style.transform = "scale(0.9)";
  //   element.style.transition = "all .2s";

  //   setTimeout(() => {
  //     element.style.transform = "scale(1)";
  //   }, 150);
  // }
  return (
    <div className="cont3 py-5 mt-10 container text-center mx-auto text-white font-raleway font-semibold text-5xl">
      {/* // <div className="cont3  mx-auto text-center bg-cover bg-center py-10 text-white rounded-[20px]"> */}
      <div className="bg-color bg-transparent px-3">
        <h1 className="py-5 font-bold text-3xl sm:text-4xl">
          Zulu gives you <span className="text-yellow-200">everything</span> you need to grow
        </h1>
        <div className="main-content pb-3 flex flex-wrap justify-evenly mt-10">
          <div className="main-cont-L w-full lg:w-[40%] mt-4 lg:mt-0 order-1 lg:order-none">
            <div className="new-item"> 
              <img src={im1} alt="Image 1" />
            </div>
            <div className="new-item" onclick="scaleDiv(this)">
              <img src={im2} alt="Image 2" />
            </div>
            <div className="new-item" onclick="scaleDiv(this)">
              <img src={im3} alt="Image 3" />
            </div>
            <div className="new-item" onclick="scaleDiv(this)">
              <img src={im4} alt="Image 4" />
            </div>
            <div className="new-item" onclick="scaleDiv(this)">
              <img src={im5} alt="Image 5" />
            </div>
            <div className="new-item" onclick="scaleDiv(this)">
              <img src={im6} alt="Image 6" />
            </div>
            <div className="new-item" onclick="scaleDiv(this)">
              <img src={im7} alt="Image 7" />
            </div>
            <div className="new-item" onclick="scaleDiv(this)">
              <img src={im8} alt="Image 8" />
            </div>
            <div className="new-item" onclick="scaleDiv(this)">
              <img src={im9} alt="Image 9" />
            </div>
          </div>
          <div className="main-cont-R w-full xl:w-5/12 pt-0 lg:pt-4 order-0 lg:order-1">
            <div className="h-full">
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
                <SwiperSlide>
                  <img src={a1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={a2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={a3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={a4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={a5} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <p className="leading-snug mt-7 text-2xl text-center hidden lg:block">
              Zulu is the only technology solution you will ever need. 
            </p>
            <div className="img hidden">
              <img className="banner1" src="./images/qw.webp" alt="Banner 1" />
              <h2 className=" sm:text-lg mx-[7%]">
                Zulu is the only technology solution you will ever need. All the
                tools that you already use & many more that you never dreamt of.
              </h2>
            </div>
          </div>
        </div>
        <p className="w-full text-lg block lg:hidden">
          Zulu is the only technology solution you will ever need. All the tools
          that you already use & many more that you never dreamt of.
        </p>
      </div>
    </div>
  );
};

export default Cont3;
