import React, { useEffect, useState } from "react";
import { Blogcard } from "../cards/Blogcard";
import { Link } from "react-router-dom";
import { url } from "../api/Url";
import axios from "axios";
import Testimonialcard from "../cards/Testimonialcard";
const Testimonials = () => {
  const [test, setTest] = useState([]);

  const getTest = async () => {
    const json = JSON.stringify({ seller_id: "85" });
    axios.post(url + '/app/v1/api/listoftestimonal', json)
      .then((res) => {
        // console.log('data test' + JSON.stringify(res.data));
          setTest(res.data)
        // setBranddata([])
      })
      .catch(() => {
        setTest([])
      });
  }
  useEffect(() => {
    getTest();
  }, [])

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-left font-bold text-2xl">Testimonials</h1>
        <Link to="" className="text-blue-700">
          view all
        </Link>
      </div>
      <div className="flex justify-between gap-8 mt-5 overflow-hidden">

        {test && test.map(user => (

          <Testimonialcard key={user.id} id={user.id}
            comments={user.comments}
            username={user.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
