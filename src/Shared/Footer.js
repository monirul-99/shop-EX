import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="bg-gray-900 mx-auto container">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <Link className="font-medium tracking-wide text-gray-300">
                Top Categories
              </Link>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
                    Coming
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
                    Coming
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2 py-8">
            <span className="text-base font-medium tracking-wide text-gray-300">
              Subscribe for updates
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button type="submit" className="btn btn-accent px-3 rounded-sm ">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              An exciting place for the whole family to shop.Get what you eye
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright 2022 SHOP-EX Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <p className="border rounded-full bg-white p-1">
              <IconContext.Provider value={{ size: 22, color: "#00acee" }}>
                <FaTelegramPlane />
              </IconContext.Provider>
            </p>
            <p className="border rounded-full bg-white p-1">
              <IconContext.Provider value={{ size: 22, color: "#00acee" }}>
                <FaTwitter />
              </IconContext.Provider>
            </p>
            <p className="border rounded-full bg-white p-1">
              <IconContext.Provider value={{ size: 22, color: "#00acee" }}>
                <FaFacebookF />
              </IconContext.Provider>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
