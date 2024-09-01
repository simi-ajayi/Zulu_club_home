import React from "react";
import { url } from "../api/Url";


const Brandcard = ({ brand_name, brand_img }) => {
  return (
    <div className="w-[100px]">
      {
        brand_img ?
          <>
            <img src={`${url}/${brand_img}`} alt="" className="size-[100px] bg-gray-200  rounded-lg" />
          </>
          :
          <>
            <img src={`${url}/${brand_img}`} alt="" className="size-[100px] bg-gray-200  rounded-lg" />

          </>
         
      }

      <p>
        {
       brand_name
        }
      </p>
    </div>
  );
};

export default Brandcard;
