import React, { useState } from "react";
import "../../../pages/zulu_club/Home.css";
import { Link } from "react-router-dom";
import Popup from "../Popup";

const Cont15 = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="cont15 container mx-auto bg-cover bg-center text-white mt-20 py-20 rounded-[20px]">
      <div className="bg-color pt-5">
        <h6>
          {/* <span className="text-xl font-bold"> | About Zulu</span> */}
        </h6>

        <p className="mt-3 lg:mt-5 leading-[70px]">
          <span className="highlight text-4xl font-extrabold">
            Zulu is a club for winners.
          </span>
        </p>
        <div className="about-text">
          <p>
            <strong className="font-bold">Fashion</strong> is a profitable,
            dynamic & competitive market.
          </p>
          <p>Consumer trends, products & supply chains change every day.</p>
          <p>
            <strong className="font-bold">Winning players</strong> offer the
            best experience & the trendiest assortment.
          </p>
          <p>
            Zulu helps you deliver the
            <strong className="font-bold"> best experience</strong> & the
            <strong className="font-bold"> best assortment.</strong>
          </p>
        </div>
        <div className="py-5">
          <button className="btn1 w-52">Download App</button>

          {/* Popup */}

          <button onClick={handleOpenPopup} className="btn1 w-52 ml-3">
            Waiting list
          </button>

          {/* Render the Popup component */}
          <Popup isVisible={isPopupVisible} onClose={handleClosePopup} />

          {/* <Link to='/SellerHome'>
            <button className="btn1 mt-3 sm:mt-0 sm:ml-3 w-52">
              Explore
            </button>
          </Link>
          <Link to="http://zulushop.in/seller/login">
            <button className="btn1 mt-3 sm:mt-0 sm:ml-3 w-52">
              Start on web
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Cont15;
