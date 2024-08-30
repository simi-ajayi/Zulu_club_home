import React from "react";
import Categories from "../categaries_menu/CategoriesMenu";
import Card2 from "../cards/Card2";

const BrandsSection = () => {
  return (
    <div className="mt-10">
      <h1 className="text-left font-bold text-2xl">Brands</h1>
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
