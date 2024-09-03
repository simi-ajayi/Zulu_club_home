import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserContextProvider from "./context/UserContextProvider";
import SuperTopBar from "./components/super_top_bar/SuperTopBar";

function Layout2() {
  return (
    <>
      <UserContextProvider>
        <SuperTopBar />
        <div className="container text-center mx-auto w-4/5 mt-36">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContextProvider>
    </>
  );
}

export default Layout2;
