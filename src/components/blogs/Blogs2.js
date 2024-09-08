import React, { useEffect, useState } from "react";
import { Blogcard } from "../cards/Blogcard";
import { Link } from "react-router-dom";
import { url } from "../api/Url";
import axios from "axios";

const Blogs = ({data}) => {

  const [branddata, setBranddata] = useState([]);

  const getBrd = async () => {
    const json = JSON.stringify({ seller_id: "85" });
    axios.post(url + '/app/v1/api/listofblog', json)
      .then((res) => {
      //  console.log('data blog' + JSON.stringify(res.data.message));
        setBranddata(res.data.message.slice(0,4))
        // setBranddata([])
      })
      .catch(() => {
        setBranddata([])
      });
  }
  useEffect(() => {
    getBrd();
  }, [])

  // console.log("Blogs", branddata);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-left font-bold text-[22px]" style={{color:`${data?.component?.image_gallery?.color}`}}>Trends Near you
            {/* {JSON.stringify(branddata)}  */}
        </h1>
        <Link to="/AllBlogs" className="text-blue-700">
          view all
        </Link>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-8 mt-5">
        {branddata && branddata.map(user => (

          <Blogcard key={user.id} className="p-4" id={user.id}
            title={user.Title}
            Blogimage={`uploads/seller/${user.Blogimage}`}
            name={"blog"} 
            // width={"31%"}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
