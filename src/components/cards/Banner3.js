import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import UserContext from "../../context/UserContext";
import { url } from "../api/Url";
import axios from "axios";
const Banner3 = ({ images }) => {
  const [data, setData] = useState()

  const {
    sellerListdata,
    setSellerListdata,
    loader,
    error,
    setLoader,
    setError,
  } = useContext(UserContext);


  async function sellerList() {
    try {
      let response = await axios.post(url + "/app/v1/api/seller_list?id=85");
      let res = await response.data;

      // console.log(typeof(res[0]?.json_component)) // string convert object
      const data = res[0]?.json_component
      // console.log(typeof(data))
      // console.log(data)
      const Jsonres = JSON.parse(data)
      setSellerListdata(res[0]);

      setData(Jsonres)
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
  console.log( data ,'dataslider')
  return (
    <div className="text-left font-bold text-[22px] mt-5" >

      {/* {
          data?.component?.image_gallery?.show_title === 'on' ? <h1 style={{color:`${data?.component?.image_gallery?.color}`}}>Images from us</h1> : ""
        } */}
    <div className="mt-5">
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
        }}
        className="mySwiper"
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img
              src={imageUrl}
              className="w-full h-auto max-w-[700px] object-cover"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Banner3;
