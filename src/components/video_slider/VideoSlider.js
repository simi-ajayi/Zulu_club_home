import React from "react";
import { Card4 } from "../cards/Blogcard";
import { Link } from "react-router-dom";

const VideoSlider = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-left font-bold text-2xl">Video slider</h1>
          <Link to="" className="text-blue-700">
            view all
          </Link>
        </div>
        <div className="flex justify-between gap-8 mt-5 overflow-hidden">
       {/*    <Card4 name={"video"} width={"31%"} />
          <Card4 name={"video"} width={"31%"} />
          <Card4 name={"video"} width={"31%"} /> */}
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;