import React from "react";

const AboutUs = () => {
  return (
    <div className="flex gap-20 mt-20">
      <div className="text-left w-1/2">
        <h1 className="text-5xl">About Us</h1>
        <p className="text-justify mt-5">
          Helping businesses deliver exceptional buyer experiences. Vidyard is
          the leading video messaging and asynchronous communications platform
          for go-to-market teams. Millions of sales professionals and more than
          250,000 go-to-market teams use Vidyard's AI-powered video messaging,
          video hosting, and digital sales rooms to connect with more prospects
          and generate more revenue.
        </p>
      </div>
      <div className="w-1/2">
        <img 
          src="https://zulushop.in/uploads/seller/Frame_1300931.png"
          alt="Vidyard About Us"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default AboutUs;
