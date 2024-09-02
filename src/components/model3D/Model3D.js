import React from "react";
import { Link } from "react-router-dom";

const Model3D = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-left font-bold text-2xl">3D Models</h1>
        <Link to="" className="text-blue-700">
          view all
        </Link>
      </div>
    </div>
  );
};

export default Model3D;
