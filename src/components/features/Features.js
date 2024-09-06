import React, { useEffect, useState } from "react";
import Card3 from "../cards/Card3";
import { Link } from "react-router-dom";
import axios from "axios";

const Features = ({data}) => {
  const [featureData, setFeatureData] = useState([]);
  // const [product, setProduct] = useState([]);

  const url2 =
    "https://zulushop.in/app/v1/api/get_seller_features_sections_final";

  async function getFeatures() {
    const jsonData = JSON.stringify({ seller_id: "85" });
    try {
      let response = await axios.post(url2, jsonData);
      let res = await response.data;

      setFeatureData(res);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  // console.log(featureData);

  let productDetails = featureData[0]?.product_details.productinfo;
  // let productDetails2 = featureData[0]?.product_details.productinfo;

  // console.log(productDetails);

  useEffect(() => {
    getFeatures();
  }, []);

  // console.log(featureData[0].product_details);

  return (
    <div className="mt-10">
      <div className="mt-5">
        {featureData.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex justify-between mt-10 mb-5 items-center">
                <div className="flex flex-col gap-2">
                  <h1 className="text-left font-bold text-[22px]" style={{color:`${data?.component?.image_gallery?.color}`}}>{item.title}</h1>
                  <p className="text-left">{item.short_description}</p>
                </div>
                <Link to="" className="text-blue-700">
                  view all
                </Link>
              </div>
              <div className="flex justify-center md:justify-between flex-wrap items-center">
                {productDetails.map((product) => (
                  // {item.product_details.productinfo.map((product) => (
                  <div key={product.id}>
                    <Card3
                      image={product.image}
                      title={product.name}
                      price={product.variants[0].price}
                      discount={product.variants[0].special_price}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
