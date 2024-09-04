import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Popup = ({ isVisible, onClose }) => {
  return (
    <div
      id="Popup"
      className={`fixed inset-0 w-full h-full bg-[#1f0a1dc5] text-left ${
        isVisible ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="relative bg-[#1f0a1d] text-white border-2 border-[#dbca90] rounded-2xl shadow-[0_0_20px_#dbca90c1] py-8 px-10 max-w-xs md:max-w-sm">
        <div>
          <IoIosCloseCircleOutline
            onClick={onClose}
            className="text-3xl absolute right-5 top-4 cursor-pointer text-[#dbca90]"
          />
        </div>
        <form>
          <h1 className="pt-3 text-xl font-bold">Register</h1>

          <label htmlFor="name" className="block mt-10 font-semibold">
            Name
          </label>
          <input
            className="w-full mt-2 px-2 py-3 border-0 rounded outline-none text-black"
            type="text"
            placeholder="Enter Name"
            name="name"
          />

          <label className="block mt-4 font-semibold" htmlFor="mobile">
            Phone No
          </label>
          <input
            className="w-full mt-2 px-2 py-3 border-0 rounded outline-none text-black"
            type="tel"
            placeholder="Enter Phone No"
            name="mobile"
            required
          />
          <label className="block mt-4 font-semibold" htmlFor="mobile">
            Email
          </label>
          <input
            className="w-full mt-2 px-2 py-3 border-0 rounded outline-none text-black"
            type="tel"
            placeholder="Enter Email"
            name="mobile"
            required
          />

          <button
            type="submit"
            className="w-full mt-16 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
