import React from "react";
import Card5 from "../cards/Card5";

const Testimonials = () => {
  return (
    <div className="mt-10">
      <h1 className="text-left font-bold text-2xl">Blogs</h1>
      <div className="flex justify-between gap-8 mt-5 overflow-hidden">
        <Card5 />
        <Card5 />
        <Card5 />
      </div>
    </div>
  );
};

export default Testimonials;
