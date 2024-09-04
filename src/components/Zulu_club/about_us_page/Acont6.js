import React from "react";
import a1 from "../../../assets/images/phone1.png";
const Acont6 = () => {
  const dataRight = [
    {
      title11: "Infinite",
      title12: "Delivered",
      title21: "Choices",
      title22: "Instantly",
    },
    {
      title11: "Curated",
      title12: "both DESI",
      title21: "Collection",
      title22: "& VIDESI",
    },
    {
      title11: "Omni",
      title12: "On-demand",
      title21: "Channel",
      title22: "Distribution",
    },
  ];

  const dataLeft = [
    {
      title11: "TRY",
      title12: "you",
      title21: "before",
      title22: "BUY",
    },
    {
      title11: "Exciting",
      title12: "In-store",
      title21: "Xperiences",
      title22: "Online",
    },
    {
      title11: "AI",
      title12: "Xperiencial",
      title21: "Led",
      title22: "Distribution",
    },
  ];
  return (
    <div className="container rounded-[20px] overflow-hidden mt-20">
      <div className="p-10 flex justify-around items-center">
        <div className="flex flex-col gap-24">
          {dataRight.map((item, index) => (
            <div key={index} className="box flex text-2xl w-[350px] ">
              <div className="w-1/2 border-dashed  border-[#eee] border-[2px] text-right pr-3 py-3">
                {item.title11} <br /> {item.title12}
              </div>
              <div className="w-1/2 bg-white text-black text-left pl-3 py-3">
                {item.title21} <br /> {item.title22}
              </div>
            </div>
          ))}
        </div>
        <div className="w-[310px]">
          <img src={a1} alt="" className="w-full object-cover" />
        </div>
        <div className="flex flex-col gap-24">
          {dataLeft.map((item, index) => (
            <div key={index} className="box flex text-2xl w-[350px] ">
              <div className="w-1/2  text-right pr-3 py-3 border-dashed   border-[#eee] border-[2px]">
                {item.title21} <br /> {item.title22}
              </div>
              <div className="w-1/2 bg-white text-black text-left pl-3 py-3">
                {item.title11} <br /> {item.title12}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Acont6;