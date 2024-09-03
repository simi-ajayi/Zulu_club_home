import React, { useState, useEffect } from "react";
import "./HeaderMain.css";
import logo from "../../../assets/images/zulu-logo-3.png";
import { Link } from "react-router-dom";
const HeaderMain = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

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
  return (
    <div>
      <header
        id="header"
        class="fixed top-0 px-[7.5%] w-full h-20  right-0 z-10 flex items-center justify-center bg-[#1f0a1dae]"
        style={{
          top: visible ? "0" : "-80px",
          transition: "top 0.5s",
        }}
      >
        <div class="container flex items-center justify-between h-full">
          <div class="logo w-16">
            <img src={logo} class="w-full h-full" alt="ZULU Logo" />
          </div>
          <nav id="navbar" class="hidden lg:flex items-center space-x-4">
            <Link to="/" class="text-white">
              Business
            </Link>
            <Link to="/brands" class="text-white">
              Brands
            </Link>
            <Link to="/partners" class="text-white">
              Partners
            </Link>
            <Link to="/aboutUs" class="text-white">
              About Us
            </Link>
            <Link to="/">
              <button class="px-4 py-2 rounded btn1">Get Started</button>
            </Link>
          </nav>
          <div class="lg:hidden flex items-center">
            <i class="ri-menu-line me-3 text-white text-2xl" id="menu-open"></i>
            <i
              class="ri-close-line hidden text-white text-2xl"
              id="menu-close"
            ></i>
          </div>
        </div>
      </header>

      {/* <!-- Mobile Menu --> */}
      <div
        class="fixed top-0 left-0 h-full w-1/2 bg-[#1f0a1d] z-50 transform -translate-x-full transition-transform duration-300 ease-in-out"
        id="mobile-menu"
      >
        <ul class="flex flex-col items-start p-4 text-white space-y-4">
          <li>
            <a href="/" class="font-poppins font-semibold text-3xl">
              ZULU
            </a>
          </li>
          <li>
            <a href="/" class="text-xl">
              Home
            </a>
          </li>
          <li>
            <a href="/" class="text-xl">
              Business
            </a>
          </li>
          <li>
            <a href="./pages/brands.html" class="text-xl">
              Brands
            </a>
          </li>
          <li>
            <a href="./pages/partners.html" class="text-xl">
              Partners
            </a>
          </li>
          <li>
            <a href="./pages/aboutus.html" class="text-xl">
              About Us
            </a>
          </li>
          <li>
            <a href="#">
              <div class="bg-blue-500 text-white px-4 py-2 rounded">
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
