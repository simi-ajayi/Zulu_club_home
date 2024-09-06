import React from "react";
import Cont1 from "../../components/Zulu_club/home_page_compo/Cont1";
import Bcont6 from "../../components/Zulu_club/brands_page/Bcont6";
import Bcont7Card from "../../components/Zulu_club/brands_page/Bcont7Card";
import Bcont8 from "../../components/Zulu_club/brands_page/Bcont8";
import Bcont11 from "../../components/Zulu_club/brands_page/Bcont11";
import Bcont12 from "../../components/Zulu_club/brands_page/Bcont12";
import Cont5 from "../../components/Zulu_club/home_page_compo/Cont5";
// import "./Home.css";
import Bcont7Card2 from "../../components/Zulu_club/brands_page/Bcont7Card2";

const BrandsPage = () => {
  const cont1Data = [
    {
      imgbg: "Brands_page_image",
      title1: "The desire of",
      title2: "every brand.",
      tags1: "New experiences",
      tags2: "delivered to your",
      tags3: "loved consumers",
      tags4: "in person.",
    },
  ];
  const data1 = [
    {
      num: 1,
      tSpan1: "Digital marketing is expensive ...",
      tSpan2: "Website, tech tools & team are all pricy !",
    },
    {
      num: 2,
      tSpan1: "Ecom prices are lower...",
      tSpan2: "Returns are high & commissions getting higher !",
    },
    {
      num: 3,
      tSpan1: "Trends change every day...",
      tSpan2: "Products get out of date very fast !",
    },
    {
      num: 4,
      tSpan1: " Bestsellers get copied...",
      tSpan2: "Copying needs less money - can sell cheaper !",
    },
    {
      num: 5,
      tSpan1: "Inventory gets stuck...",
      tSpan2: " Working capital & liquidation costs pile up !",
    },
    {
      num: 6,
      tSpan1: "Consumers want new launches...",
      tSpan2: "Sourcing new products at low MOQ is pricy !",
    },
  ];
  const data2 = [
    {
      num: 1,
      tSpan1: "Garments need tailoring ...",
      tSpan2: "At home alteration on online sales could work ?",
    },
    {
      num: 2,
      tSpan1: "Personalized selling always wins...",
      tSpan2: "Most of fashion is vanity - dont consumers love talking ?",
    },
    {
      num: 3,
      tSpan1: "Consumers like to try at home...",
      tSpan2: "Well - isnt there is a company called Urban Clap ?",
    },
    {
      num: 4,
      tSpan1: " Customers travel 200 Km to shop...",
      tSpan2: "Zomato legends for premium Fashion - bad idea ?",
    },
    {
      num: 5,
      tSpan1: "People do give gifts on bdays...",
      tSpan2: "A gift of 5 shirts in diff sizes in your home - not happy ?",
    },
    {
      num: 6,
      tSpan1: "Make to measure at home...",
      tSpan2: "Darji bhaiya at home taking your size - dont like him ?",
    },
  ];
  const data3 = [
    {
      num: 1,
      tSpan1: "Isnt this going out of my core competency as a brand ?",
      tSpan2: "100% right.",
    },
    {
      num: 2,
      tSpan1: "How many people will I have to hire to even try this out ?",
      tSpan2: "Many ?",
    },
    {
      num: 3,
      tSpan1: "Even if the pilot works, how many cities can I scale it in ?",
      tSpan2: "1, 2 or 5?",
    },
    {
      num: 4,
      tSpan1: "Even if we focus on Tier 1, it needs complex operations ?",
      tSpan2: "Specialization.",
    },
    {
      num: 5,
      tSpan1: "If i cant meet MOQ for products, how do I meet MOQ for this?",
      tSpan2: "Probably not",
    },
    {
      num: 6,
      tSpan1: "WIll it anyways not be better done by someone for all brands ?",
      tSpan2: "Hmmm...",
    },
  ];
  return (
    <div className="brands">
      <Cont1 data={cont1Data} />
      <Bcont6 />
      <Bcont7Card
        data={data1}
        title={"Is building an online fashion brand not as easy?"}
        width1="400px"
        width2="500px"
        bgimg={"bgimg1"}
      />
      <Bcont8 />
      <Bcont7Card
        data={data2}
        title={"Thinking of a new concept is easy no rocket science here"}
        width1="400px"
        width2="578px"
      />
      <Bcont7Card2
        data={data3}
        title={
          "Building such an experience is operationally hard,you no like ?"
        }
        width1="700px"
        width2="200px"
        bgimg={"bgimg2"}
      />
      <Bcont11 />
      <Bcont12 />
      <Cont5 />
    </div>
  );
};

export default BrandsPage;
