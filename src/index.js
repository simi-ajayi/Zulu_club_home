import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout2 from "./Layout2";
import SellerHome from "./pages/seller/SellerHome";
import Test from "./pages/new/Test";
import Test2 from "./pages/new/Test2";
import ShopNowPage from "./pages/shop_now/ShopNowPage";
import SellerDetails from "./pages/seller/SellerDetails";
import ProductPage from "./pages/product_page/ProductPage ";
import Layout from "./Layout";
import HomePage from "./pages/zulu_club/HomePage";
import BrandsPage from "./pages/zulu_club/BrandsPage";
import PartnersPage from "./pages/zulu_club/PartnersPage";
import AboutUsPage from "./pages/zulu_club/AboutUsPage";
import ConsumerPage from "./pages/zulu_club/ConsumerPage";

import Bussinesspage from "./pages/zulu_club/Bussinesspage";
import Business from "./components/Zulu_club/home_page_compo/Business";
import AllModel3D from "./components/model3D/AllModel3D";
import Video from "./components/model3D/Video";
import ViewAllCategories from "./components/categaries_menu/ViewAllCategories";
import ViewAllOutlets from "./components/cards/ViewAllOutlets";
import AllBrands from "./components/brands/AllBrands";
import AllHighlights from "./components/highlights/AllHighlights";
import AllFeatures from "./components/features/AllFeatures";
import AllBlogs from "./components/blogs/AllBlogs";
import AllTestimonials from "./components/testimonials/AllTestimonials";
import AllVideo from "./components/model3D/AllVideo";
/* <Bussinesspage /> */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "business",
        element: <HomePage />,
      },
      {
        path: "business-page",
        element: <Business />,
      },
      {
        path: "brands",
        element: <BrandsPage />,
      },
      {
        path: "partners",
        element: <PartnersPage />,
      },
      {
        path: "",
        element: <AboutUsPage />,
      },
      {
        path: "consumer",
        element: <ConsumerPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout2 />,
    children: [
      {
        path: "SellerHome",
        element: <SellerHome />,
      },
      {
        path: "SellerHome/:id",
        element: <SellerDetails />,
      },
      {
        path: "shopnowpage",
        element: <ShopNowPage />,
      },
      {
        path: "ProductPage ",
        element: <ProductPage />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "test2",
        element: <Test2 />,
      },
      {
        path: "All3DModels",
        element: <AllModel3D />,
      },
      {
        path: "AllVideos",
        element: <AllVideo />,
      },
      {
        path: "AllCategories",
        element: <ViewAllCategories />,
      },
      {
        path: "AllOutlets",
        element: <ViewAllOutlets />,
      },
      {
        path: "AllBrands",
        element: <AllBrands />,
      },
      {
        path: "AllHighlights",
        element: <AllHighlights />,
      },
      {
        path: "AllFeatures",
        element: <AllFeatures />,
      },
      {
        path: "AllBlogs",
        element: <AllBlogs />,
      },
      {
        path: "AllTestimonials",
        element: <AllTestimonials />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
