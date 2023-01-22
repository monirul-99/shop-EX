import React from "react";
import Cover1 from "../images/Rectangle_168.jpg";

const HomeCover = () => {
  return (
    <div className="relative">
      <img src={Cover1} alt="" />

      <div className="absolute top-[25%] w-full ">
        <div className="container space-y-7 mx-auto">
          <h1 className="text-xl font-Josefin font-semibold capitalize text-[#121212]">
            FASHION GUIDE
          </h1>
          <h1 className="-ml-1.5 text-7xl font-Josefin font-semibold capitalize text-[#121212]">
            Denim Perfect
          </h1>

          <p className="text-[20px]">
            Shop the latest clothing, shoes, and handbags from top fashion{" "}
            <br />
            brands, style icons, and celebrities.
          </p>
          <button className="bg-black text-white px-5 py-3 uppercase text-sm">
            <p className="mt-1 hover:underline">Shop COLLECTIONS</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCover;
