import React from "react";
import "../../../assets/style/brand_page.css";

const Bcont7Card = ({ data, title, width1, width2, bgimg }) => {
  return (
    <div className={`${bgimg} mt-5 bg-cover bg-center bg-no-repeat`}>
      <div className="py-12 bg-[#1f0a1de1]">
        <h1 className="mb-5 text-4xl pt-4 font-bold text-white"> {title}</h1>
        <div className="text-contents text-start px-4 lg:px-0">
          {data.map((item, index) => {
            return (
              <div className="thought  flex flex-col gap-3 w-full" key={index}>
                <div className="num">{item.num}</div>
                <div className={`tSpan1 text-center`}>{item.tSpan1}</div>
                <div className={`tSpan2 text-center`}>{item.tSpan2}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bcont7Card;
