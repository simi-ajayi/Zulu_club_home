import React from "react";
import { Link } from "react-router-dom";
import { url } from "../api/Url";

const Card3 = ({ image, title, price, discount }) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-slate-100 group w-2/5">
      {/* <div className="rounded-xl shadow-md overflow-hidden bg-slate-100 group h-[350px] w-1/5"> */}
      <img
        src={`${url}/${image}`}
        className="w-full h-[300px] bg-slate-500 object-cover"
        alt=""
      />
      <p>{title}</p>
      <p>{discount}</p>
      <strike>{price}</strike>
      <Link to="/productpage ">
        <button className="bg-[#303030ea] w-full py-3 text-white group-hover:-translate-y-12 translate-y-12 transition-all duration-300">
          Shop now
        </button>
      </Link>
    </div>
  );
};

export default Card3;
