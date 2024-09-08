import React, { useEffect, useState } from "react";
import { Blogcard } from "../cards/Blogcard";
import { Link } from "react-router-dom";
import { url } from "../api/Url";
import axios from "axios";

const AllBlogs = ({ data }) => {
  const [blogData, setBlogData] = useState([]);

  const getBlogs = async () => {
    const json = JSON.stringify({ seller_id: "85" });
    try {
      const response = await axios.post(`${url}/app/v1/api/listofblog`, json);
      setBlogData(response.data.message || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogData([]);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="mt-10 mx-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-left font-bold text-2xl" style={{ color: `${data?.component?.image_gallery?.color}` }}>
          Trends Near You
        </h1>
        <Link to="/sellerhome" className="text-blue-700">
         back
        </Link>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-8">
        {blogData.map((blog) => (
          <Blogcard
            key={blog.id}
            className="p-4"
            id={blog.id}
            title={blog.Title}
            Blogimage={`uploads/seller/${blog.Blogimage}`}
            name={"blog"}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
