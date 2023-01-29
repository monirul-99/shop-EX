import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CoverImg from "../CoverImg/CoverImg";
import ShopCard from "./ShopCard";

const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://shop-ex-server-one.vercel.app/all-products-data")
      .then((res) => setAllProducts(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="h-[200px] overflow-hidden">
        <CoverImg allProducts={allProducts} />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-5 gap-3 container py-10 px-3 lg:px-0">
          {allProducts?.map((shop, inx) => (
            <ShopCard key={inx} shop={shop}></ShopCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
