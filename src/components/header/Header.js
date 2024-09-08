import React, { useContext, useEffect, useState } from "react";
// import "./headerSeller.css";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { url } from "../api/Url";
import axios from "axios";

const Header = () => {
  // const { sellerListdata } = useContext(UserContext);
  const {
    sellerListdata,
    setSellerListdata,
    loader,
    error,
    setLoader,
    setError,
  } = useContext(UserContext);

  const [data, setData] = useState()

  async function sellerList() {
    // const json = JSON.stringify({ seller_id: "85" });
    try {
      let response = await axios.post(url + "/app/v1/api/seller_list?id=85");
      let res = await response.data;
      const data = res[0]?.json_component
      const Jsonres = JSON.parse(data)
      setSellerListdata(res[0]);
      setData(Jsonres)
      setLoader(false);
      setError(false);
    } catch (error) {
      setError(true);
      console.log("ERROR MESSAGE :: ", error.message);
    }
  }

  useEffect(() => {
    sellerList();
  }, []);

  // console.log(sellerListdata[0])
  const [color, setColor] = useState(sellerListdata.color_1);
  const [color2, setColor2] = useState(sellerListdata.color_2);
  return (
    <>

      <header
        className={`fixed top-0 w-4/5 h-[80px] flex items-center z-10
        text-[${data?.component?.top_bar_menu.text_color1}]`}
        style={{
          backgroundImage: data?.component?.top_bar_menu.BG_type === 'Gradient'
            ? `linear-gradient(to right, ${data?.component?.top_bar_menu.BG_Color1}, ${data?.component?.top_bar_menu.BG_Color2})`
            : `none`,
            
          backgroundColor: data?.component?.top_bar_menu.BG_type === 'Colour'
            ? `${data?.component?.top_bar_menu.BG_Color1}`
            : 'white',

          fontFamily: `'${data?.component?.top_bar_menu.font_style}'`
        }}
      //  style={{
      //    backgroundImage: `linear-gradient(to right, ${data?.component?.top_bar_menu?.BG_Color1}, ${data?.component?.top_bar_menu?.BG_Color2})`, fontFamily: `'${data?.component?.top_bar_menu?.font_style}'` }}
      >
        
        <div className="container mx-auto h-full flex justify-between items-center">
          <div className="w-8 h-[50px]">
            {
              data?.component?.top_bar_menu?.logo === 'on' ? <img
                src={`https://zulushop.in/${sellerListdata.logo}`}
                className="w-full h-full"
                alt="Zulu Logo"
              /> : ""
            }

          </div>
          <nav id="navbar" className="flex items-center">
            <ul className="hidden lg:flex space-x-6 items-center">
              <li>
                {
                  data?.component?.top_bar_menu?.home === 'on' ? <Link to="/">Home</Link> : ""
                }

              </li>
              <li>
                {
                  data?.component?.top_bar_menu?.shopnow === 'on' ? <Link to="">Shop now</Link> : ""
                }
              </li>

              <li>
                {
                  data?.component?.top_bar_menu?.blog === 'on' ? <Link to="">Blogs</Link> : ''
                }

              </li>

              <li>
                {
                  data?.component?.top_bar_menu?.aboutus === 'on' ? <Link to="">About Us</Link> : ''
                }

              </li>

              <li>
               
                  {
                    data?.component?.top_bar_menu?.search === 'on' ? <Link to=""> <IoMdSearch /> </Link>: ""
                  }

                
              </li>
              <li>
                  {data?.component?.top_bar_menu?.favorites === 'on' ? <Link to=""> <FaRegHeart /> </Link>: ''}
                
              </li>
              <li>
                  {data?.component?.top_bar_menu?.profile === 'on' ?  <Link to=""><CgProfile /></Link> : ''}

              </li>
            </ul>
            <div className="lg:hidden">
              <i className="tbtn1 ri-menu-line text-white text-2xl"></i>
              <i className="tbtn2 ri-close-fill text-white text-2xl hidden"></i>
            </div>
          </nav>
        </div>
      </header>
    </>
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