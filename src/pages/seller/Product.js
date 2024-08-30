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

const Product = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [loader, setLoader] = useState(true);

  const [sliderImage, setSliderImage] = useState([]);

  const { id } = useParams();

  const url = "https://zulushop.in/app/v1/api/get_sellers";
  const url8 = "https://zulushop.in/app/v1/api/seller_list";

  async function fetchData() {
    let response = await axios.post(url);
    let res = await response.data.data;
    let filteredProducts = res.filter((product) => product.slug === id);
    setData(filteredProducts[0]);
    // console.log(data);
  }

  async function sellerList() {
    let response = await axios.post(
      "https://zulushop.in/app/v1/api/seller_list?id=85"
    );
    let res = await response.data;
    // console.log(res);
    // let filteredProducts = res.filter((product) => product.slug === id);
    // console.log("data is here", filteredProducts);
    // setData2(filteredProducts[0]);
    // setData2(filteredProducts);
    // console.log(filteredProducts.sliderImages);

    setData2(res);
    console.log(res)
    setLoader(false);

    console.log(res[0].slider_images);
    setSliderImage(res[0].slider_images);
    // setSliderImage(data2.sliderImages);
  }
  
  console.log();

  useEffect(() => {
    fetchData();
    sellerList();
  }, []);

  // console.log(data2.slider_images);

  let sliderImages = data2[0]?.slider_images;

  try {
    sliderImages = JSON.parse(sliderImages);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  if (loader) {
    return (
      <h1 className="flex justify-center items-center h-screen text-3xl font-bold">
        Loading...
      </h1>
    );
  }

  return (
    <>
      <Header data2={data2} />
      <div className="mt-20">
        <h1>neejjdklsjaklfj</h1>
        {sliderImages.map((item) => (
          <img src={`https://zulushop.in/uploads/seller/${item.file_name}`} />
        ))}
      </div>

      <div className="mt-24">
        <CategoriesMenu />
        <Banner1 images={sliderImages} />
        <BrandsSection />
        <Categories />
        <Features />
        <ProductGalleries />
        <Blogs />
        <Testimonials />
      </div>

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

export default Product;
