import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

const Test2 = () => {
  const { data2, loader, error } = useContext(UserContext);

  let jsoncomponent = data2?.json_component;

  try {
    jsoncomponent = JSON.parse(jsoncomponent);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  console.log(jsoncomponent);










  if (loader) {
    return (
      <h1 className="flex justify-center items-center h-screen text-3xl font-bold">
        Loading...
      </h1>
    );
  }
  if (error) {
    return (
      <h1 className="flex justify-center items-center h-screen text-3xl font-bold">
        Something went wrong... {error.message}
      </h1>
    );
  }

  return <div>Test2</div>;
};

export default Test2;
