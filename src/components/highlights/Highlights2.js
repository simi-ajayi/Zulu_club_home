import React, { useEffect, useState } from "react";
import Card3 from "../cards/Card3";
import { Link } from "react-router-dom";
import axios from "axios";

const Highlights = ({data}) => {
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
        <div className="flex justify-between">
          <div>
            <h1 className="text-left font-bold text-[22px]" style={{color:`${data?.component?.image_gallery?.color}`}}>Curated Collections</h1>
            {/* <p>{item.short_description}</p> */}
          </div>
          <Link to="/AllHighlights" className="text-blue-700">
            view all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-5 justify-center items-center">
  {featureData.map((item) => (
    <div key={item.id} className="banner">
      <Card3 
        title={item.title}
        image={`/uploads/seller/${item.banner}`}
      />
      
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Highlights;