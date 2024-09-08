import React, { useEffect, useState } from "react";
import Card3 from "../cards/Card3";
import { Link } from "react-router-dom";
import axios from "axios";

const AllHighlights = ({ data }) => {
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
          Curated Collections
        </h1>
        <Link to="/sellerhome" className="text-blue-700">
         Back
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {featureData.map((item) => (
          <Card3
            key={item.id}
            title={item.title}
            image={`/uploads/seller/${item.banner}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AllHighlights;
