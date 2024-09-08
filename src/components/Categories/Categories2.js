import React from "react";
import Card4 from "../cards/Card4";
import { Link } from "react-router-dom";

const Categories2 = ({ data }) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-left font-bold text-[22px]" style={{ color: `${data?.component?.image_gallery?.color}` }}>
          {data?.component?.categorycard?.title || "Categories"}
        </h1>
        <Link to="/AllCategories" className="text-blue-700">
          view all
        </Link>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-8 mt-5">
        {data.map((item, index) => {
          const imageUrl = item.image;
          return (
            <Link to="/" key={index}>
              <Card4 image={imageUrl} title={item.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories2;