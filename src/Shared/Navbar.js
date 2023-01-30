import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
// import useAdmin from "./useAdmin";
// import useSeller from "./useSeller";
import {
  RiBarChartHorizontalLine,
  RiHeart2Line,
  RiPhoneFill,
  RiSearchLine,
  RiShoppingCartLine,
  RiUser6Line,
} from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import {
  IoArrowForwardOutline,
  IoLogInOutline,
  IoPersonAddOutline,
} from "react-icons/io5";
import { AuthContext } from "../Context/UserContext";
import { IconContext } from "react-icons";
import "../Pages/MyOrders/Orders.css";
import MyOrders from "../Pages/MyOrders/MyOrders";
import WishList from "../Pages/WishList/WishList";

const Navbar = () => {
  const { user, logout, myOrders, wishlistData, addition } =
    useContext(AuthContext);
  // const [isAdmin] = useAdmin(user?.email);
  // const [isSeller] = useSeller(user?.email);
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenWish, setIsOpenWish] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModalWish() {
    setIsOpenWish(false);
  }

  function openModalWish() {
    setIsOpenWish(true);
  }
  // console.log("wish", wishlistData, myOrders);
  return (
    <>
      <section className="bg-black  hidden lg:block relative">
        <div className="h-10 flex justify-between items-center container mx-auto font-Poppins">
          <div className="flex items-center space-x-2">
            <IconContext.Provider value={{ size: 20, color: "white" }}>
              <RiPhoneFill />
            </IconContext.Provider>
            <p className="text-white text-[13px]">+880 1780082914</p>
          </div>
          <div className="flex items-center space-x-3">
            <p className="text-[13px] text-white">All week from 9 am to 7 pm</p>
            <p className="h-4 border-r"></p>
            <Link to="/shop">
              <p className="text-[13px] text-white">Shop Now</p>
            </Link>
          </div>
        </div>
      </section>
      <div>
        {/* <aside className="flex gap-10 items-center">
       
        {user?.email && (
          <Link
            className="font-semibold uppercase hidden lg:block"
            to="/myOrders"
          >
            My Orders
          </Link>
        )}
        {isAdmin && (
          <Link
            className="font-semibold uppercase hidden lg:block"
            to="/dashboard"
          >
            Dashboard
          </Link>
        )}
        {isSeller && (
          <Link
            className="font-semibold uppercase hidden lg:block"
            to="/dashboard"
          >
            Dashboard
          </Link>
        )}
        {!user?.displayName && (
          <>
            <Link
              className="font-semibold uppercase hidden lg:block"
              to="/signIn"
            >
              Sign In
            </Link>
            <Link
              className="font-semibold uppercase hidden lg:block"
              to="/signUP"
            >
              Sign Up
            </Link>
          </>
        )}
        {user?.displayName && (
          <Link
            onClick={logout}
            className="font-semibold uppercase hidden lg:block"
          >
            Sign Out
          </Link>
        )}

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
            <IconContext.Provider value={{ size: 35 }}>
              <HiBars3CenterLeft />
            </IconContext.Provider>
          </label>
          <ul
            tabIndex={0}
            className="font-Ubuntu space-y-3 uppercase menu menu-compact dropdown-content mt-9 p-2 shadow bg-gray-200  rounded-box w-36 -ml-[310px]"
          >
            <li className="font-semibold">
              <Link to="/home">HOME</Link>
            </li>
            <li className="font-semibold">
              <Link to="/shop">SHOP</Link>
            </li>
            <li className="font-semibold">
              <Link to="/blog">BLOG</Link>
            </li>
            {user?.email && (
              <li className="font-semibold">
                <Link to="/myOrders">My Order</Link>
              </li>
            )}
            {isAdmin && (
              <li className="font-semibold">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
            {isSeller && (
              <li className="font-semibold">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
            <li className="relative">
              {!user?.displayName && (
                <Link
                  className="font-semibold uppercase block lg:hidden"
                  to="/signIn"
                >
                  Sign In
                </Link>
              )}
            </li>
            <li>
              {!user?.displayName && (
                <Link
                  className="font-semibold uppercase block lg:hidden"
                  to="/signUP"
                >
                  Sign Up
                </Link>
              )}
            </li>

            <li className="">
              {user?.displayName && (
                <Link
                  onClick={logout}
                  className="font-semibold uppercase block lg:hidden absolute bottom-0 border"
                >
                  Sign Out
                </Link>
              )}
            </li>
          </ul>
        </div>

        <Link to="/avatar" className="-ml-5 pt-3 hidden lg:block md:block">
          <div className="avatar">
            <div className="w-12 rounded-full ">
              {user?.photoURL && <img src={user?.photoURL} alt="" />}
              {!user?.photoURL && (
                <IconContext.Provider value={{ size: 40 }}>
                  <FaRegUserCircle />
                </IconContext.Provider>
              )}
            </div>
          </div>
        </Link>
      </aside> */}
      </div>

      <section className="bg-white shadow-sm font-Open text-black sticky top-0 z-50">
        <div>
          <div className="flex justify-between container mx-auto py-6 px-5 lg:px-0">
            <div className="flex items-center space-x-3">
              <div className="dropdown dropdown-bottom cursor-pointer">
                <label
                  tabIndex={0}
                  className="cursor-pointer lg:hidden md:hidden"
                >
                  <aside className="-mt-1">
                    <IconContext.Provider value={{ size: 25 }}>
                      <RiBarChartHorizontalLine />
                    </IconContext.Provider>
                  </aside>
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-white w-52 mt-[29px] -ml-5"
                >
                  <nav aria-label="Main Nav" class="flex flex-col space-y-1">
                    <Link
                      to="/home"
                      class="flex uppercase items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500 text-[15px]"
                    >
                      Home
                    </Link>

                    <details class="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
                      <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                        <span class="font-medium uppercase text-[15px]">
                          women's
                        </span>

                        <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <nav
                        aria-label="Users Nav"
                        class="flex flex-col mt-2 ml-8 space-y-1"
                      >
                        <aside class="flex items-center px-4 py-2 text-gray-500 capitalize rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 text-[15px]">
                          Items 1
                        </aside>

                        <aside class="flex items-center px-4 py-2 text-gray-500 capitalize rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 text-[15px]">
                          Items 2
                        </aside>
                      </nav>
                    </details>

                    <Link
                      to="/about"
                      class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500 uppercase text-[15px]"
                    >
                      about us
                    </Link>

                    <Link
                      to="/shop"
                      class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500 uppercase text-[15px]"
                    >
                      New arrival
                    </Link>

                    <details class="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
                      <summary class="flex items-center px-4 py-2 text-gray-500 uppercase rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                        <span class="font-medium text-[15px]"> men's </span>

                        <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <nav
                        aria-label="Account Nav"
                        class="flex flex-col mt-2 ml-8 space-y-1"
                      >
                        <aside class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                          Items 1
                        </aside>

                        <aside class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                          Items 2
                        </aside>

                        <form action="/logout">
                          <button
                            type="submit"
                            class="w-full px-4 py-2 text-sm font-medium text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                          >
                            Items 3
                          </button>
                        </form>
                      </nav>
                    </details>
                  </nav>
                </div>
              </div>

              <Link
                className="lg:text-4xl text-[20px] font-Josefin font-extralight"
                to="/"
              >
                <p className="pt-1">ᔕᕼOᑭ E᙭</p>
              </Link>
            </div>

            <div className="hidden lg:block">
              <aside className="flex gap-10 justify-center items-center text-[14px] pt-4">
                <Link
                  className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-900 before:transition hover:before:scale-100 uppercase"
                  to="/home"
                >
                  Home
                </Link>

                <div className="dropdown dropdown-bottom cursor-pointer">
                  <label
                    tabIndex={0}
                    className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-900 before:transition hover:before:scale-100 uppercase space-x-1 flex items-center cursor-pointer"
                  >
                    <p>women's</p>
                    <aside className="-mt-1">
                      <IconContext.Provider value={{ size: 15 }}>
                        <IoIosArrowDown />
                      </IconContext.Provider>
                    </aside>
                  </label>
                  <div
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-white w-52 mt-[31px]"
                  >
                    <nav aria-label="Main Nav" class="flex flex-col space-y-1">
                      <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        Wedding Dress
                      </aside>

                      <details class="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
                        <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                          <span class="text-sm font-medium"> T-Shirt </span>

                          <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </summary>

                        <nav
                          aria-label="Users Nav"
                          class="flex flex-col mt-2 ml-8 space-y-1"
                        >
                          <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                            Items 1
                          </aside>

                          <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                            Items 2
                          </aside>
                        </nav>
                      </details>

                      <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        Sweater
                      </aside>

                      <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        Gym Clothes
                      </aside>

                      <details class="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
                        <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                          <span class="text-sm font-medium"> Hoodie </span>

                          <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </summary>

                        <nav
                          aria-label="Account Nav"
                          class="flex flex-col mt-2 ml-8 space-y-1"
                        >
                          <aside class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                            Items 1
                          </aside>

                          <aside class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                            Items 2
                          </aside>

                          <form action="/logout">
                            <button
                              type="submit"
                              class="w-full px-4 py-2 text-sm font-medium text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                              Items 3
                            </button>
                          </form>
                        </nav>
                      </details>
                    </nav>
                  </div>
                </div>

                <div className="dropdown dropdown-bottom cursor-pointer">
                  <label
                    tabIndex={0}
                    className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-900 before:transition hover:before:scale-100 uppercase space-x-1 flex items-center cursor-pointer"
                  >
                    <p>men's</p>
                    <aside className="-mt-1">
                      <IconContext.Provider value={{ size: 15 }}>
                        <IoIosArrowDown />
                      </IconContext.Provider>
                    </aside>
                  </label>
                  <div
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-white w-52 mt-[31px]"
                  >
                    <nav aria-label="Main Nav" class="flex flex-col space-y-1">
                      <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        Shirt
                      </aside>

                      <details class="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
                        <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                          <span class="text-sm font-medium"> Jeans </span>

                          <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </summary>

                        <nav
                          aria-label="Users Nav"
                          class="flex flex-col mt-2 ml-8 space-y-1"
                        >
                          <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                            Items 1
                          </aside>

                          <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                            Items 2
                          </aside>
                        </nav>
                      </details>

                      <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        Jackets
                      </aside>

                      <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        Blazer
                      </aside>

                      <details class="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
                        <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                          <span class="text-sm font-medium"> Boots </span>

                          <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </summary>

                        <nav
                          aria-label="Account Nav"
                          class="flex flex-col mt-2 ml-8 space-y-1"
                        >
                          <aside class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                            Items 1
                          </aside>

                          <aside class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                            Items 2
                          </aside>

                          <form action="/logout">
                            <button
                              type="submit"
                              class="w-full px-4 py-2 text-sm font-medium text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                              Items 3
                            </button>
                          </form>
                        </nav>
                      </details>
                    </nav>
                  </div>
                </div>
                <Link
                  className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-900 before:transition hover:before:scale-100 uppercase  hidden lg:block"
                  to="/shop"
                >
                  new arrival
                </Link>
                <Link
                  className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-900 before:transition hover:before:scale-100 uppercase  hidden lg:block"
                  to="/about"
                >
                  about
                </Link>
              </aside>
            </div>
            <aside className="flex items-center space-x-5">
              <div className="hidden lg:block">
                <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                  <RiSearchLine />
                </IconContext.Provider>
              </div>
              <div className="dropdown dropdown-end cursor-pointer ">
                <label tabIndex={0} className="relative cursor-pointer">
                  <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                    <RiHeart2Line />
                  </IconContext.Provider>
                  <aside className="absolute -top-2 -right-2 bg-[#2a355c99] w-4 h-4 rounded-full text-white flex items-center justify-center">
                    <p className="text-[12px]">{wishlistData?.length}</p>
                  </aside>
                </label>

                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  tabIndex={0}
                  className="dropdown-content menu border-t lg:border-none p-2 shadow bg-white mt-[30px] lg:w-[380px] w-[330px] -mr-14 lg:mr-0 z-40"
                >
                  {!wishlistData.length && (
                    <h1 className="text-red-500 capitalize font-Libre p-5 tracking-wide">
                      Your wish list is empty !{" "}
                      <Link
                        to="/shop"
                        className="text-sm text-blue-400 underline pl-3"
                      >
                        Click to wish
                      </Link>
                    </h1>
                  )}
                  {wishlistData.length > 0 && <WishList />}
                </div>
              </div>

              <div className="dropdown dropdown-end cursor-pointer ">
                <label tabIndex={0} className="relative cursor-pointer">
                  <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                    <RiShoppingCartLine />
                  </IconContext.Provider>
                  <aside className="absolute -top-2 -right-2 bg-[#2a355c99] w-4 h-4 rounded-full text-white flex items-center justify-center">
                    <p className="text-[12px]">{myOrders?.length}</p>
                  </aside>
                </label>

                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  tabIndex={0}
                  className="dropdown-content menu border-t lg:border-none p-2 shadow bg-white mt-[30px] lg:w-[380px] w-[330px] -mr-3 lg:mr-0 z-40"
                >
                  {!myOrders.length && (
                    <h1 className="text-red-500 capitalize font-Libre p-5 tracking-wide">
                      Your cart list is empty !{" "}
                      <Link
                        to="/shop"
                        className="text-sm text-blue-400 underline pl-3"
                      >
                        Click to Shop
                      </Link>
                    </h1>
                  )}
                  {myOrders.length > 0 && (
                    <>
                      <div className="w-full pr-12 py-5 px-4">
                        <div className="flex items-center justify-between">
                          <h1 className="uppercase font-semibold">Total</h1>

                          <h1>${addition}</h1>
                        </div>

                        <Link
                          to="/payments-page"
                          class="w-full mt-5 group relative inline-block overflow-hidden px-8 py-3 focus:outline-none focus:ring mx-auto"
                        >
                          <span class="absolute inset-y-0 left-0 w-[2px] bg-[#1785BF] transition-all group-hover:w-full"></span>

                          <span class="relative text-sm text-center uppercase tracking-widest font-medium text-indigo-600 transition-colors group-hover:text-white flex space-x-2">
                            Checkout Process
                            <aside className="absolute right-0">
                              <IconContext.Provider value={{ size: 20 }}>
                                <IoArrowForwardOutline />
                              </IconContext.Provider>
                            </aside>
                          </span>
                        </Link>
                      </div>

                      <MyOrders />
                    </>
                  )}
                </div>
              </div>
              <div className="dropdown dropdown-end cursor-pointer">
                <label tabIndex={0} className="cursor-pointer">
                  {user?.photoURL && (
                    <img
                      className="w-9 h-9 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  )}

                  {!user?.photoURL && (
                    <IconContext.Provider
                      value={{ size: 23, color: "#ABADAF" }}
                    >
                      <RiUser6Line />
                    </IconContext.Provider>
                  )}
                </label>

                <div
                  tabIndex={0}
                  className="dropdown-content font-Poppins tracking-wide shadow w-48 bg-white flex flex-col space-y-5 py-3 px-5 mt-6 lg:mt-7"
                >
                  <nav aria-label="Main Nav" class="flex flex-col">
                    {user?.displayName && (
                      <aside
                        onClick={logout}
                        class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500"
                      >
                        <div className="">
                          <IconContext.Provider value={{ size: 23 }}>
                            <IoLogInOutline />
                          </IconContext.Provider>
                        </div>

                        <span class="ml-3 text-sm font-medium"> Log Out </span>
                      </aside>
                    )}
                    {!user?.displayName && (
                      <Link to="/SignIn">
                        <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>

                          <span class="ml-3 text-sm font-medium"> Log In </span>
                        </aside>
                      </Link>
                    )}

                    {!user?.displayName && (
                      <Link to="/SignUp">
                        <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                          <div>
                            <IconContext.Provider value={{ size: 17 }}>
                              <IoPersonAddOutline />
                            </IconContext.Provider>
                          </div>

                          <span class="ml-3 text-sm font-medium">Register</span>
                        </aside>
                      </Link>
                    )}

                    {user?.displayName && (
                      <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>

                        <span class="ml-3 text-sm font-medium"> Account </span>
                      </aside>
                    )}
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* <Transition appear show={isOpenWish} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModalWish}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed top-20 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center lg:w-96">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Wishlist Items
                    </Dialog.Title>
                    <div className="mt-2">
                      <WishList />
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModalWish}
                      >
                        Close Now!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition> */}
      </section>
    </>
  );
};

export default Navbar;
