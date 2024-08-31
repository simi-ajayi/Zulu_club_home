import React from "react";
import { Card4 } from "../cards/Card4";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-left font-bold text-2xl">Blogs</h1>
        <Link to="" className="text-blue-700">
          view all
        </Link>
      </div>
      <div className="flex justify-between gap-8 mt-5">
        <Card4 name={"blog"} width={"31%"} />
        <Card4 name={"blog"} width={"31%"} />
        <Card4 name={"blog"} width={"31%"} />
      </div>
    </div>
  );
};

export default Blogs;
