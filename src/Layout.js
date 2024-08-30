import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function Layout() {
  return (
    <>
      {/* <Header /> */}
      <div className="container px-[7.5%] w-full text-center">
        <Outlet />
      <Footer />
      </div>
    </>
  );
}

export default Layout;
