import React from "react";
// import "../../../pages/zulu_club/Home.css";
//import zululogo from '../../assets/images/New_ImgesFor/bojhomes.png' //brandhome1.png
//import brandhome from '../../assets/images/New_ImgesFor/bijhome.png' // brandhome2.png

import zululogo from '../../assets/images/New_ImgesFor/brandhome1.png' //brandhome1.png
import brandhome from '../../assets/images/New_ImgesFor/brandhome2.png' // brandhome2.png


const BrandFirstComp = ({ data }) => {
    return (
        <div>
            <div className="text-content w-full text-white">
            {/*     <h1 className="md:text-4xl absolute top-[18%] left-[10%] text-[40px] leading-[40px] font-bold" style={{ textShadow: '2px 2px 2px black' }}>
                    {data[0].title1} <br />
                    {data[0].title2}
                </h1>
                <h3 className="text-md hidden leading-9 sm:leading-10 sm:text-2xl font-medium">{data[0].tags1}</h3>
                <h3 className="text-md hidden leading-9 sm:leading-10 sm:text-2xl font-medium">{data[0].tags2}</h3>
                <h3 className="text-md hidden leading-9 sm:leading-10 sm:text-2xl font-medium">{data[0].tags3}</h3>
                <h3 className="text-md hidden leading-9 sm:leading-10 sm:text-2xl font-medium">{data[0].tags4}</h3> */}
            </div>
            {/* <div className={`${brandhome} cont1 h-screen container mx-auto mt-0 bg-cover bg-center rounded-[20px]`}></div>
      <img src={zululogo} className="rounded-[35px] " alt="" /> */}

            <div className="hidden sm:block">
                <img src={zululogo} alt="" />
            </div>

            <div className="flex justify-center mt-5 sm:hidden">
                <img src={brandhome} className="" alt="Zulu Logo" />
            </div>
        </div>
    );
};

export default BrandFirstComp;



// BrandFirstComp