import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAdmin from "./useAdmin";
import useSeller from "./useSeller";
import {
  RiHeart2Line,
  RiPhoneFill,
  RiSearchLine,
  RiShoppingCartLine,
  RiUser6Line,
} from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../Context/UserContext";
import { IconContext } from "react-icons";
import "../Pages/MyOrders/Orders.css";
import MyOrders from "../Pages/MyOrders/myOrders";

const Navbar = () => {
  const { logout, user, myOrders } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <>
      <section className="bg-black  hidden lg:block">
        <div className="h-10 flex justify-between items-center container mx-auto font-Poppins">
          <div className="flex items-center space-x-2">
            <IconContext.Provider value={{ size: 20, color: "white" }}>
              <RiPhoneFill />
            </IconContext.Provider>
            <p className="text-white text-[13px]">+880 1780082914</p>
          </div>
          <div className="flex items-center space-x-3">
            {/* <a
              href="https://www.linkedin.com/in/monirul99/"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ size: 18, color: "white" }}>
                <RiLinkedinLine />
              </IconContext.Provider>
            </a>
            <a
              href="https://twitter.com/MsMonirul"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ size: 17, color: "white" }}>
                <RiInstagramLine />
              </IconContext.Provider>
            </a>{" "}
            <a
              href="https://www.facebook.com/moniru.pro"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ size: 18, color: "white" }}>
                <RiFacebookFill />
              </IconContext.Provider>
            </a>
            <a
              href="https://www.facebook.com/moniru.pro"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ size: 18, color: "white" }}>
                <RiWhatsappLine />
              </IconContext.Provider>
            </a>
            <a
              href="https://www.facebook.com/moniru.pro"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ size: 19, color: "white" }}>
                <RiTwitterLine />
              </IconContext.Provider>
            </a> */}
            <p className="text-[13px] text-white">All week from 9 am to 7 pm</p>
            <p className="h-4 border-r"></p>
            <p className="text-[13px] text-white">Shop Now</p>
          </div>
        </div>
      </section>

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

      <section className="bg-white shadow-sm font-Open text-black  sticky top-0 z-50  hidden lg:block">
        <div>
          <div className="flex justify-between container mx-auto py-8">
            <Link className="text-4xl font-Josefin font-extralight" to="/">
              ᔕᕼOᑭ E᙭
            </Link>
            <aside className="flex gap-10 justify-center items-center text-[14px]">
              <Link className="hidden lg:block uppercase" to="/home ">
                Home
              </Link>
              <Link
                className="uppercase space-x-1 flex items-center"
                to="/shop"
              >
                <p>women's</p>
                <aside className="-mt-1">
                  <IconContext.Provider value={{ size: 15 }}>
                    <IoIosArrowDown />
                  </IconContext.Provider>
                </aside>
              </Link>
              <Link
                className="uppercase space-x-1 flex items-center"
                to="/blog"
              >
                <p>men's</p>
                <aside className="-mt-1">
                  <IconContext.Provider value={{ size: 15 }}>
                    <IoIosArrowDown />
                  </IconContext.Provider>
                </aside>
              </Link>
              <Link className="uppercase  hidden lg:block" to="/blog">
                new
              </Link>
              <Link className="uppercase  hidden lg:block" to="/blog">
                about
              </Link>
              {/* {user?.email && (
            <Link className="  uppercase hidden lg:block" to="/myOrders">
              My Orders
            </Link>
          )} */}
              {/* {isAdmin && (
            <Link className=" uppercase hidden lg:block" to="/dashboard">
              Dashboard
            </Link>
          )} */}
              {/* {isSeller && (
            <Link className="  uppercase hidden lg:block" to="/dashboard">
              Dashboard
            </Link>
          )} */}
              {/* {!user?.displayName && (
            <>
              <Link className="  uppercase hidden lg:block" to="/signIn">
                Sign In
              </Link>
              <Link className="  uppercase hidden lg:block" to="/signUP">
                Sign Up
              </Link>
            </>
          )} */}
              {/* {user?.displayName && (
            <Link onClick={logout} className="  uppercase hidden lg:block">
              Sign Out
            </Link>
          )} */}

              {/* <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle lg:hidden"
              >
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
            </div> */}

              {/* <Link to="/avatar" className="-ml-5 pt-3 hidden lg:block md:block">
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
          </Link> */}
            </aside>
            <aside className="flex items-center space-x-5">
              <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                <RiSearchLine />
              </IconContext.Provider>
              <Link to="/myWishlist">
                <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                  <RiHeart2Line />
                </IconContext.Provider>
              </Link>
              <Link>
                <div className="relative">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="cursor-pointer shadow-lg">
                      <IconContext.Provider
                        value={{ size: 23, color: "#ABADAF" }}
                      >
                        <RiShoppingCartLine />
                      </IconContext.Provider>
                    </label>
                    <div
                      tabIndex={0}
                      className="w-96 dropdown-content border-t bg-white mt-[43px]"
                    >
                      <MyOrders />
                    </div>
                  </div>
                  <aside className="absolute -top-3 -right-2 bg-[#2a355c99] w-4 h-4 rounded-full text-white flex items-center justify-center">
                    <p className="text-[12px]">{myOrders?.length}</p>
                  </aside>
                </div>
              </Link>
              <div className="w-9 h-9 rounded-full overflow-hidden  hidden lg:block">
                {user?.photoURL && <img src={user?.photoURL} alt="" />}
              </div>
              {!user?.photoURL && (
                <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                  <RiUser6Line />
                </IconContext.Provider>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
