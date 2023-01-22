import React from "react";
import Cover1 from "../images/Rectangle_168.jpg";

const HomeCover = () => {
  return (
    <div className="relative">
      <img src={Cover1} alt="" />

      <div className="absolute top-[35%] w-full">
        <div className="container space-y-7 mx-auto">
          <h1 className="text-5xl font-Open font-light capitalize text-[#121212]">
            <span className="text-[#DF302D]">20% OFF</span> SUMMER
          </h1>
          <h1 className="text-5xl font-Open font-light capitalize text-[#121212]">
            FAVORITES
          </h1>

          <p>You’ll always be in fashion with our collection of clothing</p>
          <button className="bg-black text-white px-5 py-3 uppercase text-sm">
            Shop our COLLECTIONS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCover;
