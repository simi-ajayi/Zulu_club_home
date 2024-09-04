import React from "react";
import Acont1 from "../../components/Zulu_club/about_us_page/Acont1";
import Cont4 from "../../components/Zulu_club/home_page_compo/Cont4";
import Cont5 from "../../components/Zulu_club/home_page_compo/Cont5";

// cont4 Images

import a2 from "../../assets/images/new_img/t1.png";
import a3 from "../../assets/images/new_img/t2.png";
import a4 from "../../assets/images/new_img/c3.png";
import a5 from "../../assets/images/new_img/c1.png";
import a6 from "../../assets/images/new_img/d11.png";
import a7 from "../../assets/images/new_img/d2.png";
import a8 from "../../assets/images/new_img/3d1.png";
import a9 from "../../assets/images/new_img/3d2.png";
import Ccont1 from "../../components/Zulu_club/consumer_page/Ccont1";

const ConsumerPage = () => {
  const cont4Data = {
    title: "Zulu will win you over with excitement",
    subtitle1: "Try at home - alter at home",
    subtitle2: "Fashion concierge - at your service",
    subtitle3: "Curated collection - Desi & Videsi",
    subtitle4: "Explore in 3d - before you try",
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
      <Ccont1 />
      <Acont1 />
      <Cont4 data={cont4Data} />
      <Cont5 />
    </>
  );
};

export default ConsumerPage;
