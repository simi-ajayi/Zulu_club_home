import React from "react";
import { url } from "../api/Url";


const Card2 = ({ zulu_category_name, seller_category_name, zulu_category_image, seller_category_image, zulu_category_id }) => {
  return (
    <div className="w-[100px]">
      {
        seller_category_image ?
          <>
            <img src={`${url}/${seller_category_image}`} alt="" className="size-[100px] bg-gray-200  rounded-lg" />
          </>
          :
          <>
            <img src={`${url}/${zulu_category_image}`} alt="" className="size-[100px] bg-gray-200  rounded-lg" />

          </>
         
      }

      <p>
        {
        seller_category_name ? seller_category_name : zulu_category_name
        }
      </p>
    </div>
  );
};

export default Card2;
