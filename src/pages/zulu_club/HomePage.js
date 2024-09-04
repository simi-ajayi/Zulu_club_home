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

// cont4 Images
import a2 from "../../assets/images/img/12.png";
import a3 from "../../assets/images/img/13.png";
import a4 from "../../assets/images/img/14.png";
import a5 from "../../assets/images/img/15.png";
import a6 from "../../assets/images/img/16.png";
import a7 from "../../assets/images/img/17.png";
import a8 from "../../assets/images/img/18.png";
import a9 from "../../assets/images/img/19.png";

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
  const cont4Data = {
    title: "Zulu helps you scale with next level solutions",
    subtitle1: "Website & Mobile App",
    subtitle2: "B2B Market",
    subtitle3: "Marketing & loyalty",
    subtitle4: "New Experiences",
    a2: a2,
    a3: a3,
    a4: a4,
    a5: a5,
    a6: a6,
    a7: a7,
    a8: a8,
    a9: a9,
  };

  return (
    <>
      <Cont1 data={cont1Data} />
      <Cont15 />
      <Cont2 />
      <Cont3 />
      <Cont4 data={cont4Data} />
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
