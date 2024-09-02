import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";

const Test2 = () => {
  const { sellerListdata } = useContext(UserContext);

  // Access the nested text property
  const text = sellerListdata?.json_component?.component?.super_top_bar?.text;

  return <div>{text ? <p>{text}</p> : <p>Loading...</p>}</div>;
};

export default Test2;
