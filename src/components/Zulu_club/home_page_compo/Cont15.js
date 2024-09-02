import React from "react";
import "../../../pages/zulu_club/Home.css";

const Cont15 = () => {
  const openForm = () => {
    // Your form opening logic here
  };

  return (
    <div
      className="cont15 container mx-auto bg-cover bg-center text-white my-10 py-20 rounded-[20px]"
    >
      <div className="bg-color pt-5">
        <h6>
          <span className="text-xl font-bold"> | About Zulu</span>
        </h6>

        <p className="mt-3 lg:mt-5">
          <span className="highlight text-4xl font-extrabold">
            Zulu Club is a club for winners.
          </span>
        </p>
        <div className="about-text">
          <p>
            <strong className="font-bold">Fashion</strong> is a profitable, dynamic
            & competitive market.
          </p>
          <p>Consumer trends, products & supply chains change every day.</p>
          <p>
            <strong className="font-bold">Winning players</strong> offer the best
            experience & the trendiest assortment.
          </p>
          <p>
            Zulu helps you deliver the
            <strong className="font-bold"> best experience</strong> & the
            <strong className="font-bold"> best assortment.</strong>
          </p>
        </div>
        <div className="py-5">
          <button
            className="btn1 w-52"
            onClick={openForm}
          >
            Download App
          </button>
          <a href="./pages/explore.html">
            <button className="btn1 mt-3 sm:mt-0 sm:ml-3 w-52">
              Explore
            </button>
          </a>
          <a href="http://zulushop.in/seller/login" target="_blank" rel="noopener noreferrer">
            <button className="btn1 mt-3 sm:mt-0 sm:ml-3 w-52">
              Start on web
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cont15;
