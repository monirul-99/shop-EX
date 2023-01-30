import React from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
