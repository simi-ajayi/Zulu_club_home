import React from "react";
import "../../../pages/zulu_club/Home.css";
import zululogo from '../../../assets/images/New_ImgesFor/4.png'
const Business = ({ data }) => {
  return (
    <div>
      <div className="text-content text-white">
        <h1 className="md:text-4xl absolute top-[18%] left-[10%] text-[40px] leading-[40px] font-bold" style={{textShadow:'2px 2px 2px black'}}>
        Celebrate Your <br />
<span className="text-yellow-200">Uniqueness</span>.
{/* Celebrate Your Uniqueness */}

        </h1>
        <h3 className="text-md hidden leading-9 sm:leading-10 sm:text-2xl font-medium">{data[0].tags1}</h3>
        <h3 className="text-md hidden leading-9 sm:leading-10 sm:text-2xl font-medium">{data[0].tags2}</h3>
        <h3 className="text-md hidden leading-9 sm:leading-10 sm:text-2xl font-medium">{data[0].tags3}</h3>
        <h3 className="text-md hidden leading-9 sm:leading-10 sm:text-2xl font-medium">{data[0].tags4}</h3>
      </div>
      {/* <div className={`${data[0].imgbg} cont1 h-screen container mx-auto mt-0 bg-cover bg-center rounded-[20px]`}></div>
      <img src={zululogo} className="rounded-[35px] " alt="" /> */}

      {/* <div className="hidden sm:block">
        <div className={`${data[0].imgbg} cont1 sm:h-[50vh] md:h-[71vh] lg:h-screen w-full container mx-auto mt-0 bg-contain bg-center rounded-[20px]`}></div>
      </div> */}

      <div className="flex justify-center mt-5">
        <img src={zululogo} className="" alt="Zulu Logo" />
      </div>
    </div>
  );
};

export default Business;



// Business