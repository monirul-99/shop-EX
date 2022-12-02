import React from "react";
import Advertise from "./Advertise";
import HomeCover from "./HomeCover";
import ThreeItems from "../ThreeItems/ThreeItems";
import Bonus from "../Bonux/Bonus";

const Home = () => {
  return (
    <div className="bg-slate-800">
      <HomeCover />
      <Advertise />
      <ThreeItems />
      <Bonus />
    </div>
  );
};

export default Home;
