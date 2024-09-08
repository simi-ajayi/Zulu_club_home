import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserContextProvider from "./context/UserContextProvider";
import SuperTopBar from "./components/super_top_bar/SuperTopBar";
import HeaderMain from "./components/Zulu_club/header/HeaderMain";
import HeaderNew from "./components/Zulu_club/header/HeaderNew";

function Layout2() {
  return (
    <>
      <UserContextProvider>
        <SuperTopBar />
        <div className="container text-center mx-auto w-4/5 mt-36">
          {/* <Header /> */}
          <HeaderNew />
          <Outlet />
          <Footer />
        </div>
      </UserContextProvider>
    </>
  );
}

export default Layout2;