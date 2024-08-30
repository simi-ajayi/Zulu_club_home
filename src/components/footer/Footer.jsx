import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer id="foot" class="text-left w-full  py-16">
      <div class="container pt-5">
        <section>
          <div class="flex flex-wrap text-left">
            <div class="w-full md:w-1/4  mt-3">
              <h6 class="mb-4 font-bold text-lg">Company</h6>
              <p>About us</p>
              <p>Contact us</p>
              <p>Business</p>
              <p>Channel Partners</p>
            </div>
            <div class="w-full md:w-1/4  mt-3">
              <h6 class="mb-4 font-bold text-lg">Legal</h6>
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
            <div class="w-full md:w-1/4  mt-3">
              <h6 class="mb-4 font-bold text-lg text-left">Contact us</h6>
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
      <hr class="border-none outline-none" />
      <div class="container px-4 py-2 w-full">
        <div class="flex mb-3 float-right">
          <a href="#" class="px-2">
            <FaTwitter />
          </a>
          <a href="#" class="px-2">
            <FaFacebookF />
          </a>
          <a href="#" class="px-2">
            <FaInstagram />
          </a>
          <a href="#" class="px-2">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
