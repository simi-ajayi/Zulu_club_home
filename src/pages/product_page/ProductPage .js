import React, { useState } from "react";
import Description from "../../components/product_page_components/Description";
import Reviews from "../../components/product_page_components/Reviews";
import SoldBy from "../../components/product_page_components/SoldBy";
import FAQs from "../../components/product_page_components/FAQs";
import CollapsibleSection from "../../components/product_page_components/CollapsibleSection";

const ProductPage = () => {
  const product = {
    id: 1,
    name: "Awesome Product",
    description: "This is a fantastic product that you will love!",
    price: "Rs. 500.00",
    imageUrl: "https://via.placeholder.com/500",
    images: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],
    discount: "10%",
  };

  const [quantity, setQuantity] = useState(1);
  const [zipCode, setZipCode] = useState("");
  const [isZipValid, setIsZipValid] = useState(null);

  const [openSection, setOpenSection] = useState("description");

  const handleSectionClick = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? "" : section));
  };

  const handleAddToCart = () => {
    console.log("Added to cart", { productId: product.id, quantity });
  };

  const handleBuyNow = () => {
    console.log("Buy now", { productId: product.id, quantity });
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + increment));
  };

  const handleZipCheck = () => {
    // Replace with actual ZIP code validation logic
    const isValid = zipCode === "12345"; // Example ZIP code
    setIsZipValid(isValid);
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center text-left">
        <div className="w-full bg-white rounded-lg shadow-md p-6 flex flex-col justify-between lg:flex-row ">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full lg:w-4/5 h-auto object-cover rounded-lg mb-4"
            />
            <div className="flex space-x-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover rounded cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="w-[40%]">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4">
              <span className="text-2xl font-semibold text-gray-800">
                {product.price}
              </span>
              <span className="ml-2 text-lg text-green-500">
                {product.discount} off
              </span>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
              >
                +
              </button>
            </div>
            <div className="mt-6 flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
              >
                Buy Now
              </button>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full"
              />
              <button
                onClick={handleZipCheck}
                className="mt-2 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition w-full"
              >
                Check Availability
              </button>
              {isZipValid !== null && (
                <p
                  className={`mt-2 ${
                    isZipValid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {isZipValid
                    ? "Product is available in your area!"
                    : "Sorry, not available in your area."}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <CollapsibleSection
        title="Description"
        isOpen={openSection === "description"}
        onClick={() => handleSectionClick("description")}
      >
        <Description />
      </CollapsibleSection>

      <CollapsibleSection
        title="Reviews"
        isOpen={openSection === "reviews"}
        onClick={() => handleSectionClick("reviews")}
      >
        <Reviews />
      </CollapsibleSection>

      <CollapsibleSection
        title="Sold By"
        isOpen={openSection === "soldBy"}
        onClick={() => handleSectionClick("soldBy")}
      >
        <SoldBy />
      </CollapsibleSection>

      <CollapsibleSection
        title="FAQs"
        isOpen={openSection === "faqs"}
        onClick={() => handleSectionClick("faqs")}
      >
        <FAQs />
      </CollapsibleSection>
    </>
  );
};

export default ProductPage;
