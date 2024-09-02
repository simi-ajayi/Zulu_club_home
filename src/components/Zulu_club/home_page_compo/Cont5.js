import React from "react";
import "../../../pages/zulu_club/Home.css";

import a1 from "../../../assets/images/image5.webp";
const Cont5 = () => {
  return (
    // <div className="mx-auto">
      <div className="cont5 relative py-5 mx-auto w-[65%]">
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
    // </div>
  );
};

export default Cont5;
