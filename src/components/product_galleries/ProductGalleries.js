import React from "react";
import Card3 from "../cards/Card3";

const ProductGalleries = () => {
  return (
    <div className="mt-10">
      <h1 className="text-left font-bold text-2xl">Products</h1>
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
