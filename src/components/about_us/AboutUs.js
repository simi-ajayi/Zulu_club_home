import React from "react";
import { Link } from "react-router-dom";

const   AboutUs = ({ data }) => {
  return (
    <>
      <div className="">
        <h1></h1>
      </div>
      
        <div className="text-left flex flex-col gap-2">
            <h1 className="text-left font-bold text-[22px]" style={{ color: `${data?.component?.image_gallery?.color}` }}>{data?.component?.aboutus?.title}</h1>
            {data?.component?.aboutus?.text}
          </div>
        
        <div className="w-full mt-5">
          <img
            src="https://zulushop.in/uploads/seller/Frame_1300931.png"
            alt="Vidyard About Us"
            className="rounded-xl"
          />
        </div>
    </>
  );
};

export default AboutUs;
