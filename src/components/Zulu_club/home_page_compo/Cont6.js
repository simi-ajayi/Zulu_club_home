import React from "react";

import a1 from "../../../assets/images/image2-1.webp";
import a2 from "../../../assets/images/image2-2.webp";
import a3 from "../../../assets/images/image2-3.webp";
import a4 from "../../../assets/images/image2-4.webp";
import a11 from "../../../assets/images/legacy-businesses.webp";
const Cont6 = () => {
  return (
    <div className="container mx-auto text-center mt-20 font-bold text-4xl text-white">
      <h1 className="pb-10 font-bold text-4xl">
        We have just the right avatar waiting for you...
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <p className="text-center">Women <br /> & Beauty</p>
        </div>
        <div className="flex justify-center items-center flex-col   card-item">
          <div className="img-container">
            <img
              src={a2}
              alt="D2C & Boutiques"
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <img
              src={a11}
              alt="Rising Brands"
              className="w-full h-auto absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
            />
          </div>
          <p className="mt-2 text-center">Menswear <br /> Brands</p>
        </div>
        <div className="flex justify-center items-center flex-col   card-item">
          <div className="img-container">
            <img
              src={a3}
              alt="D2C & Boutiques"
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <img
              src={a11}
              alt="D2C & Boutiques"
              className="w-full h-auto absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
            />
          </div>
          <p className="mt-2 text-center">Kids <br /> Brands</p>
        </div>
        <div className="flex justify-center items-center flex-col  card-item">
          <div className="img-container">
            <img
              src={a4}
              alt="Private Labels"
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <img
              src={a11}
              alt="Private Labels"
              className="w-full h-auto absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
            />
          </div>
          <p className="mt-2 text-center">Home <br /> Furnishing</p>
        </div>
      </div>
    </div>
  );
};

export default Cont6;