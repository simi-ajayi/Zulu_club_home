import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../api/Url";
import axios from "axios";
import Testimonialcard from "../cards/Testimonialcard";

const AllTestimonials = ({ data }) => {
  const [testimonials, setTestimonials] = useState([]);

  const getTestimonials = async () => {
    const json = JSON.stringify({ seller_id: "85" });
    try {
      const response = await axios.post(`${url}/app/v1/api/listoftestimonal`, json);
      setTestimonials(response.data || []);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setTestimonials([]);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <div className="mt-10 mx-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-left font-bold text-2xl" style={{ color: `${data?.component?.image_gallery?.color}` }}>
          Testimonials
        </h1>
        <Link to="/sellerhome" className="text-blue-700">
         back
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial) => (
          <Testimonialcard
            key={testimonial.id}
            id={testimonial.id}
            comments={testimonial.comments}
            username={testimonial.username}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTestimonials;
