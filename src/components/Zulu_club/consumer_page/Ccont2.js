import React from "react";
import "../../../assets/style/aboutus_page.css";
import logo from "../../../assets/images/zulu-logo-2.png";

const Ccont2 = () => {
  return (
    <div>
    <div className="Acont1 container mb-5 bg-cover bg-center rounded-[20px]">
      <div className="bg-[#1f0a1d7f] h-full pt-20">
        <h1 className="text-4xl font-bold pb-5">
          {/* Zulu is an <span className="highlight">exciting</span> tech
          platform. */}
          India’s most exciting <br /> Omni channel <span className="text-yellow-200">Fashion</span>  market place
        </h1>

        {/* <div className="flex justify-center ">
          <img
            onclick="scaleDiv(this)"
            className="my-5 cursor-pointer w-[180px] aspect-[1/1] text-center"
            src={logo}
            alt=""
          />
        </div> */}
        <p className="text-xl mt-72 py-8 font-light px-2 leading-[30px] sm:leading-[50px] text-[#c9c3c9] bg-[#1f0a1dd7]">
          Fashion is all about excitement. <br />Zulu was born to find & deliver that <span className="font-bold text-yellow-200">excitement</span> to you <span className="text-yellow-200 font-bold">in person</span>
          &nbsp; & online.
        </p>
        <div className="h-[10] w-full"></div>
      </div>
    </div>
  </div>
  );
};

export default Ccont2;
