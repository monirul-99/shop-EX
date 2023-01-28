import React, { useContext, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi2";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiShoppingCart2Line,
  RiTwitterFill,
  RiWhatsappFill,
} from "react-icons/ri";

// import required modules
import { Link, useLoaderData } from "react-router-dom";
import { IconContext } from "react-icons";
import { AuthContext } from "../../Context/UserContext";

export function ProductsInfo() {
  const [quantity, setQuantity] = useState(1);
  const { Orders } = useContext(AuthContext);
  const data = useLoaderData();
  console.log("Hello", data);
  const { title, condition, price, OriginalPrice, _id, status, describe, img } =
    data;

  return (
    <>
      <section className="relative bg-[url(https://res.cloudinary.com/dr4o1qswz/image/upload/v1672635981/Tree%20SHOP/UpdateTree/Untitled-2_e9x6ul.jpg)] bg-cover bg-center bg-no-repeat lg:h-[200px] h-[180px]">
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
          <div className="text-center sm:text-left ">
            <h1 className="lg:text-4xl text-3xl text-center font-Poppins text-white font-bold">
              #stayHome
            </h1>

            <p className="mt-4 font-Poppins text-white">
              Save more with coupons & up to 70% off!
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto font-Libre">
          <div className="grid lg:grid-cols-2 gap-10 lg:w-[80%] w-[98%] mx-auto">
            <aside>
              <img
                className="lg:w-[594px] lg:h-[645px] w-full"
                src={img}
                alt=""
              />
            </aside>
            <aside className="px-5">
              <div>
                <p className="font-Ubuntu">
                  <span className="text-xl uppercase font-light text-gray-500 tracking-widest">
                    Not Found
                  </span>
                </p>
                <h1 className="font-Poppins text-3xl mt-1 capitalize text-slate-900 font-semibold">
                  {title}
                </h1>
                <div className="flex items-center space-x-3 font-Poppins text-[0.9rem]">
                  <div className="flex items-center py-5">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p>({condition} Review)</p>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <p className="text-[#3A9943] text-2xl font-bold">${price}</p>
                  <sup className="line-through text-xl">${OriginalPrice}</sup>
                </div>

                <div className="space-y-2 border-b mt-7 pb-4 mb-7">
                  <p>
                    Ex Tax : <span className="text-[#3A9943]">$ 5</span>
                  </p>
                  <p>
                    Brand :{" "}
                    <span className="text-[#3A9943] uppercase">Unknown</span>
                  </p>
                  <p>
                    Products Code :{" "}
                    <span className="text-[#3A9943] uppercase">{_id}</span>
                  </p>
                  <p>
                    Available :{" "}
                    <span className="text-[#3A9943]">
                      {status === true ? "In Stock" : "Sold Out"}
                    </span>
                  </p>
                </div>

                {describe && (
                  <p className="border-b pb-5 text-[0.9rem] text-justify">
                    {describe}
                  </p>
                )}

                <div className="mt-7 flex items-center space-x-3">
                  <div className="flex items-center space-x-3">
                    <p>Qty</p>
                    <div className="flex items-center justify-between">
                      <p
                        className="text-[1.rem] border px-3 py-2.5 cursor-pointer"
                        onClick={() => setQuantity(quantity - 1)}
                      >
                        -
                      </p>
                      <p className="text-[1.rem] border px-7 py-2.5">
                        {quantity}
                      </p>
                      <p
                        className="text-[1.rem] border px-3 py-2.5 cursor-pointer"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <button className="border text-white px-6 py-2.5 rounded-sm font-Poppins text-[0.9rem] hidden lg:block md:block">
                    <IconContext.Provider
                      value={{
                        color: "gray",
                        size: 23,
                        className: "hoverRed",
                      }}
                    >
                      <HiOutlineHeart />
                    </IconContext.Provider>
                  </button>

                  <button
                    onClick={() => Orders(data)}
                    className="bg-[#f67321] text-white px-6  py-[11.5px] rounded-sm font-Poppins text-[0.9rem] w-[51.3%] hidden lg:block md:block"
                  >
                    <div className=" flex items-center justify-center space-x-2">
                      <IconContext.Provider value={{ color: "", size: 23 }}>
                        <RiShoppingCart2Line />
                      </IconContext.Provider>
                      <span className="text-[0.9rem]"> Add To Cart</span>
                    </div>
                  </button>

                  <button
                    onClick={() => Orders(data)}
                    className="bg-[#f67321] text-white px-6  py-[11.5px] rounded-sm font-Poppins text-[0.9rem] lg:hidden md:hidden"
                  >
                    <IconContext.Provider value={{ color: "", size: 23 }}>
                      <RiShoppingCart2Line />
                    </IconContext.Provider>
                  </button>

                  <button className="bg-[#3a9943ce] text-white px-6  py-[11.5px] rounded-sm font-Poppins text-[0.9rem] lg:hidden md:hidden">
                    <IconContext.Provider value={{ color: "", size: 23 }}>
                      <HiOutlineHeart />
                    </IconContext.Provider>
                  </button>
                </div>

                <div className="mt-10">
                  <p className="font-Poppins text-[0.9rem] mb-3">
                    Share products
                  </p>
                  <aside className="flex items-center space-x-2 mt-2 mb-3">
                    <div className="border p-1">
                      <IconContext.Provider
                        value={{ color: "#1977F2", size: 18 }}
                      >
                        <RiFacebookFill />
                      </IconContext.Provider>
                    </div>
                    <div className="border p-1">
                      <IconContext.Provider
                        value={{ color: "#1DA1F2", size: 18 }}
                      >
                        <RiTwitterFill />
                      </IconContext.Provider>
                    </div>
                    <div className="border p-1">
                      <IconContext.Provider
                        value={{ color: "#44C553", size: 18 }}
                      >
                        <RiWhatsappFill />
                      </IconContext.Provider>
                    </div>
                    <div className="border p-1">
                      <IconContext.Provider
                        value={{ color: "#FB02B2", size: 18 }}
                      >
                        <RiInstagramLine />
                      </IconContext.Provider>
                    </div>
                  </aside>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* <div className="container mx-auto lg:w-[65%] pb-1 lg:mt-16 w-[80%]">
          <div className="flex items-center justify-start lg:space-x-10 space-x-3">
            <Link to="/review">
              <h1 className="text-center mt-16 lg:text-xl font-Poppins">
                Review
              </h1>
            </Link>
          </div>
        </div> */}
      </section>
      {/* <section className="container mx-auto lg:w-[65%] w-11/12 mt-16">
        <h1 className="capitalize text-2xl font-Poppins text-center underline underline-offset-8 mb-5">
          You May also like
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 py-10">
          {relatedData?.map((product, inx) => (
            <ProductCard key={inx} product={product}></ProductCard>
          ))} 
        </div>
      </section> */}
    </>
  );
}
