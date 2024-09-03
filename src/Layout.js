import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMain from "./components/Zulu_club/header/HeaderMain";
import Footer2 from "./components/Zulu_club/footer/Footer2";
import './pages/zulu_club/Home.css'

const Layout = () => {
  return (
    <div className="w-full px-[7.5%] pt-[80px] bg-[#1f0a1d] text-center text-white">
      <HeaderMain />
      <Outlet />
      <Footer2 />
    </div>
  );
};

export default Layout;
