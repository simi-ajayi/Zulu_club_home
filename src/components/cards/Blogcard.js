import React from "react";
import { url } from "../api/Url";

export const Blogcard = ({name,width,height, title, id, Blogimage}) => {
  return (
    <div className={`rounded-xl overflow-hidden bg-slate-200 w-[${width}] `}>
     {
        Blogimage ?
          <>
            {/* <img src={`${url}/${Blogimage}`} alt="" className="size-[100px] bg-gray-200  rounded-lg" /> */}
            <img src={`${url}/${Blogimage}`} alt="" className="w-[266px] h-[266px] object-cover  rounded-lg" />
          </>
          :
          <>
           

          </>
         
      }
      <p className="py-5">{title}</p>
    </div>
  );
};
