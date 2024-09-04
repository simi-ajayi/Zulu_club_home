import React from "react";
import "../../../pages/zulu_club/Home.css";
const Cont1 = ({ data }) => {
  return (
    <div
      className={`${data[0].imgbg} cont1 container mx-auto mt-0 bg-cover bg-center rounded-[20px]`}
    >
      <div className="text-content text-white">
        <h1 className="text-4xl font-bold leading-[3.5rem]">
          {data[0].title1} <br />
          {data[0].title2}
        </h1>
        <h3 className="text-2xl font-medium">{data[0].tags1}</h3>
        <h3 className="text-2xl font-medium">{data[0].tags2}</h3>
        <h3 className="text-2xl font-medium">{data[0].tags3}</h3>
        <h3 className="text-2xl font-medium">{data[0].tags4}</h3>
      </div>
    </div>
  );
};

export default Cont1;
