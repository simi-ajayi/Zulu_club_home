import React, { useEffect, useState } from "react";
import Card2 from "../cards/Card2";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoriesMenu2 = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [categoriesId, setCategoriesId] = useState([]);

  const flattenCategories = (categories) => {
    let flatList = [];

    categories.forEach((category) => {
      flatList.push(category);

      if (category.children && Array.isArray(category.children)) {
        flatList = flatList.concat(flattenCategories(category.children));
      }
    });

    return flatList;
  };

  const getCategories = async () => {
    const categoriesUrl = "https://zulushop.in/zulu_category_list";

    try {
      const response = await axios.post(categoriesUrl);
      let res = response.data;

      console.log("Categories API response:", res);

      if (typeof res === "string") {
        try {
          res = JSON.parse(res);
        } catch (error) {
          console.error("Error parsing JSON response:", error);
          setCategoriesData([]);
          return;
        }
      }

      if (Array.isArray(res.data)) {
        const flattenedCategories = flattenCategories(res.data);
        console.log("Flattened categories:", flattenedCategories);

        const categories = flattenedCategories
          .filter((category) =>
            categoriesId.includes(category.id.toString())
          )
          .map((category) => ({
            zulu_category_name: category.name,
            zulu_category_image: `${category.image}`,
            zulu_category_id: category.id,
          }));

        console.log("Filtered categories:", categories);
        setCategoriesData(categories);
      } else {
        console.warn("Unexpected data structure:", res);
        setCategoriesData([]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategoriesData([]);
    }
  };

  const getWebcontrolCategories = async () => {
    const webcontrolUrl = "https://zulushop.in/app/v1/api/list_of_webcontroll";
    try {
      const response = await axios.post(webcontrolUrl);
      const res = response.data;

      console.log("Webcontrol API response:", res);

      if (Array.isArray(res.message) && res.message.length > 0) {
        const categoryIds = res.message[0].categories_id.split(",");
        console.log("Extracted category IDs from Webcontrol API:", categoryIds);
        setCategoriesId(categoryIds);
      } else {
        console.warn("Unexpected data structure from webcontrol:", res);
      }
    } catch (error) {
      console.error("Error fetching webcontrol categories:", error);
    }
  };

  useEffect(() => {
    getWebcontrolCategories();
  }, []);

  useEffect(() => {
    if (categoriesId.length > 0) {
      console.log("Categories ID state updated, calling getCategories:", categoriesId);
      getCategories();
    }
  }, [categoriesId]);

  return (
    <div className="mt-6">
      <div className="mt-3">
        <div className="flex justify-between mt-6 mb-3 items-center">
          <h1 className="text-left font-bold text-2xl">Categories</h1>
          <Link to="/AllCategories">
            <div className="text-blue-500 py-1 px-3 rounded">
              View All
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categoriesData.length > 0 ? (
            categoriesData.map((category) => (
              <div key={category.zulu_category_id}>
                <Card2
                  className="p-1"
                  zulu_category_name={category.zulu_category_name}
                  zulu_category_image={category.zulu_category_image}
                  zulu_category_id={category.zulu_category_id}
                />
              </div>
            ))
          ) : (
            <p>No categories to display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesMenu2;
