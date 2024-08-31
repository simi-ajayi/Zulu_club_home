import React from "react";
import Categories from "../categaries_menu/CategoriesMenu";
import Card2 from "../cards/Card2";
import { Link } from "react-router-dom";

const BrandsSection = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-left font-bold text-2xl">Brands</h1>
        <Link to='' className="text-blue-700">view all</Link>
      </div>
      <div className="flex justify-between gap-8 mt-5">
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
    </div>
  );
};

export default BrandsSection;
