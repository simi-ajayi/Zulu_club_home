import React from "react";
import "../../../assets/style/partner_page.css";
import a1 from "../../../assets/images/PARTNERS/f2.webp";
import a11 from "../../../assets/images/PARTNERS/f1.webp";
import a2 from "../../../assets/images/PARTNERS/f3.webp";
import a12 from "../../../assets/images/PARTNERS/f4.webp";
import a3 from "../../../assets/images/PARTNERS/f5.webp";
import a13 from "../../../assets/images/PARTNERS/f6.webp";
import a4 from "../../../assets/images/PARTNERS/f7.webp";
import a14 from "../../../assets/images/PARTNERS/f8.webp";
import a5 from "../../../assets/images/PARTNERS/f9.webp";
import a15 from "../../../assets/images/PARTNERS/f10.webp";
import a6 from "../../../assets/images/PARTNERS/z1.webp";
import a16 from "../../../assets/images/PARTNERS/z2.webp";
import a7 from "../../../assets/images/PARTNERS/z3.webp";
import a17 from "../../../assets/images/PARTNERS/z4.webp";
import a8 from "../../../assets/images/PARTNERS/z5.webp";
import a18 from "../../../assets/images/PARTNERS/z6.webp";
import a9 from "../../../assets/images/PARTNERS/z7.webp";
import a19 from "../../../assets/images/PARTNERS/z8.webp";
import a10 from "../../../assets/images/PARTNERS/z9.webp";
import a20 from "../../../assets/images/PARTNERS/z10.webp";
const Cont2 = () => {
  const data = [
    {
      img1: a1,
      img2: a11,
      title: "Influencers",
    },
    {
      img1: a2,
      img2: a12,
      title: "Store Sales",
    },
    {
      img1: a3,
      img2: a13,
      title: "Managers",
    },
    {
      img1: a4,
      img2: a14,
      title: "Tailoring",
    },
    {
      img1: a5,
      img2: a15,
      title: "Delivery Rider",
    },
    {
      img1: a6,
      img2: a16,
      title: "Sourcing Agents",
    },
    {
      img1: a7,
      img2: a17,
      title: "Designers",
    },
    {
      img1: a8,
      img2: a18,
      title: "Value Add",
    },
    {
      img1: a9,
      img2: a19,
      title: "Fabric Suppliers",
    },
    {
      img1: a10,
      img2: a20,
      title: "Courier",
    },
  ];
  return (
    <div className="cont2 mt-20">
      <div className="container mx-auto">
        <div>
          <h1 className="text-white pb-2 text-3xl font-bold">
            The People of fashion
          </h1>
          <p className="text-[#eee]">Select the one that best describes you</p>
        </div>
        <div className="mt-10 grid grid-cols-5 items-center justify-evenly">
          {data.map((item, index) => {
            return (
              <div key={index} class="card-item mt-10 flex flex-col items-center justify-center ">
                <div class="img-container">
                  <img src={item.img1} alt="Private Labels" class="image" />
                  <img
                    src={item.img2}
                    alt="Legacy Businesses"
                    class="image hover-image"
                  />
                </div>
                <p class="mt-3 text-center font-bold">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cont2;
