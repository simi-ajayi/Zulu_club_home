import React from "react";
import "../../../pages/zulu_club//Home.css";

// import a2 from "../../../assets/images/img/12.png";
// import a3 from "../../../assets/images/img/13.png";
// import a4 from "../../../assets/images/img/14.png";
// import a5 from "../../../assets/images/img/15.png";
// import a6 from "../../../assets/images/img/16.png";
// import a7 from "../../../assets/images/img/17.png";
// import a8 from "../../../assets/images/img/18.png";
// import a9 from "../../../assets/images/img/19.png";
const Cont4 = ({ data }) => {
  console.log("cont4",data)
  return (
    <div class="mt-20 container text-center mx-auto text-white font-raleway font-semibold text-5xl">
      <h1 class="pb-12 text-4xl font-bold">  {data.title}</h1>
      <div class="pt-3 mx-auto">
        <div class="new1 justify-center flex flex-wrap text-lg mx-auto">
          <div class="new-item1 flex flex-col flex-wrap items-center">
            <div class="img-container">
              <img src={data.a2} alt="Image 4" class="w-full h-auto" />
              <img
                src={data.a3}
                alt="Image 4"
                class="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h2 class="mt-4">{data.subtitle1}</h2>
          </div>
          <div class="new-item1 flex flex-col flex-wrap items-center">
            <div class="img-container">
              <img src={data.a4} alt="Image 4" class="w-full h-auto" />
              <img
                src={data.a5}
                alt="Image 4"
                class="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h2 class="mt-4">{data.subtitle2}</h2>
          </div>
          <div class="new-item1 flex flex-col items-center">
            <div class="img-container">
              <img src={data.a6} alt="Image 4" class="w-full h-auto" />
              <img
                src={data.a7}
                alt="Image 4"
                class="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h2 class="mt-4">{data.subtitle3}</h2>
          </div>
          <div class="new-item1 flex flex-col items-center">
            <div class="img-container">
              <img src={data.a8} alt="Image 4" class="w-full h-auto" />
              <img
                src={data.a9}
                alt="Image 4"
                class="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h2 class="mt-4">{data.subtitle4}</h2>
          </div>
        </div>

        {/* <!-- Mobile Carousel --> */}
        {/* <div class="lg:hidden">
          <div id="carouselExampleAutoplaying" class="relative">
            <div class="relative overflow-hidden">
              <div class="carousel-inner">
                
                <div class="carousel-item active">
                  <div class="flex flex-col items-center">
                    <div class="relative">
                      <img
                        src="./images/img/12.png"
                        alt="Image 4"
                        class="w-full h-auto"
                      />
                      <img
                        src="./images/img/13.png"
                        alt="Image 4"
                        class="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <h2 class="mt-4 text-xl font-semibold">
                      Website & Mobile App
                    </h2>
                  </div>
                </div>
               
              </div>
              <button
                class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span class="text-2xl">&lt;</span>
                <span class="sr-only">Previous</span>
              </button>
              <button
                class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span class="text-2xl">&gt;</span>
                <span class="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Cont4;
