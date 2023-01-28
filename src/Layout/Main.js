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
      <div className="drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side absolute overflow-hidden">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-40 bg-base-100 text-base-content space-y-5 py-7">
            <Link className=" uppercase" to="/home">
              Home
            </Link>
            <Link className="uppercase space-x-1 flex items-center">
              <p>women's</p>
              <aside className="-mt-1">
                <IconContext.Provider value={{ size: 15 }}>
                  <IoIosArrowDown />
                </IconContext.Provider>
              </aside>
            </Link>

            <Link className="uppercase space-x-1 flex items-center">
              <p>men's</p>
              <aside className="-mt-1">
                <IconContext.Provider value={{ size: 15 }}>
                  <IoIosArrowDown />
                </IconContext.Provider>
              </aside>
            </Link>
            <Link className="uppercase" to="/shop">
              new
            </Link>
            <Link className="uppercase" to="/about">
              about
            </Link>
          </ul>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
