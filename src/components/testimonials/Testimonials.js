import React from "react";
import Card5 from "../cards/Card5";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-left font-bold text-2xl">Testimonials</h1>
        <Link to="" className="text-blue-700">
          view all
        </Link>
      </div>
      <div className="flex justify-between gap-8 mt-5 overflow-hidden">
        <Card5 name={Testimonials} />
        <Card5 name={Testimonials} />
        <Card5 name={Testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;
