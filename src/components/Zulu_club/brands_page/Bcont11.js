import React from "react";
import "../../../assets/style/brand_page.css";

const Bcont11 = () => {
  return (
    <div
      className="cont11  bg-cover bg-center mt-20 rounded-[20px]"
      //   style="
      //   font-family: 'Raleway';
      //   background-image: url('../images/Brands/n3.webp');
      // "
    >
      <div className="py-12 bg-[#1f0a1de1]">
        <h1 className="mb-5 text-4xl pt-4 font-bold px-1 text-white">
          Zulu was born to create a
          <span className="highlight2 text-yellow-400"> new</span> experience.
        </h1>
        <ul className="text-white space-y-3 px-1">
          <li>Everyone has a destiny...</li>
          <li>The heart wants what it wants...</li>
          <li>If you hear a calling from inside, you should do it...</li>
          <li className="font-bold">
            People of Zulu like to work hard and impress other people.
          </li>
          <li>
            We like operations, we love fashion. We understand you - we are
            building this.
          </li>
          <li>
            We are doing it coz this is
            <span className="highlight font-bold text-yellow-400">
              {" "}
              exactly our kind of thing.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bcont11;
