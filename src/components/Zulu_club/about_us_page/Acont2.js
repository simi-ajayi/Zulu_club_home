import React from "react";

const Acont2 = () => {
  const data = [
    {
      title: "YESTERDAY",
      subtitle: [
        { t1: "Offline First" },
        { t1: "B2C Websites" },
        { t1: "Showroom Branding" },
        { t1: "Digital B2B Catalogs" },
      ],
    },
    {
      title: "TODAY",
      subtitle: [
        { t1: "Online First" },
        { t1: "Mobile App" },
        { t1: "Digital Banners & Videos" },
        { t1: "B2B market & enquries" },
      ],
    },
    {
      title: "TOMORROW",
      subtitle: [
        { t1: "Omnichannel First" },
        { t1: "Try at Home" },
        { t1: "Loyalty & Community" },
        { t1: "Digital Roadshows" },
      ],
    },
    {
      title: "FUTURE",
      subtitle: [
        { t1: "Experience First ?" },
        { t1: "Customized at home ?" },
        { t1: "Dedicated exp centres ?" },
        { t1: "Intelligent B2B buying ?" },
      ],
    },
  ];
  return (
    <div className="cont2 container mt-20">
      <h1 className="text-4xl font-bold pb-5">
        Browse the experience you want to deliver
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-5 ">
        {data.map((item, index) => (
          <div key={index} className="col mb-4">
            <h5 className="text-white">{item.title}</h5>
            <ul className="bg-white mt-3 rounded p-5 leading-[40px] text-black">
              {item.subtitle.map((subitem, index) => (
                <li key={index}>{subitem.t1}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acont2;
