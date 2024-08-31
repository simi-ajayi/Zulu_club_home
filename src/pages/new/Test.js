import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Test = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const url = "https://zulushop.in/app/v1/api/get_products";
  async function fetchData() {
    let response = await axios.post(url);
    let res = await response.data.data;
    let filteredProducts = res.filter((product) => product.slug === id);
    console.log(filteredProducts[0]);
    // setPro(filteredProducts[0]);
    // console.log(data);
    setProduct(res[3]);
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(product);
  return (
    <div className="flex flex-wrap justify-between gap-2 text-left mt-20">
      <div className="border-2 ">
        <p> category_id : {product.category_id}</p>
        <p> category_id : {product.seller_id}</p>
        <p> category_name : {product.category_name}</p>
        <p> description : {product.description}</p>
        <p> indicator : {product.indicator}</p>
        <p> product_slug : {product.product_slug}</p>
        <p> quantity_step_size : {product.quantity_step_size}</p>
        <p> seller_name : {product.seller_name}</p>
        <p> tax_percentage : {product.tax_percentage}</p>
        <p> total_allowed_quantity : {product.total_allowed_quantity}</p>
        <p> product_slug : {product.product_slug}</p>
        <img src={product.image} alt={product.title} className="w-1/2" />
      </div>
    </div>
  );
};

export default Test;
