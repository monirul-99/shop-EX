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
import { IoLogInOutline, IoPersonAddOutline } from "react-icons/io5";
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
              <label htmlFor="my-drawer-4" className="drawer-button">
                <aside className="-mt-1 lg:hidden md:hidden">
                  <IconContext.Provider value={{ size: 25 }}>
                    <RiBarChartHorizontalLine />
                  </IconContext.Provider>
                </aside>
              </label>

              <Link
                className="lg:text-4xl text-[20px] font-Josefin font-extralight"
                to="/"
              >
                <p className="pt-1">ᔕᕼOᑭ E᙭</p>
              </Link>
            </div>

            <div className="hidden lg:block">
              <aside className="flex gap-10 justify-center items-center text-[14px] pt-4">
                <Link className=" uppercase" to="/home">
                  Home
                </Link>

                <div className="dropdown dropdown-bottom cursor-pointer">
                  <label
                    tabIndex={0}
                    className="uppercase space-x-1 flex items-center cursor-pointer"
                  >
                    <p>women's</p>
                    <aside className="-mt-1">
                      <IconContext.Provider value={{ size: 15 }}>
                        <IoIosArrowDown />
                      </IconContext.Provider>
                    </aside>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-white w-40 mt-[31px]"
                  >
                    <li>Sample Item 1</li>
                    <li>Sample Item 2</li>
                    <li>Sample Item 3</li>
                    <li>Sample Item 4</li>
                    <li>Sample Item 5</li>
                    <li>Sample Item 6</li>
                  </ul>
                </div>

                <div className="dropdown dropdown-bottom cursor-pointer">
                  <label
                    tabIndex={0}
                    className="uppercase space-x-1 flex items-center cursor-pointer"
                  >
                    <p>men's</p>
                    <aside className="-mt-1">
                      <IconContext.Provider value={{ size: 15 }}>
                        <IoIosArrowDown />
                      </IconContext.Provider>
                    </aside>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-white w-40 mt-[31px]"
                  >
                    <li>Sample Item 1</li>
                    <li>Sample Item 2</li>
                    <li>Sample Item 3</li>
                    <li>Sample Item 4</li>
                    <li>Sample Item 5</li>
                    <li>Sample Item 6</li>
                  </ul>
                </div>
                <Link className="uppercase  hidden lg:block" to="/shop">
                  newSHOP
                </Link>
                <Link className="uppercase  hidden lg:block" to="/about">
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

              <button
                type="button"
                className="relative"
                onClick={openModalWish}
              >
                <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                  <RiHeart2Line />
                </IconContext.Provider>
                <aside className="absolute -top-2 -right-2 bg-[#2a355c99] w-4 h-4 rounded-full text-white flex items-center justify-center">
                  <p className="text-[12px]">{wishlistData?.length}</p>
                </aside>
              </button>

              <button type="button" className="relative" onClick={openModal}>
                <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                  <RiShoppingCartLine />
                </IconContext.Provider>
                <aside className="absolute -top-2 -right-2 bg-[#2a355c99] w-4 h-4 rounded-full text-white flex items-center justify-center">
                  <p className="text-[12px]">{myOrders?.length}</p>
                </aside>
              </button>
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

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
              <div className="flex min-h-full items-center justify-end text-center lg:w-96">
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
                      <p className="lg:hidden pt-6">
                        {" "}
                        Items {myOrders?.length}
                      </p>
                    </Dialog.Title>
                    <div className="mt-2 pt-5">
                      <MyOrders />
                    </div>

                    <div className="bg-white rounded-t-3xl border-t py-2">
                      <aside className="flex items-center justify-between mt-3 pl-3">
                        <p className="font-Poppins uppercase font-semibold text-slate-800">
                          Total
                        </p>
                        <p className="font-Poppins uppercase font-semibold text-slate-800 pr-3">
                          $ {addition}
                        </p>
                      </aside>
                      <div className="flex flex-row-reverse items-center justify-between mt-3 pl-3">
                        <Link to="/payments-page">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 pr-3"
                            onClick={closeModal}
                          >
                            Checkout Process
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent border-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        <Transition appear show={isOpenWish} as={Fragment}>
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
        </Transition>
      </section>
    </>
  );
};

export default Navbar;
