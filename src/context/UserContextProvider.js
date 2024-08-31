import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

import axios from "axios";

const UserContextProvider = ({ children }) => {
  const [data2, setData2] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  const url = "https://zulushop.in/app/v1/api/seller_list?id=85";

  async function sellerList() {
    try {
      let response = await axios.post(url);
      let res = await response.data;
      setData2(res[0]);
      setLoader(false);
      setError(false);
    } catch (error) {
      setError(true);
      console.log("ERROR MESSAGE :: ", error.message);
    }
  }

  useEffect(() => {
    sellerList();
  }, []);

  return (
    <UserContext.Provider value={{ data2, loader, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
