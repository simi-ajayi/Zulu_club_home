import React, { useState } from "react";
// import "./headerSeller.css";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ data2 }) => {
  // console.log(data2[0])
  const [color, setColor] = useState(data2.color_1)
  const [color2, setColor2] = useState(data2.color_2)
  return (
    <header
      id="header"
      className={`fixed top-0 w-4/5 mx-auto flex items-center bg-transparent z-10 bg-gradient-to-r from-[${color}] to-[#ad0b97] font-[${color2}] text-[${data2.text_color_1}]`}
    >
      <div className="container mx-auto h-full flex justify-between items-center">
        <div className="w-8">
          <img
            src={`https://zulushop.in/${data2.logo}`}
            className="w-full h-full"
            alt="Zulu Logo"
          />
        </div>
        <nav id="navbar" className="flex items-center">
          <ul className="hidden lg:flex space-x-6 items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">Shop now</Link>
            </li>
            <li>
              <Link to="">Highlight</Link>
            </li>
            <li>
              <Link to="">Blogs</Link>
            </li>
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">
                <IoMdSearch />
              </Link>
            </li>
            <li>
              <Link to="">
                <FaRegHeart />
              </Link>
            </li>
            <li>
              <Link to="">
                <CgProfile />
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <i className="tbtn1 ri-menu-line text-white text-2xl"></i>
            <i className="tbtn2 ri-close-fill text-white text-2xl hidden"></i>
          </div>
        </nav>
      </div>
    </header>
  );

  // <!-- Mobile Menu -->
  // <div
  //   className="hamburger fixed top-0 left-0 h-screen bg-[#1f0a1d] z-50 w-1/2 pt-2 transform -translate-x-full transition-transform duration-300 ease-in-out lg:hidden"
  // >
  //   <ul className="flex flex-col text-white space-y-2 pl-4">
  //     <li>
  //       <a href="/" className="font-poppins font-semibold text-2xl leading-none"
  //         >ZULU</a
  //       >
  //     </li>
  //     <li><a href="/" className="mt-2">Home</a></li>
  //     <li><a href="/">Business</a></li>
  //     <li><a href="./brands.html">Brands</a></li>
  //     <li><a href="./partners.html">Partners</a></li>
  //     <li><a href="./aboutus.html">About Us</a></li>
  //     <li className="mt-4">
  //       <a href="#">
  //         <div className="btn1">Get Started</div>
  //       </a>
  //     </li>
  //   </ul>
  // </div>
};

export default Header;
