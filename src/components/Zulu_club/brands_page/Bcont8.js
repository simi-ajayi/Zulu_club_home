import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../cards/styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import a1 from "../../../assets/images/q11.webp";
import a2 from "../../../assets/images/q12.webp";
import a3 from "../../../assets/images/q13.webp";
import a4 from "../../../assets/images/q14.webp";
import a5 from "../../../assets/images/q15.webp";
import "../../../assets/style/brand_page.css";

const Bcont8 = () => {
  return (
    <div className="cont8 mt-20 mx-auto">
      <div className="">
        <h1 className="pb-5 text-3xl font-bold">
          Offering a new experience is the <span class="highlight"> ONLY</span>{" "}
          answer
        </h1>
      </div>
      <div className="flex justify-evenly flex-wrap items-center mt-10">
      {/*   <div className="w-[100%] h-[100%]">
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
              <img src={a1} alt="" className="rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a2} alt="" className="rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a3} alt="" className="rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a4} alt="" className="rounded-[10px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a5} alt="" className="rounded-[10px]" />
            </SwiperSlide>
          </Swiper>
        </div> */}
        <div className="">
          <ul className="ml-10" style={{ textAlign: 'center' }}>
            <li>Create a differentiation</li>
            <li>Truly engage the consumer</li>
            <li>Cross-sell other products</li>
            <li>Think premium products</li>
            <li>Think virality & scale</li>
            <li className="highlight">Truly become a BRAND</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bcont8;
