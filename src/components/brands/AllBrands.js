import React, { useEffect, useState } from "react";
import Brandcard from '../cards/Brandcard';
import { Link } from "react-router-dom";
import { url } from "../api/Url";
import axios from "axios";

const AllBrands = ({ data }) => {
  const [branddata, setBranddata] = useState([]);

  const getBrd = async () => {
    const json = JSON.stringify({ seller_id: "85" });
    axios.post(url + '/app/v1/api/get_brand_data_product_web', json)
      .then((res) => {
        setBranddata(res.data.message.slice(0, 8));
      })
      .catch(() => {
        setBranddata([]);
      });
  };

  useEffect(() => {
    getBrd();
  }, []);

  return (
    <div className="mt-10 mx-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-left font-bold text-2xl" style={{ color: `${data?.component?.image_gallery?.color}` }}>
          Brands Near Me
        </h1>
        <Link to="/sellerhome" className="text-blue-700">Back</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {branddata && branddata.map(user => (
          <Brandcard
            key={user.brand_id}
            brand_id={user.brand_id}
            brand_name={user.brand_name}
            brand_slug={user.brand_slug}
            brand_img={user.brand_img}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBrands;
