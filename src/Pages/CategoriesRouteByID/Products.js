import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import { IoLocationOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { HiBadgeCheck, IconName } from "react-icons/hi";
import { FaCartPlus, FaCheck } from "react-icons/fa";
import axios from "axios";
import { RiEyeLine, RiHeart2Line, RiShoppingCartLine } from "react-icons/ri";

const Products = ({
  product,
  setCategoriesName,
  setModalOpenClose,
  setReportModalX,
  setReportCloseModal,
}) => {
  const { shoppingBookingTwo } = useContext(AuthContext);

  const [verifyChecker, setVerifyChecker] = useState(false);
  const {
    useDuration,
    time,
    title,
    reported,
    status,
    OriginalPrice,
    img,
    email,
    owner,
    location,
    price,
    condition,
    describe,
  } = product;

  useEffect(() => {
    fetch(`http://localhost:5000/verify-seller-check/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setVerifyChecker(data.isAdmin);
      });
  }, [email]);

  // console.log("Verify Check", verifyChecker);
  return (
    // <div className="flex justify-center items-center font-Ubuntu">
    //   <div className="bg-white rounded-md shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    //     <img className="w-full h-[347px] cursor-pointer" src={img} alt="" />
    //     <div className="p-4 space-y-2">
    //       <div className="flex space-x-3 font-Poppins">
    //         <h1 className="text-[16px]">$ {price}</h1>
    //         <h1 className=" text-[16px] line-through">$ {OriginalPrice}</h1>
    //       </div>
    //       <div className="flex items-center justify-between">
    //         <h1 className="text-xl  uppercase">{title}</h1>
    //       </div>

    //       <div className="flex items-center">
    //         {" "}
    //         <svg
    //           aria-hidden="true"
    //           className="w-4 h-4 text-green-600"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <title>First star</title>
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <svg
    //           aria-hidden="true"
    //           className="w-4 h-4 text-green-600"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <title>Second star</title>
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <svg
    //           aria-hidden="true"
    //           className="w-4 h-4 text-green-600"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <title>Third star</title>
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <svg
    //           aria-hidden="true"
    //           className="w-4 h-4 text-green-600"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <title>Fourth star</title>
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <svg
    //           aria-hidden="true"
    //           className="w-4 h-4 text-gray-300 dark:text-gray-500"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <title>Fifth star</title>
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //       </div>
    //       <div className="flex items-center">
    //         <p className="">
    //           <IconContext.Provider value={{ size: 20 }}>
    //             <IoLocationOutline />
    //           </IconContext.Provider>
    //         </p>
    //         <aside className="flex space-x-3">
    //           <p className="text-[16px] px-2">{location}</p>
    //           <p className="text-[16px] px-2">Uses {useDuration}</p>
    //         </aside>
    //       </div>
    //     </div>

    //     {/* <aside>
    //       <p className="px-4">{describe.slice(0, 60)}. . .</p>
    //     </aside> */}
    //     <div className="flex p-4">
    //       <div className="flex items-center justify-between space-x-2 w-full">
    //         <div className="flex flex-col">
    //           <aside className="flex flex-row-reverse text-gray-800 font-bold cursor-pointer uppercase">
    //             {verifyChecker && (
    //               <IconContext.Provider value={{ size: 18, color: "#199EE1" }}>
    //                 <HiBadgeCheck />
    //               </IconContext.Provider>
    //             )}
    //             {owner ? `${owner}` : "Not Found"}
    //           </aside>
    //           <p className="text-[10px]">{time ? time : "Not Found"}</p>
    //         </div>
    //         <label
    //           onClick={() => {
    //             setCategoriesName(product);
    //             setModalOpenClose(product);
    //           }}
    //           htmlFor="my-modal-3"
    //           className="flex items-center space-x-2 border-gray-300 py-2 border-dashed border p-2 rounded-md duration-500  hover:border-blue-600 hover:border-double"
    //         >
    //           <IconContext.Provider value={{ size: 22, color: "#1E3A8A" }}>
    //             <IoCartOutline />
    //           </IconContext.Provider>
    //           <p className="font-bold text-[14px] text-[#1E3A8A]">
    //             Add To Cart
    //           </p>
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <section className="border">
    //   <aside>
    //     <img src={img} alt="" />
    //   </aside>
    //   <aside className="font-Libre flex flex-col items-center py-4 space-y-1">
    //     <div className="flex items-center">
    //       {" "}
    //       <svg
    //         aria-hidden="true"
    //         className="w-4 h-4 text-green-600"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <title>First star</title>
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //       </svg>
    //       <svg
    //         aria-hidden="true"
    //         className="w-4 h-4 text-green-600"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <title>Second star</title>
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //       </svg>
    //       <svg
    //         aria-hidden="true"
    //         className="w-4 h-4 text-green-600"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <title>Third star</title>
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //       </svg>
    //       <svg
    //         aria-hidden="true"
    //         className="w-4 h-4 text-green-600"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <title>Fourth star</title>
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //       </svg>
    //       <svg
    //         aria-hidden="true"
    //         className="w-4 h-4 text-gray-300 dark:text-gray-500"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <title>Fifth star</title>
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //       </svg>
    //     </div>
    //     <h1 className="capitalize font-semibold text-[#121212]">
    //       Simple {title}
    //     </h1>
    //     <div className="flex items-center w-full justify-center space-x-2">
    //       <p className="font-Poppins font-semibold">${price}</p>
    //       <p className="font-Poppins font-semibold text-red-600 line-through">
    //         ${OriginalPrice}
    //       </p>
    //     </div>
    //   </aside>

    //   <label
    //     onClick={() => {
    //       setCategoriesName(product);
    //       setModalOpenClose(product);
    //     }}
    //     htmlFor="my-modal-3"
    //     className="pr-2 cursor-pointer hidden"
    //   >
    //     <IconContext.Provider value={{ size: 23, color: "gray" }}>
    //       <FaCartPlus />
    //     </IconContext.Provider>
    //   </label>
    // </section>

    <section className="border hoverEffect cardHover cursor-pointer">
      <aside className="relative">
        <img src={img} alt="" />
        <div className="absolute top-3 right-3 visibleText duration-300 cursor-pointer">
          <div className="flex flex-row-reverse">
            <div className="px-1">
              <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                <RiHeart2Line />
              </IconContext.Provider>
            </div>

            <p className="bg-white text-xs px-2 py-1 text-black duration-300 extraCss">
              Add To Wishlist
            </p>
          </div>
        </div>

        <div className="absolute bottom-2 w-full">
          <aside className="flex items-center justify-center space-x-2 visibleCart">
            <div
              onClick={() => shoppingBookingTwo(product)}
              className="cursor-pointer w-10 h-10 bg-black duration-500 hover:bg-[#797B7E] p-3 rounded-full flex items-center justify-center"
            >
              <IconContext.Provider value={{ size: 20, color: "white" }}>
                <RiShoppingCartLine />
              </IconContext.Provider>
            </div>
            <label
              onClick={() => {
                setCategoriesName(product);
                setModalOpenClose(product);
              }}
              htmlFor="my-modal-3"
              className="cursor-pointer w-10 h-10 bg-black duration-500 hover:bg-[#797B7E] p-3 rounded-full flex items-center justify-center"
            >
              <IconContext.Provider value={{ size: 20, color: "white" }}>
                <RiEyeLine />
              </IconContext.Provider>
            </label>
          </aside>
        </div>
      </aside>
      <aside className="font-Libre flex flex-col items-center py-4 space-y-1">
        <div className="flex items-center">
          {" "}
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-green-600"
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
        <h1 className="capitalize font-semibold text-[#121212]">
          Simple {title}
        </h1>
        <p>${price}</p>
      </aside>
    </section>
  );
};

export default Products;
