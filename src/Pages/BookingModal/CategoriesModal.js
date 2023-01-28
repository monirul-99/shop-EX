import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { RiHeart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import Slider from "./Slider";

const BookingModal = ({ modalData, setModalOpenClose }) => {
  const { shoppingBooking } = useContext(AuthContext);
  const { title, status, img, price, describe, OriginalPrice, _id } = modalData;

  return (
    <>
      {OriginalPrice && (
        <section className="">
          <input
            type="checkbox"
            id="my-modal-3"
            className="modal-toggle font-Ubuntu "
          />
          <div className="modal capitalize font-Ubuntu">
            <div className="w-[900px] h-[500px] relative border grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:p-5 justify-center rounded-sm bg-[#DFE4EA] lg:shadow-2xl">
              <div>
                <Slider img={img} />
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
                >
                  ✕
                </label>
              </div>

              <div className="pl-5 font-Josefin bg-[#DFE4EA]">
                <p className="bg-[#55C1A7] w-20 text-white text-center text-xs py-1 pt-1.5">
                  {status ? "In Stock" : "Out Stock"}
                </p>
                <h1 className="lg:text-[28px] text-xl font-bold text-[#121212] mt-4 mb-2">
                  {title}
                </h1>
                <h2 className="font-Libre lg:text-[20px]">${price}</h2>

                <div className="py-4 hidden lg:block md:block">
                  <p>
                    available : <span>In Stock</span>
                  </p>
                  <p>
                    Brand : <span>Unknown</span>
                  </p>
                  <p>
                    Tags : <span>Dress</span>
                  </p>
                </div>

                <Link to={`/categories-search/${_id}`}>
                  <p className="underline">More Details</p>
                </Link>

                <p className="text-sm mt-2 mb-3 font-Libre hidden lg:block md:block">
                  {describe.slice(0, 99)}. . .
                </p>
                <p className="text-sm mt-2 mb-3 font-Libre lg:hidden md:hidden">
                  {describe.slice(0, 89)}. . .
                </p>

                <aside className="flex items-center space-x-2 mb-3">
                  <IconContext.Provider value={{ size: 21, color: "#ABADAF" }}>
                    <RiHeart2Line />
                  </IconContext.Provider>

                  <p>Add To Wishlist</p>
                </aside>

                <button
                  onClick={() => shoppingBooking(modalData, setModalOpenClose)}
                  className="py-3 mb-5 text-[17px] w-full max-w-xs text-center bg-black text-white"
                >
                  Add To Carts
                </button>
                <button
                  onClick={shoppingBooking}
                  className="py-3 mb-5 text-[17px] w-full max-w-xs text-center bg-[#F2F3F5]"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      {!OriginalPrice && (
        <section className="">
          <input
            type="checkbox"
            id="my-modal-3"
            className="modal-toggle font-Ubuntu "
          />
          <div className="modal capitalize font-Ubuntu">
            <div className="w-[900px] h-[500px] relative border grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:p-5 justify-center rounded-sm bg-[#F7F7F7] lg:shadow-2xl">
              <div>
                <Slider img={img} />
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
                >
                  ✕
                </label>
              </div>

              <div className="pl-5 font-Josefin bg-[#F7F7F7]">
                <p className="bg-[#55C1A7] w-20 text-white text-center text-xs py-1 pt-1.5">
                  {status ? "In Stock" : "Out Stock"}
                </p>
                <h1 className="lg:text-[28px] text-xl font-bold text-[#121212] mt-4 mb-2">
                  {title}
                </h1>
                <h2 className="font-Libre lg:text-[20px]">${price}</h2>

                <div className="py-3 hidden lg:block md:block">
                  <p>
                    available : <span>In Stock</span>
                  </p>
                  <p>
                    Brand : <span>Unknown</span>
                  </p>
                  <p>
                    Tags : <span>Dress</span>
                  </p>
                </div>
                <Link to={`/categories-search/${_id}`}>
                  <p className="underline">More Details</p>
                </Link>

                <p className="text-sm mt-2 mb-3 font-Libre hidden lg:block md:block">
                  {describe.slice(0, 99)}. . .
                </p>
                <p className="text-sm mt-2 mb-3 font-Libre lg:hidden md:hidden">
                  {describe.slice(0, 89)}. . .
                </p>

                <aside className="flex items-center space-x-2 mb-3">
                  <IconContext.Provider value={{ size: 21, color: "#ABADAF" }}>
                    <RiHeart2Line />
                  </IconContext.Provider>

                  <p>Add To Wishlist</p>
                </aside>

                <button
                  onClick={() => shoppingBooking(modalData, setModalOpenClose)}
                  className="py-3 mb-5 text-[17px] w-full max-w-xs text-center bg-black text-white"
                >
                  Add To Carts
                </button>
                <button
                  onClick={shoppingBooking}
                  className="py-3 mb-5 text-[17px] w-full max-w-xs text-center text-white bg-[#bebebf]"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BookingModal;
