import React from "react";
import { Card4 } from "../cards/Card4";

const Blogs = () => {
  return (
    <div className="mt-10">
      <h1 className="text-left font-bold text-2xl">Blogs</h1>
      <div className="flex justify-between gap-8 mt-5">
        <Card4 />
        <Card4 />
        <Card4 />
      </div>
    </div>
  );
};

export default Blogs;
