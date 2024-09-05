import React, { useState, useEffect } from "react";
import "./HeaderMain.css";
import logo from "../../../assets/images/zulu-logo-3.png";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Popup from "../Popup";
const HeaderMain = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  //Popup
  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <div>
      <header
        id="header"
        className="fixed top-0 px-[7.5%] w-full h-20  right-0 z-10 flex items-center justify-center bg-[#1f0a1dae]"
        style={{
          top: visible ? "0" : "-80px",
          transition: "top 0.5s",
        }}
      >
        <div className="container flex items-center justify-between h-full">
          <div className="logo w-16">
            <img src={logo} className="w-full h-full" alt="ZULU Logo" />
          </div>
          <nav
            id="navbar"
            className="hidden lg:flex items-center space-x-12 uppercase"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#ffde59]" : "text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/consumer"
              className={({ isActive }) =>
                isActive ? "text-[#ffde59]" : "text-white"
              }
            >
              Consumers
            </NavLink>
            <NavLink
              to="/business"
              className={({ isActive }) =>
                isActive ? "text-[#ffde59]" : "text-white"
              }
            >
              Business
            </NavLink>
            <NavLink
              to="/brands"
              className={({ isActive }) =>
                isActive ? "text-[#ffde59]" : "text-white"
              }
            >
              Brands
            </NavLink>
            <NavLink
              to="/partners"
              className={({ isActive }) =>
                isActive ? "text-[#ffde59]" : "text-white"
              }
            >
              Partners
            </NavLink>

            <Link to="/">
              {/* <button className="px-4 py-2 rounded btn1">Get Started</button> */}
              <button
                className="px-4 py-2 rounded btn1"
                onClick={handleOpenPopup}
              >
                Wait List
              </button>
            </Link>
          </nav>
          <div className="lg:hidden flex items-center">
            {/* <IoMdMenu />
            <IoMdClose /> */}
          </div>
        </div>
      </header>

      <Popup isVisible={isPopupVisible} onClose={handleClosePopup} />

      {/* <!-- Mobile Menu --> */}
      <div
        className="fixed top-0 left-0 h-full w-1/2 bg-[#1f0a1d] z-50 transform -translate-x-full transition-transform duration-300 ease-in-out"
        id="mobile-menu"
      >
        <ul className="flex flex-col items-start p-4 text-white space-y-4">
          <li>
            <a href="/" className="font-poppins font-semibold text-3xl">
              ZULU
            </a>
          </li>
          <li>
            <a href="/" className="text-xl">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-xl">
              Business
            </a>
          </li>
          <li>
            <a href="./pages/brands.html" className="text-xl">
              Brands
            </a>
          </li>
          <li>
            <a href="./pages/partners.html" className="text-xl">
              Partners
            </a>
          </li>
          <li>
            <a href="./pages/aboutus.html" className="text-xl">
              About Us
            </a>
          </li>
          <li>
            <a href="#">
              <div className="bg-blue-500 text-white px-4 py-2 rounded">
                Get Started
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMain;
