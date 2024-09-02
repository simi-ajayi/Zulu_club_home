import React from "react";
import "./HeaderMain.css";
import logo from "../../../assets/images/zulu-logo-3.png";
const HeaderMain = () => {
  return (
    <div>
      <header
        id="header"
        class="fixed top-0 left-0 right-0 px-[7.5%] w-full z-10 flex items-center justify-between bg-transparent"
      >
        <div class="container flex items-center justify-between h-full">
          <div class="logo w-16">
            <img src={logo} class="w-full h-full" alt="ZULU Logo" />
          </div>
          <nav id="navbar" class="hidden lg:flex items-center space-x-4">
            <a href="/" class="text-white">
              Business
            </a>
            <a href="./pages/brands.html" class="text-white">
              Brands
            </a>
            <a href="./pages/partners.html" class="text-white">
              Partners
            </a>
            <a href="./pages/aboutus.html" class="text-white">
              About Us
            </a>
            <a href="#">
              <button class="px-4 py-2 rounded btn1">Get Started</button>
            </a>
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
