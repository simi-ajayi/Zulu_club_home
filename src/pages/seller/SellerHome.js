import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../../components/api/Url";
import Banner3 from "../../components/cards/Banner3";
import UserContext from "../../context/UserContext";
import CategoriesMenu2 from "../../components/categaries_menu/CategoriesMenu2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card6 from "../../components/cards/Card6";
import BrandsSection2 from "../../components/brands/BrandsSection2";
import Highlights2 from "../../components/highlights/Highlights2";
import Features from "../../components/features/Features";
import Blogs2 from "../../components/blogs/Blogs2";
import Testimonials2 from "../../components/testimonials/Testimonials2";
import Model3D2 from "../../components/model3D/Model3D2";
import Video from "../../components/model3D/Video";
import { Link } from "react-router-dom";

const SellerHome = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const [modelData, setModelData] = useState([]);
  const { setError, setLoader, loader, error } = useContext(UserContext);
  const navigate = useNavigate(); // For programmatic navigation

  const sellersUrl = "https://zulushop.in/app/v1/api/get_sellers";
  const categoriesUrl = "https://zulushop.in/zulu_category_list";
  const sliderUrl = "https://zulushop.in/app/v1/api/get_slider_backup2";
  const baseUrl = "https://zulushop.in/";

  async function fetchData() {
    try {
      const response = await axios.post(sellersUrl);
      setData(response.data.data || []);
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
        const categoryImages = res.data
          .map((item) => ({
            image: item.image,
            name: item.name,
          }))
          .slice(0, 4);

        setCategories(categoryImages);
      } else {
        console.warn("Unexpected data structure:", res);
        setCategories([]);
      }
    } catch (error) {
      setError(true);
      console.error("Error fetching categories:", error);
    }
  }

  async function fetchSliderData() {
    try {
      const response = await axios.post(sliderUrl);
      const res = response.data;

      if (Array.isArray(res)) {
        const bannerImages = res.map((item) => `${baseUrl}${item.image}`);
        setSliderImages(bannerImages);
      } else {
        setSliderImages([]);
      }
    } catch (error) {
      setError(true);
      console.error("Error fetching slider images:", error);
    }
  }

  async function fetch3DModels() {
    try {
      const response = await axios.post(`${url}/get_all_videos`, { video_type: "3dModel" });
      setModelData(response.data.message || []);
    } catch (error) {
      console.error("Error fetching 3D models:", error);
      setError(true);
    }
  }

  useEffect(() => {
    const fetchAllData = async () => {
      setLoader(true);
      await Promise.all([fetchData(), fetchCategories(), fetchSliderData(), fetch3DModels()]);
      setLoader(false);
    };
    fetchAllData();
  }, [setLoader, setError]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      {sliderImages.length > 0 ? (
        <Banner3 images={sliderImages} />
      ) : (
        <p>No images to display</p>
      )}
      <CategoriesMenu2 data={data} />

      <div className="flex flex-row items-center justify-between mt-20 mb-5">
        <h1 className="font-bold text-4xl">Outlets Near Me</h1>
        <div>
          <Link to="/AllOutlets" className="text-blue-700">
            View All
          </Link>
        </div>
      </div>

      <Slider {...settings}>
        {data.map((value) => (
          <div className="px-2" key={value.seller_id}>
            <Card6 data={value} />
          </div>
        ))}
      </Slider>

      <BrandsSection2 data={data} />
      <Highlights2 data={data} />
      <Features data={data} />
      <Blogs2 data={data} />
      <Testimonials2 data={data} />
      <Model3D2 data={data} modelData={modelData} />
      <Video data={data} modelData={modelData} />
    </>
  );
};

export default SellerHome;
