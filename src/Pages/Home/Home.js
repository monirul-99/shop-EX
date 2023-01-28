import React from "react";
import HomeCover from "./HomeCover";
import FourCate from "../FourCate/FourCate";
import BestSeller from "../TwoParts/BestSeller";
import CommentsCard from "../ValuableComments/ValuableComments";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <>
      <div className="">
        <HomeCover />

        <FourCate />
        <BestSeller />
        <div className="bg-[#F2F3F5] lg:py-44 py-20">
          <h1 className="text-center text-2xl font-bold text-[#121212]">
            Customer Review
          </h1>
          <div className="lg:w-4/12 mx-auto px-2 lg:px-0">
            <CommentsCard />
          </div>
        </div>
        <Blogs />
      </div>
    </>
  );
};

export default Home;
