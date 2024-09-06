import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "../api/Url";

const Model3D = ({ data }) => {

  const getCat = async () => {
    
    try {
      let response = await axios.post(
        url + '/get_video/85'
      );
      let data = await response.data.message;
      console.log("video",data)
      
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getCat();
  }, []);


  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-left font-bold text-[22px]" style={{ color: `${data?.component?.image_gallery?.color}` }}>3D Models</h1>
        <Link to="" className="text-blue-700">
          view all
        </Link>
      </div>
      
    </div>
  );
};

export default Model3D;
