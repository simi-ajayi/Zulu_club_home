import React from "react";

const Cont10 = () => {
  return (
    <div class="cont10 container w-full mx-auto mt-20 py-10 bg-cover bg-center rounded-[20px]">
      <div class="bg-color bg-transparent">
        <div class="a1Cards hidden md:flex flex-wrap justify-around py-5 px-3 items-center">
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
        <div class="a1Cards block md:hidden">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner rounded-lg">
              <div class="carousel-item active">
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
              </div>
              <div class="carousel-item">
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
              </div>
              <div class="carousel-item">
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
        </div>
      </div>
    </div>
  );
};

export default Cont10;
