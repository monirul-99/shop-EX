import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAdmin from "./useAdmin";
import useSeller from "./useSeller";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { AuthContext } from "../Context/UserContext";
import { IconContext } from "react-icons";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <div className="flex justify-between items-center bg-white shadow-lg h-24 px-5 text-black container mx-auto">
      <aside>
        <Link className="text-3xl uppercase" to="/">
          Shop-ex
        </Link>
      </aside>
      <aside className="flex gap-10 items-center">
        <Link className="font-semibold hidden lg:block" to="/home ">
          HOME
        </Link>
        <Link className="font-semibold hidden lg:block" to="/shop">
          SHOP
        </Link>
        <Link className="font-semibold hidden lg:block" to="/blog">
          BLOG
        </Link>
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
      </aside>
    </div>
  );
};

export default Navbar;
