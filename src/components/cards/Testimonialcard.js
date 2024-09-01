import React from "react";

const Testimonialcard = ({id, username, comments}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-slate-100 w-[31%] flex gap-5 p-5 items-center  text-left">
     
      <div className="">
        <h3 className="font-bold">{username}</h3>
        <p className="mt-3">
         {comments}
        </p>
      </div>
    </div>
  );
};

export default Testimonialcard;
