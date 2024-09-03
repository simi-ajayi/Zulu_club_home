import React, { useEffect, useState } from "react";
import axios from "axios";
import Card1 from "../../components/cards/Card1";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const SellerHome = () => {
  const [data, setData] = useState([]);
  const Url = "https://zulushop.in/app/v1/api/get_sellers";

  async function fetchData() {
    let response = await axios.post(Url);
    let res = await response.data.data;
    setData(res);
  }

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);
  return (
    <>
      <h1 className="font-bold text-4xl mt-32 my-5">Zulu B2B section</h1>
      <div className="flex flex-wrap justify-between">
        {data.map((value) => {
          return <Card1 data={value} key={value.seller_id} />;
        })}
      </div>

      <h1 className="font-bold text-4xl mt-32 my-5">Zulu B2B section</h1>
      <div className="flex flex-wrap justify-between">
        {data.map((value) => {
          return <Card1 data={value} key={value.seller_id} />;
        })}
      </div>
    </>
  );
};

export default SellerHome;
