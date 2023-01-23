// import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
// import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./Orders.css";

const MyOrders = () => {
  const { user, myOrders, orderProductsDelete } = useContext(AuthContext);
  return (
    <div className="hoverFlow">
      <div className="flex flex-col space-y-4 px-3">
        <ul className="flex flex-col divide-y divide-gray-700">
          {myOrders.map((order, inx) => (
            <li
              key={inx}
              className="flex flex-col py-5 sm:flex-row sm:justify-between border-none"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 outline-none  bg-gray-500"
                  src={order?.img}
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug capitalize sm:pr-8">
                        {order?.productsName}
                      </h3>
                    </div>
                  </div>

                  <div className="flex text-sm divide-x">
                    <button
                      onClick={() => orderProductsDelete(order?._id)}
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <span className="hover:underline">Delete</span>
                    </button>
                  </div>
                </div>
                <div className="text-right flex flex-col lg:justify-between space-y-5 items-center h-[70px]">
                  <p className="text-lg font-semibold ">{order?.price}$</p>
                  <Link to={`/categories-search/${order._id}`}>
                    <p className="font-semibold -mt-5">
                      <aside className="">
                        {order.price && !order.paid && (
                          <button className="bg-[#36D298] text-sm uppercase text-white rounded-sm px-5 py-0.5">
                            Pay
                          </button>
                        )}
                      </aside>
                      {order.price && order.paid && (
                        <button className="lg:btn lg:btn-warning btn-warning lg:rounded-sm rounded-sm lg:px-10 px-10 py-1 lg:py-0">
                          Paid
                        </button>
                      )}
                    </p>
                  </Link>
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
