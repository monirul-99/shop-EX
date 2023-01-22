import React from "react";
import Advertise from "./Advertise";
import HomeCover from "./HomeCover";
import FourCate from "../FourCate/FourCate";
// import BestPrice from "../BestPrice/BestPrice";
import BestSeller from "../TwoParts/BestSeller";
import CommentsCard from "../ValuableComments/ValuableComments";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <div className="">
      <HomeCover />
      <Advertise />
      <FourCate />
      <BestSeller />
      <div className="bg-[#F2F3F5] py-44">
        <h1 className="text-center text-2xl font-bold text-[#121212]">
          Customer Review
        </h1>
        <div className="w-4/12 mx-auto">
          <CommentsCard />
        </div>
      </div>

      <Blogs />

      {/* <BestPrice /> */}
      {/* <ThreeItems /> */}
      {/* <Bonus /> */}
    </div>
  );
};

export default Home;
