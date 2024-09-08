import React from "react";
import AllModel3D from "./AllModel3D"; 

const AllModel3DPage = () => {

  const pageData = {
    component: {
      image_gallery: {
        color: "#000000", // Example color for the 3D Models header
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <AllModel3D data={pageData} />
    </div>
  );
};

export default AllModel3DPage;
