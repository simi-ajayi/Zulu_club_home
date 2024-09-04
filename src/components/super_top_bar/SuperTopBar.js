import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const SuperTopBar = () => {
  const { sellerListdata } = useContext(UserContext);

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