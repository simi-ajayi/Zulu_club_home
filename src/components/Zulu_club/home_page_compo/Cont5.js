import React from "react";
// import "../../../pages/zulu_club/Home.css";

import a1 from "../../../assets/images/image5.webp";
const Cont5 = () => {
  return (
    <div className="container">
      <div className="cont5 container mt-20 relative mx-auto">
        <img
          src={a1}
          alt="Description of the image"
          className="w-full object-contain rounded-lg"
        />
        <div className="text-overlay3 text-[#2C1129]">
          <h1>
            JOIN <br />
            THE <br />
            CLUB
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cont5;
