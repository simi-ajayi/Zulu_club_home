import React from "react";
import HeaderMain from "../../components/Zulu_club/header/HeaderMain";
import "./Home.css";
import Cont1 from "../../components/Zulu_club/home_page_compo/Cont1";
import Cont15 from "../../components/Zulu_club/home_page_compo/Cont15";
import Cont3 from "../../components/Zulu_club/home_page_compo/Cont3";
import Cont2 from "../../components/Zulu_club/home_page_compo/Cont2";
import Cont4 from "../../components/Zulu_club/home_page_compo/Cont4";
import Cont5 from "../../components/Zulu_club/home_page_compo/Cont5";
import Cont6 from "../../components/Zulu_club/home_page_compo/Cont6";
import Footer2 from "../../components/Zulu_club/footer/Footer2";
import Pricecard from "../../components/Zulu_club/home_page_compo/Pricecard";
import FAQs from "../../components/Zulu_club/home_page_compo/FAQs";
import Cont7 from "../../components/Zulu_club/home_page_compo/Cont7";
import Cont8 from "../../components/Zulu_club/home_page_compo/Cont8";
const Home = () => {
  return (
    <>
      <div className="w-full px-[7.5%] bg-[#1f0a1d] text-center">
        <HeaderMain />
        <Cont1 />
        <Cont15 />
        <Cont2 />
        <Cont3 />
        <Cont4 />
        <Cont5 />
        <Cont6 />
        <Cont7 />
        <Cont8 />
        <Pricecard />
        <FAQs />
        <Footer2 />
      </div>
    </>
  );
};

export default Home;
