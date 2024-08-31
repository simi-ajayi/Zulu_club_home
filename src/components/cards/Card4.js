import React from "react";

export const Card4 = ({name,width,height}) => {
  return (
    <div className={`rounded-xl overflow-hidden bg-slate-200 w-[${width}] `}>
      <img
        src="https://zulushop.in/uploads/seller/Frame_1300941.png"
        className={`w-full h-[${height}] bg-slate-500 object-cover`}
        alt=""
      />
      <p className="py-5">{name}</p>
    </div>
  );
};
