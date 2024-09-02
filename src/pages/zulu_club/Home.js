import React from "react";
import HeaderMain from "../../components/Zulu_club/header/HeaderMain";
import "./Home.css";
import Cont1 from "../../components/Zulu_club/home_page_compo/Cont1";
const Home = () => {
  return (
    <>
      <div className="w-4/5 mx-auto bg-[#1f0a1d]">
        <HeaderMain />
        <Cont1 />
      </div>
    </>
  );
};

export default Home;
