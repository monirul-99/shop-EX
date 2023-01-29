import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/UserContext";
import Spinner from "../../Shared/Spinner";
import AllSellersCard from "./AllSellersCard";

const AllSeller = () => {
  const { user } = useContext(AuthContext);
  const url = `https://shop-ex-server-one.vercel.app/all-seller`;

  const {
    data: allSellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }

  const handleVerify = (id) => {
    fetch(`https://shop-ex-server-one.vercel.app/verify-update/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Verified Seller Successful!");
          refetch();
        }
      });
  };
  return (
    <div className="py-20 grid gap-10">
      <div className="font-Babes text-4xl tracking-wide border-l-8 border-red-400 mt-0 lg:mt-10 w-4/5 mx-auto">
        <h1 className="px-3 text-[21px] text-black">
          All Seller {""}
          <span className="text-red-400 tracking-widest">Information</span>{" "}
        </h1>
        <h1 className="px-3 text-red-400">
          Pictures Name <span className="text-black">& E-mail</span>
        </h1>
      </div>
      {allSellers.map((seller, inx) => (
        <AllSellersCard
          key={inx}
          refetch={refetch}
          seller={seller}
          handleVerify={handleVerify}
        ></AllSellersCard>
      ))}
    </div>
  );
};

export default AllSeller;
