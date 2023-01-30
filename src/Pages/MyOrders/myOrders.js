import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { RiCloseFill } from "react-icons/ri";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./Orders.css";

const MyOrders = () => {
  const { myOrders, orderProductsDelete } = useContext(AuthContext);

  return (
    <div className="hoverFlow h-96">
      <div className="flex flex-col space-y-4">
        <ul className="flex flex-col">
          {myOrders.map((order, inx) => (
            <li key={inx} className="py-5 border-none">
              <div className="grid grid-cols-12">
                <div className="grid col-span-4">
                  <img
                    className="flex-shrink-0 object-cover w-16 h-16 outline-none"
                    src={order?.img}
                    alt="Polaroid camera"
                  />
                </div>
                <div className="grid col-span-6">
                  <h3 className="font-semibold text-[15px] leading-snug capitalize">
                    {order?.title}
                  </h3>

                  <div className="flex items-center">
                    <p className="text-lg font-semibold ">{order?.price}$</p>
                  </div>
                </div>
                <div className="grid col-span-1">
                  <button
                    onClick={() => orderProductsDelete(order?._id)}
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1 cursor-pointer"
                  >
                    <IconContext.Provider
                      value={{ size: 23, color: "#ABADAF" }}
                    >
                      <RiCloseFill />
                    </IconContext.Provider>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyOrders;
