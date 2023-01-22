import axios from "axios";
import React, { useEffect, useState } from "react";
import BestProductsCard from "./BestProductsCard";

const BestSeller = () => {
  const [bestProductsData, setBestProductsData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/best-products")
      .then((res) => setBestProductsData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="py-28">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[32px] mb-2 text-[#121212] capitalize font-semibold">
          Best sellers
        </h1>
        <p className="text-[#797B7E] text-[18px] leading-6 capitalize">
          Top sale in this week
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 container w-[60%] mx-auto py-10">
        {bestProductsData?.map((best, inx) => (
          <BestProductsCard key={inx} best={best}></BestProductsCard>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
