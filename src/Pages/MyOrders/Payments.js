import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../../Shared/Spinner";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  const products = useLoaderData();
  const navigation = useNavigation();
  const { productsName } = products;
  if (navigation.state === "loading") {
    return <Spinner />;
  }
  return (
    <div className="container mx-auto bg-gray-200 text-black py-16">
      <div className="font-Babes text-4xl tracking-wide border-l-8 border-red-400 mb-12 w-[90%] lg:w-3/5 mx-auto py-5">
        <h1 className="px-3 text-[21px] text-black">
          Payment for {""}
          <span className="text-red-400 tracking-widest">
            {productsName}
          </span>{" "}
        </h1>
        <h1 className="px-3 text-red-400">
          please pay <span className="text-black">for your Shoes</span>
        </h1>
      </div>
      <div className="mx-auto lg:w-3/5 bg-white px-10 shadow-lg rounded-md w-[90%]">
        <Elements stripe={stripePromise}>
          <CheckoutForm products={products} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
