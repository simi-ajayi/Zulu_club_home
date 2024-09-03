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
import Cont9 from "../../components/Zulu_club/home_page_compo/Cont9";
import Cont10 from "../../components/Zulu_club/home_page_compo/Cont10";
const HomePage = () => {
  const cont1Data = [
    {
      imgbg: "Home_page_image",
      title1: "The premium",
      title2: "fashion Club.",
      tags1: "Retailers",
      tags2: "Boutiques",
      tags3: "Wholesalers",
      tags4: "Manufacturers",
    },
  ];
  return (
    <>
      <Cont1 data={cont1Data} />
      <Cont15 />
      <Cont2 />
      <Cont3 />
      <Cont4 />
      <Cont5 />
      <Cont6 />
      <Cont7 />
      <Cont10 />
      <Cont8 />
      <Cont9 />
      <Pricecard />
      <FAQs />
    </>
  );
};

export default HomePage;
