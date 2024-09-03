import React, { useEffect, useState } from "react";
import Card2 from "../cards/Card2";
import { url } from "../api/Url";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoriesMenu = () => {
  const [categoriesdata, setCategoriesdata] = useState([]);

  const getCat = async () => {
    const json = JSON.stringify({ seller_id: "85" });
    axios
      .post(url + "/app/v1/api/seller_category_list", json)
      .then((res) => {
        //    console.log('data' + JSON.stringify(res.data.message));
        setCategoriesdata(res.data.message);
      })
      .catch(() => {
        setCategoriesdata([]);
      });
  };
  useEffect(() => {
    getCat();
  }, []);
  return (
    <div className="mt-10">
      <div className="mt-5">
        <div className="flex justify-between mt-10 mb-5 items-center">
          <div className="">
            <h1 className="text-left font-bold text-2xl">Categories</h1>
            {/* {JSON.stringify(categoriesdata)} */}
          </div>
          <Link to="" className="text-blue-700">
            view all
          </Link>
        </div>
        <div className="flex justify-between mt-5 gap-8 flex-wrap">
          {categoriesdata &&
            categoriesdata.map((user) => (
              <div key={user.id}>
                <Card2
                  className="p-4"
                  zulu_category_name={user.zulu_category_name}
                  seller_category_name={user.seller_category_name}
                  zulu_category_image={user.zulu_category_image}
                  seller_category_image={user.seller_category_image}
                  zulu_category_id={user.zulu_category_id}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesMenu;
