import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `https://shop-ex-server.vercel.app/orders-get-email/${user?.email}`;

  const {
    data: myOrders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="h-screen w-screen z-50 flex justify-center items-center bg-gray-200 container mx-auto">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const orderProductsDelete = (id) => {
    fetch(`https://shop-ex-server.vercel.app/order-products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Hello, ${user?.displayName} ! Your Products Removed`);
          refetch();
        }
      });
  };
  return (
    <div className="container mx-auto">
      <div className="flex flex-col p-6 space-y-4 sm:p-10 bg-gray-900 dark:text-gray-100">
        <ul className="flex flex-col divide-y divide-gray-700  lg:w-1/2 mx-auto">
          {myOrders.map((order, inx) => (
            <li
              key={inx}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={order?.img}
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug capitalize sm:pr-8">
                        {order?.productsName}
                      </h3>
                      <p className="text-sm dark:text-gray-400 capitalize">
                        {order?.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex text-sm divide-x">
                    <button
                      onClick={() => orderProductsDelete(order?._id)}
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
                <div className="text-right flex flex-col lg:justify-between space-y-5 items-center">
                  <p className="text-lg font-semibold ">{order?.price}$</p>
                  <Link to={`/categories-search/${order._id}`}>
                    <p className="font-semibold ">
                      <aside>
                        {order.price && !order.paid && (
                          <button className="lg:btn lg:btn-accent btn-accent lg:rounded-sm rounded-sm lg:px-10 px-10 py-1 lg:py-0">
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
      <div className="h-20 bg-white p-0 m-0"></div>
    </div>
  );
};

export default MyOrders;
