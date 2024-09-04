import React from "react";
import "../../../pages/zulu_club/Home.css";
import a1 from "../../../assets/images/mapindia2.png";

const Cont8 = () => {
  return (
    <div class="cont11 mx-auto container bg-image bg-no-repeat bg-cover text-white">
      <div class="bg-color inside flex flex-wrap justify-center items-center">
        <div class="inside-Left w-full lg:w-5/12 order-1 lg:order-none text-left pl-4 lg:pl-0">
          <h1 class="highlight text-4xl lg:text-5xl">
            Zulu offers the <span class="highlight2">best</span> in <br />
            fashion ahead of time
          </h1>
          <h3 class="text-2xl lg:text-3xl">Best consumer experience</h3>
          <h3 class="text-2xl lg:text-3xl">Best product assortment</h3>
          {/* <h3 class="text-2xl lg:text-3xl">Best B2B network</h3> */}
          <h3 class="text-2xl lg:text-3xl">Best partnerships</h3>
          <h3 class="text-2xl lg:text-3xl">Best ops & planning</h3>
          <button class="btn1 mt-12">GET STARTED</button>
        </div>
        <div class="inside-Right w-full lg:w-1/2 order-none lg:order-1">
          <img
            src={a1}
            class="block w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Cont8;
