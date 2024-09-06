import React from "react";
import Cont1 from "../../components/Zulu_club/home_page_compo/Cont1";
import Cont5 from "../../components/Zulu_club/home_page_compo/Cont5";
import Cont2 from "../../components/Zulu_club/partners_page/Cont2";
import "../../assets/style/partner_page.css";
import "./Home.css";
import PatnerFirstCompo from "../../components/Zulu_club/partners_page/PatnerFirstCompo";
const PartnersPage = () => {
  const cont1Data = [
    {
      imgbg: "Partner_page_image",
      title1: "The need of",
      title2: "the fashion industry.",
      tags1: "Fashion influencers",
      tags2: "Tailoring & alteration",
      tags3: "Designers & stylists",
      tags4: "Local delivery",
    },
  ];
  return (
    <div className="partner">
      {/* <Cont1 /> */}
      <PatnerFirstCompo data={cont1Data}/>
      <Cont2 />
      <div class="mt-20 mb-5">
        <button class="btn1 w-[250px] text-[1.75rem]">Download App</button>
      </div>
      <Cont5 />
    </div>
  );
};

export default PartnersPage;
