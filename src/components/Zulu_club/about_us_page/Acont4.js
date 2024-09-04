import React from "react";
import { Link } from "react-router-dom";

const Acont4 = () => {
  return (
    <div className="cont4 container mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0">
        <div className="col">
          <Link to='/business'>
            <button className="text-xl btn1 py-3 w-[250px]" >
              BUSINESSES
            </button>
          </Link>
        </div>
        <div className="col">
          <Link to="/brands">
            <button className="text-xl btn1 py-3 w-[250px]" >
              BRANDS
            </button>
          </Link>
        </div>
        <div className="col">
          <Link to="/partners">
            <button className="text-xl btn1 py-3 w-[250px]" >
              PARTNERS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Acont4;
