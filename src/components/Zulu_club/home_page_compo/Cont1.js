import React from "react";
import bg from "../../../assets/images/1.png";

const Cont1 = () => {
  var sectionStyle = {
    backgroundImage: "url(" + { bg } + ")",
  };
  return (
    <div>
      <div
        className="cont1 container mt-0 bg-cover bg-center"
        style={sectionStyle}
      >
        <div className="text-content">
          <h1 className="text-4xl font-bold">
            The premium <br />
            fashion Club.
          </h1>
          <h3 className="text-2xl font-medium">Retailers</h3>
          <h3 className="text-2xl font-medium">Boutiques</h3>
          <h3 className="text-2xl font-medium">Wholesalers</h3>
          <h3 className="text-2xl font-medium">Manufacturers</h3>
        </div>
      </div>
    </div>
  );
};

export default Cont1;
