import React from "react";
import { Link } from "react-router-dom";
import "./FourCate.css";

const FourCate = () => {
  return (
    <section className="bg-white -mt-5">
      <div className="grid grid-cols-4 gap-5 container mx-auto">
        <Link to="/all-categories/2">
          <aside className="cart-img">
            <img
              className="w-full overflow-hidden duration-300 active:scale-95 hover:rounded-md"
              src="https://cdn.shopify.com/s/files/1/1199/6378/files/ban-2_300x300.jpg?v=1665651859"
              alt=""
            />
          </aside>
        </Link>
        <Link to="/all-categories/1">
          <aside className="cart-img">
            <img
              className="w-full duration-300 active:scale-95 hover:rounded-md"
              src="https://cdn.shopify.com/s/files/1/1199/6378/files/ban-1_300x300.jpg?v=1665651859"
              alt=""
            />
          </aside>
        </Link>
        <Link to="/all-categories/3">
          <aside className="cart-img">
            <img
              className="w-full duration-300 active:scale-95 hover:rounded-md"
              src="https://cdn.shopify.com/s/files/1/1199/6378/files/ban-4_300x300.jpg?v=1665651859"
              alt=""
            />
          </aside>
        </Link>
        <Link to="/all-categories/2 ">
          <aside className="cart-img">
            <img
              className="w-full duration-300 active:scale-95 hover:rounded-md"
              src="https://cdn.shopify.com/s/files/1/1199/6378/files/ban-3_300x300.jpg?v=1665651859"
              alt=""
            />
          </aside>
        </Link>
      </div>
    </section>
  );
};

export default FourCate;
