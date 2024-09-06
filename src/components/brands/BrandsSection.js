import React, { useEffect, useState } from "react";
import Categories from "../categaries_menu/CategoriesMenu";
import Brandcard from '../cards/Brandcard'
import { Link } from "react-router-dom";
import { url } from "../api/Url";
import axios from "axios";


const BrandsSection = ({data}) => {
  const [branddata, setBranddata] = useState([]);

  const getBrd = async () => {
    const json = JSON.stringify({ seller_id: "85" });
    axios.post(url + '/app/v1/api/get_brand_data_product_web', json)
      .then((res) => {
       // console.log('data brand' + JSON.stringify(res.data.message));
        setBranddata(res.data.message.slice(0,8))
       // setBranddata([])
      })
      .catch(() => {
        setBranddata([])
      });
  }
  useEffect(() => {
    getBrd();
  }, [])
 

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">


        <h1 className="text-left font-bold text-[22px] mb-2" style={{color:`${data?.component?.image_gallery?.color}`}}>{data?.component?.brand?.title}</h1>
        {/*   {JSON.stringify(branddata)}  */}

        <Link to='' className="text-blue-700">view all</Link>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between mt-5">

        {branddata && branddata.map(user => (

          <Brandcard key={user.brand_id} className="" brand_id={user.brand_id}
          brand_name={user.brand_name}
          brand_slug={user.brand_slug}
          brand_img={user.brand_img}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
