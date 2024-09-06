import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import { url } from "../api/Url";
import axios from "axios";

const SuperTopBar = () => {
  const {
    sellerListdata,
    setSellerListdata,
    loader,
    error,
    setLoader,
    setError,
  } = useContext(UserContext);

const [data,setData] = useState()

  async function sellerList() {
    // const json = JSON.stringify({ seller_id: "85" });
    try {
      let response = await axios.post(url + "/app/v1/api/seller_list?id=85");
      let res = await response.data;

      // console.log(typeof(res[0]?.json_component)) // string convert object
      const data = res[0]?.json_component
      // console.log(typeof(data))
      // console.log(data)
      const Jsonres = JSON.parse(data)
      setSellerListdata(res[0]);
      // console.log(Jsonres.component)
      setData(Jsonres)
      // console.log(super_top_bar)
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
    // console.log(sellerListdata.json_component.component)
  //   let jsonComponentValue = sellerListdata?.component?.json_component;
  //   //   let sliderImages = sellerListdata?.slider_images;
  //   try {
  //     jsonComponentValue = JSON.parse(jsonComponentValue);
  //   } catch (error) {
  //     console.error("Error parsing JSON:", error);
  //   }
  //   console.log(jsonComponentValue);

  const jsonComponent = sellerListdata?.component?.json_component;
  const text = sellerListdata?.json_component?.component?.super_top_bar?.text;
  return (
   <div className="">
    {/* <p>{text}</p> */}
    
   </div>
  );

//   {
//     "component": {
//       "super_top_bar": {
//         "website_style": "default",    
//         "super_top_bar": "on",
//         "text": "Welcome to our store Sir!!",
//         "height": "50",
//         "display": "Carousel",
//         "color": "#FFE0C8C8",
//         "backgroundcolor": "#FFCEB1B1"
//       }}}
};

export default SuperTopBar;
