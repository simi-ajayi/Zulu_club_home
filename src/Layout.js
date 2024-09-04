import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMain from "./components/Zulu_club/header/HeaderMain";
import Footer2 from "./components/Zulu_club/footer/Footer2";
import "./pages/zulu_club/Home.css";

const Layout = () => {
  return (
    <div className="bg-[#1f0a1d]">
      <div className="w-4/5 pt-[80px] container mx-auto text-center text-white">
        <HeaderMain />
        <Outlet />
        <Footer2 />
      </div>
    </div>
  );
};

export default Layout;
