import React from "react";
import a1 from "../../../assets/images/phone1.png";
const Acont6 = () => {
  const dataLeft = [
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

  const dataRight = [
    {
      title11: "before",
      title12: "BUY",
      title21: "TRY",
      title22: "you",
    },
    {
      title11: "Xperiences",
      title12: "Online",
      title21: "Exciting",
      title22: "In-store",
    },
    {
      title11: "Led",
      title12: "Distribution",
      title21: "AI",
      title22: "Xperiencial",
    },
  ];
  return (
    <div className="container rounded-[20px] overflow-hidden mt-20">
      <div className="sm:p-10 p-2 flex flex-wrap w-full gap-5 justify-center sm:justify-around items-center">
        <div className="flex flex-col gap-2 sm:gap-24">
          {dataLeft.map((item, index) => (
            <div key={index} className="box flex text-md sm:text-2xl w-full ">
              <div className="w-1/2 text-nowrap border-dashed  border-[#eee] border-s-[2px]  border-t-[2px] border-b-[2px] text-right pr-3 py-3">
                {item.title11} <br /> {item.title12}
              </div>
              <div className="w-1/2 text-nowrap bg-white text-black text-left pl-3 py-3">
                {item.title21} <br /> {item.title22}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block w-[310px]">
          <img src={a1} alt="" className="w-full object-cover" />
        </div>
        <div className="flex flex-col gap-2 sm:gap-24">
          {dataRight.map((item, index) => (
            <div key={index} className="box flex text-md sm:text-2xl w-full ">
              <div className="w-1/2 text-nowrap  text-right pr-3 py-3 border-dashed   border-[#eee] border-s-[2px]  border-t-[2px] border-b-[2px]">
                {item.title21} <br /> {item.title22}
              </div>
              <div className="w-1/2 text-nowrap bg-white text-black text-left pl-3 py-3">
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
