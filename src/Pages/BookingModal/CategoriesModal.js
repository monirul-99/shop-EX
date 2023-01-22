import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { RiHeart2Line } from "react-icons/ri";
import { AuthContext } from "../../Context/UserContext";
import Slider from "./Slider";

const BookingModal = ({ modalData, setModalOpenClose }) => {
  const { user, shoppingBooking } = useContext(AuthContext);

  const { title, status, img, price, describe } = modalData;

  return (
    <>
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle font-Ubuntu "
      />
      <div className="modal capitalize font-Ubuntu">
        <div className="w-[900px] h-[500px] relative border grid grid-cols-2 gap-5 p-5 justify-center rounded-sm bg-white lg:shadow-2xl border-b">
          <div>
            <Slider img={img} />
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
            >
              ✕
            </label>
          </div>

          <div className="pl-5 font-Josefin">
            <p className="bg-[#55C1A7] w-16 text-white text-center text-sm py-1 pt-1.5">
              {status ? "In Stock" : "Out Stock"}
            </p>
            <h1 className="text-[32px] font-bold text-[#121212] mt-2">
              {title}
            </h1>
            <h2 className="font-Libre text-[20px]">${price}</h2>

            <div className="py-4">
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

            <p className="text-sm mt-2 mb-3 font-Libre">
              {describe.slice(0, 119)}. . .
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
    </>
  );
};

export default BookingModal;
