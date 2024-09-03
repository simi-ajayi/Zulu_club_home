import React from "react";
import "../../../assets/style/brand_page.css";
import a1 from "../../../assets/images/zulu-logo.png"

const Bcont12 = () => {
  return (
    <div
      className="cont12  text-center py-12 mt-3"
    >
      <h1 className="text-3xl font-bold">It's a match made in heaven?</h1>
      <h4 className="text-xl mt-3">Don't think twice.</h4>
      <img
        src={a1}
        className="my-3 mx-auto w-[220px]"
        alt=""
      />
      <div>
        <button
          className="btn1 bg-blue-500 text-white font-semibold py-2 px-4 rounded w-[200px]"
        >
          Get Started
        </button>
      </div>
      <h6 className="pt-8 text-xs">We love you too ;)</h6>
    </div>
  );
};

export default Bcont12;
