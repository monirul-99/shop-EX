import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import BestProductsCard from "./BestProductsCard";
import CategoriesModal from "../BookingModal/CategoriesModal";

const BestSeller = () => {
  const [bestProductsData, setBestProductsData] = useState([]);
  const { modalOpenClose, setModalOpenClose, categoriesName } =
    useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://shop-ex-server-one.vercel.app/best-products")
      .then((res) => setBestProductsData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="py-28">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[32px] mb-2 text-[#121212] capitalize font-semibold">
            Best sellers
          </h1>
          <p className="text-[#797B7E] text-[18px] leading-6 capitalize">
            Top sale in this week
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 container lg:w-[60%] mx-auto py-10 px-3 lg:px-0">
          {bestProductsData?.map((best, inx) => (
            <BestProductsCard key={inx} best={best}></BestProductsCard>
          ))}
        </div>
      </div>

      {modalOpenClose && (
        <CategoriesModal
          modalOpenClose={modalOpenClose}
          setModalOpenClose={setModalOpenClose}
          modalData={categoriesName}
        />
      )}
    </>
  );
};

export default BestSeller;
