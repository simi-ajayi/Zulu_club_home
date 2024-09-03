import React from "react";
import "../../../pages/zulu_club/Home.css";

import a1 from "../../../assets/images/image5.webp";
const Cont5 = () => {
  return (
    <div className="cont5 mt-20 relative mx-auto w-[750px]">
      <img
        src={a1}
        alt="Description of the image"
        className="w-full object-cover rounded-lg"
      />
      <div className="text-overlay3 text-[#2C1129]">
        <h1>
          JOIN <br />
          THE <br />
          CLUB
        </h1>
      </div>
    </div>
  );
};

export default Cont5;
