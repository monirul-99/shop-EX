import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext } from "react";
import { useNavigation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import Spinner from "../../Shared/Spinner";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  const { addition: price } = useContext(AuthContext);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner />;
  }
  return (
    <section className="">
      <div className="">
        <div className="">
          <Elements stripe={stripePromise}>
            <CheckoutForm price={price} />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;
