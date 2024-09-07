import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
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
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const { setError, setLoader } = useContext(UserContext);
  const sellersUrl = "https://zulushop.in/app/v1/api/get_sellers";
  const categoriesUrl = "https://zulushop.in/zulu_category_list";
  const sliderUrl = "https://zulushop.in/zulu_slider_list"; 

  async function fetchData() {
    try {
      const response = await axios.post(sellersUrl);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching sellers:", error);
      setError(true);
    }
  }

  async function fetchCategories() {
    try {
      const response = await axios.post(categoriesUrl);
      let res = response.data;
      const baseUrl = "/uploads/category/";
  
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
        const categoryImages = res.data.map((item) => {

          const imageUrl = item.image.includes('zulushop.in') ? item.image : `${baseUrl}${item.image}`;
          return {
            image: imageUrl,
            name: item.name 
          };
        }).slice(0, 4);
  
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
  
  async function fetchSliderData() {
    try {
      const response = await axios.post(sliderUrl);
      let res = response.data;
      const baseUrl = "https://zulushop.in/uploads/slider/";

      if (typeof res === 'string') {
        try {
          res = JSON.parse(res);
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
          setSliderImages([]);
          return;
        }
      }

      if (Array.isArray(res.data)) {
        const bannerImages = res.data.map((item) => {
          const imageUrl = item.image.startsWith('http') ? item.image : `${baseUrl}${item.image}`;
          return imageUrl;
        }).filter(url => url !== null);

        setSliderImages(bannerImages);
      } else {
        console.warn("Unexpected data structure:", res);
        setSliderImages([]);
      }
    } catch (error) {
      setError(true);
      console.error("Error fetching slider images:", error);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    fetchData();
    fetchCategories();
    fetchSliderData();
  }, []);

  return (
    <>
      <Banner1 images={sliderImages} />
      {sliderImages.length === 0 && <p>No images to display</p>}
      <h1 className="font-bold text-4xl mt-32 my-5">Zulu B2B section</h1>
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
