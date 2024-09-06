import React from "react";
import Banner2 from "../cards/Banner2";

const OutletBanner = ({data}) => {
  return (
    <div className="mt-10">
      <h1 className="text-left font-bold text-[22px]" style={{color:`${data?.component?.image_gallery?.color}`}}>{data?.component?.store_banner?.title}</h1>
      <div className="flex justify-center items-center mt-5">
        <Banner2 />
      </div>
    </div>
  );
};

export default OutletBanner;
