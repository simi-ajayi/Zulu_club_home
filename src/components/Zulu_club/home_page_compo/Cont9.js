import React from "react";
import "../../../pages/zulu_club/Home.css";
import a1 from "../../../assets/images/image6-1.webp";
import a2 from "../../../assets/images/image6-2.webp";
import a3 from "../../../assets/images/ZULU AI ART.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../cards/styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Cont9 = () => {
  return (
    <div class="cont7 container mx-auto mt-20 w-11/12 bg-cover bg-center rounded-[20px]">
      <div class="steps-container py-2 pt-5 lg:py-20 ">
        <h1 class="pb-3 lg:pb-10 px-2 text-black text-2xl lg:text-4xl font-bold text-center">
          You are 3 steps away from the club, take the 1st one.
        </h1>
        <div class="steps hidden px-5 md:flex flex-wrap justify-around items-center h-full">
          <div class="step">
            <div class="relative">
              <img
                src={a1}
                alt="Step 1 Image"
                class="absolute"
              />
              <div class="h42 flex justify-center items-center">
                <p>
                  Select a website template to customize your brand’s unique
                  online presence and showcase your style to potential
                  customers.
                </p>
              </div>
            </div>
            <p>
              Step 1: <br />
              Create your Digital Avatar
            </p>
          </div>
          <div class="step">
            <div class="relative">
              <img
                src={a2}
                alt="Step 2 Image"
                class="absolute"
              />
              <div class="h42 flex justify-center items-center">
                <p>
                  Add or create products, banners, videos, blogs, and other
                  content to create a rich, engaging catalog that attracts and
                  informs your audience.
                </p>
              </div>
            </div>
            <p>
              Step 2: <br />
              Build your Catalog Content
            </p>
          </div>
          <div class="step">
            <div class="relative">
              <img
                src={a3}
                alt="Step 3 Image"
                class="absolute"
              />
              <div class="h42 flex justify-center items-center">
                <p>
                  Select a website template to customize your brand’s unique
                  online presence and showcase your style to potential
                  customers.
                </p>
              </div>
            </div>
            <p>
              Step 3: <br />
              Go Live, Start Winning
            </p>
          </div>
        </div>

        {/* <div class="steps px-4 block md:hidden">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide w-full"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="step">
                  <div class="relative">
                    <img
                      src="./images/image6-1.webp"
                      alt="Step 1 Image"
                      class="absolute"
                    />
                    <div class="h42 flex justify-center items-center">
                      <p class="text-red-700">
                        Create your <br />
                        Digital Avatar
                      </p>
                    </div>
                  </div>
                  <p>
                    Step 1: <br />
                    Create your Digital Avatar
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="step">
                  <div class="relative">
                    <img
                      src="./images/image6-2.webp"
                      alt="Step 2 Image"
                      class="absolute"
                    />
                    <div class="h42 flex justify-center items-center">
                      <p class="text-red-700">
                        Create your <br />
                        Digital Avatar
                      </p>
                    </div>
                  </div>
                  <p>
                    Step 2: <br />
                    Build your Catalog Content
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="step">
                  <div class="relative">
                    <img
                      src="./images/ZULU AI ART.png"
                      alt="Step 3 Image"
                      class="absolute"
                    />
                    <div class="h42 flex justify-center items-center">
                      <p class="text-red-700">
                        Create your <br />
                        Digital Avatar
                      </p>
                    </div>
                  </div>
                  <p>
                    Step 3: <br />
                    Go Live, Start Winning
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </button>
          </div>
        </div> */}


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
                <div class="carousel-item active">
                  <div class="step">
                    <div class="relative">
                      <img
                        src="./images/image6-1.webp"
                        alt="Step 1 Image"
                        class="absolute"
                      />
                      <div class="h42 flex justify-center items-center">
                        <p class="text-red-700">
                          Create your <br />
                          Digital Avatar
                        </p>
                      </div>
                    </div>
                    <p>
                      Step 1: <br />
                      Create your Digital Avatar
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="carousel-item">
                  <div class="step">
                    <div class="relative">
                      <img
                        src="./images/image6-2.webp"
                        alt="Step 2 Image"
                        class="absolute"
                      />
                      <div class="h42 flex justify-center items-center">
                        <p class="text-red-700">
                          Create your <br />
                          Digital Avatar
                        </p>
                      </div>
                    </div>
                    <p>
                      Step 2: <br />
                      Build your Catalog Content
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="carousel-item">
                  <div class="step">
                    <div class="relative">
                      <img
                        src="./images/ZULU AI ART.png"
                        alt="Step 3 Image"
                        class="absolute"
                      />
                      <div class="h42 flex justify-center items-center">
                        <p class="text-red-700">
                          Create your <br />
                          Digital Avatar
                        </p>
                      </div>
                    </div>
                    <p>
                      Step 3: <br />
                      Go Live, Start Winning
                    </p>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cont9;
