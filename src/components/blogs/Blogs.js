import React, { useEffect, useState } from "react";
import { Blogcard } from "../cards/Blogcard";
import { Link } from "react-router-dom";
import { url } from "../api/Url";
import axios from "axios";

const Blogs = () => {

  const [branddata, setBranddata] = useState([]);

  const getBrd = async () => {
    const json = JSON.stringify({ seller_id: "85" });
    axios.post(url + '/app/v1/api/listofblog', json)
      .then((res) => {
      //  console.log('data blog' + JSON.stringify(res.data.message));
        setBranddata(res.data.message)
        // setBranddata([])
      })
      .catch(() => {
        setBranddata([])
      });
  }
  useEffect(() => {
    getBrd();
  }, [])

  console.log("Blogs", branddata);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-left font-bold text-2xl">Blogs
            {/* {JSON.stringify(branddata)}  */}
        </h1>
        <Link to="" className="text-blue-700">
          view all
        </Link>
      </div>
      <div className="flex justify-between gap-8 mt-5">
        {branddata && branddata.map(user => (

          <Blogcard key={user.id} className="p-4" id={user.id}
            title={user.Title}
            Blogimage={`uploads/seller/${user.Blogimage}`}
            name={"blog"} width={"31%"}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
