import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import axios from "axios";
import { url } from "../components/api/Url";

const UserContextProvider = ({ children }) => {
  const [sellerListdata, setSellerListdata] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  // const url = "https://zulushop.in/app/v1/api/seller_list?id=85";

  // async function sellerList() {
  //   // const json = JSON.stringify({ seller_id: "85" });
  //   try {
  //     let response = await axios.post(url + "app/v1/api/seller_list?id=85");
  //     let res = await response.data;
  //     setSellerListdata(res[0]);
  //     setLoader(false);
  //     setError(false);
  //   } catch (error) {
  //     setError(true);
  //     console.log("ERROR MESSAGE :: ", error.message);
  //   }
  // }

  // useEffect(() => {
  //   // sellerList();
  // }, []);
  // console.log("sellerListdata", sellerListdata);
  return (
    <UserContext.Provider
      value={{
        sellerListdata,
        setSellerListdata,
        loader,
        error,
        setLoader,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
