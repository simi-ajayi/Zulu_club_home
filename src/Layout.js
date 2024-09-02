import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserContextProvider from "./context/UserContextProvider";
import SuperTopBar from "./components/super_top_bar/SuperTopBar";

function Layout() {
  return (
    <>
      <UserContextProvider>
        <SuperTopBar />
        <Header />
        <div className="container mx-auto w-4/5 text-center mt-20">
          <Outlet />
        </div>
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default Layout;
