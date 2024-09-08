import React from "react";
import { Link } from "react-router-dom";

const Card6 = ({ data }) => {
  return (
    <>
      <div className="w-full text-left md:w-[90%] h-[180px] bg-white shadow-md rounded-lg mt-5 flex flex-row p-4 pb-4 mb-4">
        <div className="w-3/4 px-0">
          <h3 className="text-xl font-semibold">{data.seller_name}</h3>
          <p className="text-gray-700">
            This is a highly trendy womens wear outlet
          </p>
          <p className="mb-0 text-gray-600">Retail and Bulk</p>
          <p className="text-gray-600">{data.total_products} Products</p>
          <div className="flex space-x-2">
            <Link
              to={`${data.slug}`}
              className="text-blue-500 hover:underline"
            >
              Website
            </Link>
            <Link href="#" className="text-blue-500 hover:underline">
              App
            </Link>
          </div>
        </div>
        <div className="w-1/4 px-0 h-3/4">
          <img
            src={data.seller_profile}
            alt="Seller Profile"
            className="w-full h-full object-contain rounded"
          />
        </div>
      </div>
    </>
  );
};

export default Card6;
