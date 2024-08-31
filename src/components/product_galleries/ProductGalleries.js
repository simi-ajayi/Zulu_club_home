import React from "react";
import Card3 from "../cards/Card3";
import { Link } from "react-router-dom";

const ProductGalleries = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-left font-bold text-2xl">Products</h1>
        <Link to="" className="text-blue-700">
          view all
        </Link>
      </div>
      <div className="flex justify-between gap-8 mt-5">
        <Card3 />
        <Card3 />
        <Card3 />
        <Card3 />
      </div>
    </div>
  );
};

export default ProductGalleries;
