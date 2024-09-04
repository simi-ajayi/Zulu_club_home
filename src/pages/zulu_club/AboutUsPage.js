import React from "react";
import Acont1 from "../../components/Zulu_club/about_us_page/Acont1";
import FAQs from "../../components/Zulu_club/home_page_compo/FAQs";
import Acont4 from "../../components/Zulu_club/about_us_page/Acont4";
import Acont2 from "../../components/Zulu_club/about_us_page/Acont2";
import Acont3 from "../../components/Zulu_club/about_us_page/Acont3";
import Cont1 from "../../components/Zulu_club/home_page_compo/Cont1";
import Acont5 from "../../components/Zulu_club/about_us_page/Acont5";
import Acont6 from "../../components/Zulu_club/about_us_page/Acont6";
import Cont5 from "../../components/Zulu_club/home_page_compo/Cont5";
import Cont4 from "../../components/Zulu_club/home_page_compo/Cont4";

// cont4 Images

import a2 from "../../assets/images/new_img/t1.png";
import a3 from "../../assets/images/new_img/t2.png";
import a4 from "../../assets/images/new_img/c3.png";
import a5 from "../../assets/images/new_img/c1.png";
import a6 from "../../assets/images/new_img/d11.png";
import a7 from "../../assets/images/new_img/d2.png";
import a8 from "../../assets/images/new_img/3d1.png";
import a9 from "../../assets/images/new_img/3d2.png";

const AboutUsPage = () => {
  const cont1Data = [
    {
      imgbg: "Home_page_image",
      title1: "The premium",
      title2: "fashion Club.",
      tags1: "Consumers",
      tags2: "Fashion Brands",
      tags3: "Fashion Businesses",
      tags4: "Channel Partners",
    },
  ];
  const cont4Data = {
    title: "Zulu will win you over with excitement",
    subtitle1: "Try before you buy - showroom at home",
    subtitle2: "Alter at home - Fashion concierge",
    subtitle3: "Curated collection - Desi & Videsi",
    subtitle4: "Explore in 3d - before you try",
    a2: a2,
    a3: a5,
    a4: a4,
    a5: a3,
    a6: a6,
    a7: a7,
    a8: a8,
    a9: a9,
  };
  return (
    <div className="aboutus">
      <Cont1 data={cont1Data} />
      <Acont1 />
      <Acont6 />
      <Cont4 data={cont4Data} />
      <Acont5 />
      {/* <Acont2 /> */}
      <Acont3 />
      {/* <Acont4 /> */}
      <Cont5 />
      {/* <FAQs /> */}
    </div>
  );
};

export default AboutUsPage;
