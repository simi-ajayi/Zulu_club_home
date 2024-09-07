import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { url } from "../../components/api/Url";
import Card1 from "../../components/cards/Card1";
import Banner1 from "../../components/cards/Banner1";
import UserContext from "../../context/UserContext";
import BrandsSection from "../../components/brands/BrandsSection";
import Categories from "../../components/Categories/Categories2";
import Features from "../../components/features/Features";
import Blogs from "../../components/blogs/Blogs";
import Testimonials from "../../components/testimonials/Testimonials";
import VideoSlider from "../../components/video_slider/VideoSlider";
import OutletBanner from "../../components/outlet_banner/OutletBanner";
import AboutUs from "../../components/about_us/AboutUs";
import Highlights from "../../components/highlights/Highlights";
import Model3D from "../../components/model3D/Model3D";

const SellerHome = () => {
  const [data, setData] = useState([]); // Ensure data is an array
  const [categories, setCategories] = useState([]);
  const { setError, setLoader, sellerListdata, setSellerListdata, loader, error } = useContext(UserContext);
  const sellersUrl = "https://zulushop.in/app/v1/api/get_sellers";
  const categoriesUrl = "https://zulushop.in/zulu_category_list";
  const sliderUrl = "https://zulushop.in/zulu_slider_list";

  async function fetchData() {
    try {
      const response = await axios.post(sellersUrl);
      setData(response.data.data || []); // Ensure the data is an array
    } catch (error) {
      console.error("Error fetching sellers:", error);
      setError(true);
    }
  }

  async function fetchCategories() {
    try {
      const response = await axios.post(categoriesUrl);
      let res = response.data;

      if (typeof res === 'string') {
        try {
          res = JSON.parse(res);
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
          setCategories([]);
          return;
        }
      }

      if (Array.isArray(res.data)) {
        const categoryImages = res.data.map((item) => ({
          image: item.image,
          name: item.name,
        })).slice(0, 4);

        setCategories(categoryImages);
      } else {
        console.warn("Unexpected data structure:", res);
        setCategories([]);
      }
    } catch (error) {
      setError(true);
      console.error("Error fetching categories:", error);
    } finally {
      setLoader(false);
    }
  }

  async function sellerList() {
    try {
      const response = await axios.post(url + "/app/v1/api/seller_list?id=85");
      const res = await response.data;
      const data = res[0]?.json_component || '{}';
      const Jsonres = JSON.parse(data);
      if (Array.isArray(Jsonres)) {
        setSellerListdata(res[0]);
        setData(Jsonres);
      } else {
        console.warn("Invalid data structure for seller list.");
        setData([]);
      }
      setLoader(false);
      setError(false);
    } catch (error) {
      setError(true);
      console.log("ERROR MESSAGE :: ", error.message);
    }
  }

  useEffect(() => {
    const fetchAllData = async () => {
      setLoader(true);
      await Promise.all([fetchData(), fetchCategories(), sellerList()]);
      setLoader(false);
    };
    fetchAllData();
  }, []);

  let sliderImages = sellerListdata?.slider_images || [];
  try {
    sliderImages = JSON.parse(sliderImages);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    sliderImages = [];
  }

  return (
    <>
      {sliderImages.length > 0 ? (
        <Banner1 images={sliderImages} />
      ) : (
        <p>No images to display</p>
      )}
      <h1 className="font-bold text-4xl mt-32 my-5">Zulu B2B section</h1>
      
      {error && <p className="text-red-500">An error occurred. Please try again later.</p>}
      {loader && <p>Loading...</p>}

      <div className="flex flex-wrap justify-between">
        {data.map((value) => (
          <Card1 data={value} key={value.seller_id} />
        ))}
      </div>
      
      <BrandsSection data={data} />
      <Categories data={categories} /> 
      <Highlights data={data} />
      <Features data={data} />
      <Blogs data={data} />
      <Testimonials data={data} />
      <VideoSlider data={data} />
      <Model3D data={data} />
      <OutletBanner data={data} />
      <AboutUs data={data} />
    </>
  );
};

export default SellerHome;
