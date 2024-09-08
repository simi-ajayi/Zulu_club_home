import React, { useEffect, useState } from "react";
import Card3 from "../cards/Card3";
import { Link } from "react-router-dom";
import axios from "axios";

const AllFeatures = ({ data }) => {
  const [featureData, setFeatureData] = useState([]);
  const url2 = "https://zulushop.in/app/v1/api/get_seller_features_sections_final";

  async function getFeatures() {
    const jsonData = JSON.stringify({ seller_id: "85" });
    try {
      const response = await axios.post(url2, jsonData);
      const res = await response.data;
      setFeatureData(res);
    } catch (error) {
      console.error("Error fetching features:", error);
    }
  }

  useEffect(() => {
    getFeatures();
  }, []);

  return (
    <div className="mt-10 mx-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-left font-bold text-2xl" style={{ color: `${data?.component?.image_gallery?.color}` }}>
          Features
        </h1>
        <Link to="/sellerhome" className="text-blue-700">
          Back
        </Link>
      </div>
      {featureData.map((item) => {
        const productDetails = item?.product_details?.productinfo || [];

        return (
          <div key={item.id} className="mb-10">
            <div className="flex flex-col gap-2 mb-5">
              <h2 className="text-left font-bold text-xl" style={{ color: `${data?.component?.image_gallery?.color}` }}>
                {item.title}
              </h2>
              <p className="text-left">{item.short_description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {productDetails.map((product) => (
                <Card3
                  key={product.id}
                  image={product.image}
                  title={product.name}
                  price={product.variants[0]?.price}
                  discount={product.variants[0]?.special_price}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllFeatures;
