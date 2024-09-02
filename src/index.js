import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import SellerHome from "./pages/seller/SellerHome";
import Test from "./pages/new/Test";
import Test2 from "./pages/new/Test2";
import ShopNowPage from "./pages/shop_now/ShopNowPage";
import SellerDetails from "./pages/seller/SellerDetails";
import ProductPage from "./pages/product_page/ProductPage ";
import Home from "./pages/zulu_club/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <SellerHome />,
      },
      {
        path: "/:id",
        element: <SellerDetails />,
        children: [],
      },
      {
        path: "/shopnowpage",
        element: <ShopNowPage />,
      },
      {
        path: "/ProductPage ",
        element: <ProductPage />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/test2",
        element: <Test2 />,
      },
    ],
  },
  {
    path: "/Home",
    element: <Home />,
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
