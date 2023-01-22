import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { RiFacebookLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { IconContext } from "react-icons";
import NewsLetter from "../Pages/NewsLetter/NewsLetter";

const Footer = () => {
  return (
    <>
      <NewsLetter />
      <div className="bg-[#F2F3F5] pt-12">
        <div className="flex justify-between container mx-auto font-Libre mb-16 py-10 ">
          <aside className="">
            <h1 className="text-3xl uppercase text-black font-semibold mb-5">
              Shop-EX
            </h1>
            <p className="text-[16px] text-[#121212] mb-5">
              Our company is dedicated to creating unique and <br /> comfortable
              clothing for men and women.
            </p>

            <div className="flex items-center text-[14px] space-x-3 mb-3">
              <IconContext.Provider value={{ size: 16 }}>
                <FaPhoneAlt />
              </IconContext.Provider>
              <p>Call Us : +880 1780082914</p>
            </div>
            <div className="flex items-center text-[14px] space-x-3">
              <IconContext.Provider value={{ size: 19 }}>
                <IoMdMailOpen />
              </IconContext.Provider>
              <p>sohelmdmonirulislam@gmail.com</p>
            </div>
          </aside>
          <aside className="">
            <h1 className="text-[16px] uppercase text-[#121212] leading-4 font-semibold">
              Company
            </h1>

            <div className="text-[14px] text-[#797B7E] space-y-3 mt-4">
              <p>Delivery</p>
              <p>Refund Policy</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Terms and conditions</p>
            </div>
          </aside>
          <aside className="">
            <h1 className="text-[16px] uppercase text-[#121212] leading-4 font-semibold">
              Information
            </h1>
            <div className="text-[14px] text-[#797B7E] space-y-3 mt-4">
              <p>FAQ's</p>
              <p>Terms</p>
              <p>Delivery Info</p>
              <p>Refund Policy</p>
              <p>Size Guide</p>
            </div>
          </aside>
          <aside className="">
            <h1 className="text-[16px] uppercase text-[#121212] leading-4 font-semibold">
              Orders
            </h1>
            <div className="text-[14px] text-[#797B7E] space-y-3 mt-4">
              <p>My Account</p>
              <p>Orders</p>
              <p>View Cart</p>
              <p>Wishlist</p>
              <p>Checkout</p>
            </div>
          </aside>
        </div>

        <div className="container mx-auto flex justify-between font-Libre py-3 border-t">
          <aside className="flex items-center">
            <p className="text-sm">
              © 2023 - E-commerce Created by Monirul Islam
            </p>
          </aside>
          <aside className="flex items-center space-x-5">
            <aside className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
              <IconContext.Provider value={{ size: 17, color: "#395692 " }}>
                <RiFacebookLine />
              </IconContext.Provider>
            </aside>
            <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
              <IconContext.Provider value={{ size: 17, color: "#C02E7F" }}>
                <IoLogoInstagram />
              </IconContext.Provider>
            </div>
            <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
              <IconContext.Provider value={{ size: 17, color: "#006EAB" }}>
                <RiLinkedinLine />
              </IconContext.Provider>
            </div>
            <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
              <IconContext.Provider value={{ size: 17, color: "#00acee " }}>
                <RiTwitterLine />
              </IconContext.Provider>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Footer;
