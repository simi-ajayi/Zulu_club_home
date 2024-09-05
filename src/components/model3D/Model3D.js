import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Model3D = ({data}) => {

  const fetchvideo = async () => {
    try {
      const formData = new FormData();
formData.append('seller_id', 85);
      const res = await axios.post(`https://zulushop.in/app/v1/api/get_all_videos`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: '6d6eee4a5da94c0ca3010c40038b1ad0784e856408e9c82392481f468131832a85c12ab73c19d13a8d819f49546c0931'
        },
      })
      const result = await res.data
      console.log(result,'result')

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchvideo()
  }, [])


  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-left font-bold text-[22px]" style={{color:`${data?.component?.image_gallery?.color}`}}>3D Models</h1>
        <Link to="" className="text-blue-700">
          view all
        </Link>
      </div>
    </div>
  );
};

export default Model3D;
