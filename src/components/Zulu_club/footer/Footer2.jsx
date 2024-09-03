import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer2 = () => {
  return (
    <footer id="foot" className="py-16 text-white">
      <div className="container w-full mx-auto  text-left pt-5">
        <section>
          <div className="flex flex-wrap text-left">
            <div className="w-full md:w-1/4  mt-3">
              <h6 className="mb-4 font-bold text-lg">Company</h6>
              <p>About us</p>
              <p>Contact us</p>
              <p>Business</p>
              <p>Channel Partners</p>
            </div>
            <div className="w-full md:w-1/4  mt-3">
              <h6 className="mb-4 font-bold text-lg">Legal</h6>
              <p>
                <a href="#">Privacy Policy</a>
              </p>
              <p>
                <a href="#">Terms & Conditions</a>
              </p>
              <p>
                <a href="#">Return Policy</a>
              </p>
            </div>
            <div className="w-full md:w-1/4  mt-3">
              <h6 className="mb-4 font-bold text-lg text-left">Contact us</h6>
              <p>hi@zulu.club</p>
              <p> +91 85279 20080</p>
              <p>
                Golf Course Extn Road,
                <br />
                Gurgaon, Harayana, India
              </p>
            </div>
          </div>
        </section>
      </div>
      <hr className="border-none outline-none" />
      <div className="container mx-auto  px-4 py-2 w-full">
        <div className="flex mb-3 float-right">
          <a href="#" className="px-2">
            <FaTwitter />
          </a>
          <a href="#" className="px-2">
            <FaFacebookF />
          </a>
          <a href="#" className="px-2">
            <FaInstagram />
          </a>
          <a href="#" className="px-2">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
