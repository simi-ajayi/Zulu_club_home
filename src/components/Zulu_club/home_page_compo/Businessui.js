import React from "react";
import "../../../pages/zulu_club/Bussiness.css";
import "../../../pages/zulu_club/Partner_image.css";
import destopimage from '../../../assets/images/New_ImgesFor/biz22.png' //biz22.png desptop
import mobileimage from '../../../assets/images/New_ImgesFor/biz2.png' //biz2.png mobile
const Businessui = ({ data }) => {
  return (
    <div>
      <div className="text-content text-white">
       
      </div>
      {/* <div className={`${data[0].imgbg} cont1 h-screen container mx-auto mt-0 bg-cover bg-center rounded-[20px]`}></div>
      <img src={zululogo} className="rounded-[35px] " alt="" /> */}

      {/* <div className="hidden sm:block">
        <div className={`${data[0].imgbg} cont1 sm:h-[50vh] md:h-[71vh] lg:h-screen w-full container mx-auto mt-0 bg-contain bg-center rounded-[20px]`}></div>
      </div> */}

      <div className="flex justify-center mt-5">
        <img src={destopimage} alt="Zulu Logo" className="desktop-image" />
        <img src={mobileimage} className="mobile-image" alt="Zulu Logo" />
      </div>
    </div>
  );
};

export default Businessui;



// Business