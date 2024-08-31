import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserContextProvider from "./context/UserContextProvider";

function Layout() {
  return (
    <>
      <UserContextProvider>
        {/* <Header /> */}
        <div className="container mx-auto w-4/5 text-center mt-20">
          <Outlet />
          <Footer />
        </div>
      </UserContextProvider>
    </>
  );
}

export default Layout;
