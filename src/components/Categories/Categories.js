import React, { useState, useEffect } from "react";
import Card3 from "../cards/Card3";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../api/Url";

const Categories = () => {
  const [categoriesdata, setCategoriesdata] = useState([]);

  const getCat = async () => {
    const json = JSON.stringify({ seller_id: "85" });
    try {
      let response = await axios.post(
        url + "/app/v1/api/seller_category_list",
        json
      );
      let data = await response.data.message;
      let setPrimaryCategory = data.filter((item) => item.is_primary === "yes");
      // console.log(setPrimaryCategory);
      setCategoriesdata(setPrimaryCategory.slice(0,4));
    } catch (error) {
      setCategoriesdata([]);
    }
  };
  useEffect(() => {
    getCat();
  }, []);
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-left font-bold text-2xl">Categories</h1>
        <Link to="" className="text-blue-700">
          view all
        </Link>
      </div>
      <div className="flex justify-between gap-8 mt-5">
        {categoriesdata.map((item,index) => (
          <Link to="/" key={index}>
            {/* <Link to={`/categories/${item.category_id}`} key={item.category_id}> */}
            <Card3 image={item.zulu_category_image} title={item.zulu_category_name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
