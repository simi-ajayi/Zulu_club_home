import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card2 from "../../components/cards/Card2";
import Header from "../../components/header/Header";
import Banner1 from "../../components/cards/Banner1";
import BrandsSection from "../../components/brands/BrandsSection";
import CategoriesMenu from "../../components/categaries_menu/CategoriesMenu";
import Categories from "../../components/Categories/Categories";
import Features from "../../components/features/Features";
import ProductGalleries from "../../components/product_galleries/ProductGalleries";
import Blogs from "../../components/blogs/Blogs";
import Testimonials from "../../components/testimonials/Testimonials";
import VideoSlider from "../../components/video_slider/VideoSlider";
import OutletBanner from "../../components/outlet_banner/OutletBanner";
import AboutUs from "../../components/about_us/AboutUs";

const SellerDetails = () => {
  const [data2, setData2] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const url = "https://zulushop.in/app/v1/api/seller_list?id=85";

  async function sellerList() {
    try {
      let response = await axios.post(url);
      let res = await response.data;
      // console.log(res);
      // let filteredProducts = res.filter((product) => product.slug === id);
      // console.log("data is here", filteredProducts);
      // setData2(filteredProducts[0]);
      // setData2(filteredProducts);

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

  let sliderImages = data2?.slider_images;

  try {
    sliderImages = JSON.parse(sliderImages);
  } catch (error) {
    // console.error("Error parsing JSON:", error);
  }

  // console.log(sliderImages)

  if (loader) {
    return (
      <h1 className="flex justify-center items-center h-screen text-3xl font-bold">
        Loading...
      </h1>
    );
  }
  if (error) {
    return (
      <h1 className="flex justify-center items-center h-screen text-3xl font-bold">
        Something went wrong... {error.message}
      </h1>
    );
  }

  // console.log("data2 is here", data2.json_component);

  return (
    <>
      <Header data2={data2} />
      <CategoriesMenu />
      <Banner1 images={sliderImages} />
       <BrandsSection /> 
      <Categories />
      <Features />
      <ProductGalleries />
      <Blogs />
      <Testimonials />
      <VideoSlider />
      <OutletBanner />
      <AboutUs />

      {/* second api */}

      {/* <div className={`mt-20 flex flex-wrap justify-between`}>
        <div className="mt-32 text-left border-2 w-[30%]  border-black rounded-2xl p-5">
          <p>
            slug : <span className="font-bold">{data2.slug}</span>
          </p>
          <p>
            user_id : <span className="font-bold">{data2.user_id}</span>
          </p>
          <h1>id : {data2.id}</h1>
          <p>category_ids : {data2.category_ids}</p>
          <p>store_name : {data2.store_name}</p>
          <p>store_description : {data2.store_description}</p>
          <img src={data2.logo} alt="logo" />
          <p> rating : {data2.rating}</p>
          <p> bank_name : {data2.bank_name}</p>
          <p> bank_code : {data2.bank_code}</p>
          <p> account_name : {data2.account_name}</p>
          <img src={data2.national_identity_card} alt="" />
          <img src={data2.authorized_signature} alt="" />
          <p> permissions : {data2.permissions}</p>
          <p> user_type : {data2.user_type}</p>
          <p> outlet_type : {data2.outlet_type}</p>
          <p> tag_line : {data2.tag_line}</p>
          <p> page_width : {data2.page_width}</p>
          <p> text_color_2 : {data2.text_color_2}</p>
          <p> return_policy : {data2.return_policy}</p>
          <p> top_line_data : {data2.top_line_data}</p>
          <p> banner_image : {data2.banner_image}</p>
          <p> banner_image : {data2.banner_image}</p>
          <p>
            slider_images :
            <img
              src="https://zulushop.in/uploads/seller/Frame_1300931.png"
              alt=""
            />
          </p>
        </div>
      </div> */}
    </>
  );
};

export default SellerDetails;
