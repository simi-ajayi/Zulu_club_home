import React from "react";
// import "../../../pages/zulu_club/Home.css";

import a1 from "../../../assets/images/image5.webp";
const Cont5 = () => {
  return (
    <div className="container">
      <div className="cont5 flex flex-col gap-5 container mt-20 relative mx-auto">
      <div className="text-[#fff] text-left">
          <h1 className="highlight text-[40px] relative top-[-37px] sm:top-0 font-bold text-center ">
            Join the club
          </h1>
        </div>
        <img
          src={a1}
          alt="Description of the image"
          className="w-full object-cover rounded-lg"
        />
        {/* <h4 className="highlight font-bold">Join the club.</h4> */}
        {/* <div className="text-overlay3 text-[#2C1129]">
          <h1>
            JOIN <br />
            THE <br />
            CLUB
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default Cont5;
