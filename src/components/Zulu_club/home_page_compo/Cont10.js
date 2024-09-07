import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../cards/styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Cont10 = () => {
  return (
    <div class="cont10 container w-full mx-auto mt-20 py-10 bg-cover bg-center rounded-[20px]">
      <div class="bg-color bg-transparent">
        <div class="a1Cards hidden md:flex md:leading-3 flex-wrap justify-around px-3 items-center">
          <div class="a1card w-full md:w-[29%]">
            <h4 class="font-bold">10x Better</h4>
            <p>
              Our website is way more powerful, it has countless more features &
              we are a club and offer much more than a website.
            </p>
            <a href="./pages/explore.html">
              <button class="btn1">Explore</button>
            </a>
          </div>
          <div class="a1card w-full md:w-[29%] mt-3 md:mt-0">
            <h4 class="font-bold">Fashion Focus</h4>
            <p>
              We are the only solution tailor-made for Indian Fashion
              businesses, all our competitors offer generic solutions.
            </p>
            <a href="./pages/explore.html">
              <button class="btn1">Explore</button>
            </a>
          </div>
          <div class="a1card w-full md:w-[29%] mt-3 md:mt-0">
            <h4 class="font-bold">Growth Engine</h4>
            <p class="text-white">
              Zulu gives you access to thousands of customers in your area to
              grow you business multi-fold.
            </p>
            <a href="./pages/explore.html">
              <button class="btn1">Explore</button>
            </a>
          </div>
        </div>

        {/* mobile view */}

        <div className="block md:hidden main-cont-R w-full pt-0 lg:pt-4 order-0 lg:order-1">
          <div className="object-cover">
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
              <SwiperSlide className="h-full">
                <div class="a1card w-full">
                  <h4 class="font-bold">10x Better</h4>
                  <p>
                    Our website is way more powerful, it has countless more
                    features & we are a club and offer much more than a website.
                  </p>
                  <a href="./pages/explore.html">
                    <button class="btn1">Explore</button>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="a1card w-full">
                  <h4 class="font-bold">Fashion Focus</h4>
                  <p>
                    We are the only solution tailor-made for Indian Fashion
                    businesses, all our competitors offer generic solutions.
                  </p>
                  <a href="./pages/explore.html">
                    <button class="btn1">Explore</button>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="a1card w-full">
                  <h4 class="font-bold">80% Cheaper</h4>
                  <p>
                    Zulu prices are much lower with 0 sales commissions. We will
                    be useful every hour & yet will be your smallest monthly
                    bill.
                  </p>
                  <a href="./pages/explore.html">
                    <button class="btn1">Explore</button>
                  </a>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cont10;
