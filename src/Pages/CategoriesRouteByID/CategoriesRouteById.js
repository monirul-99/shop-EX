import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TwoReportModal from "../../Dashboard/ReportedProducts/TwoReportModal";
import CategoriesModal from "../BookingModal/CategoriesModal";
import Products from "./Products";

const CategoriesRouteById = () => {
  const data = useLoaderData();
  const [categoriesName, setCategoriesName] = useState("");
  const [reportCloseModal, setReportCloseModal] = useState(null);
  const [modalOpenClose, setModalOpenClose] = useState(null);

  const { data: dataX = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () =>
      fetch(`https://shop-ex-server.vercel.app/all-categories/:id`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      }),
  });

  return (
    <div className="container mx-auto bg-[#9DD5FF] text-black pt-10">
      <div className=" w-[90%] mx-auto">
        <h1 className="font-Ubuntu text-3xl -mb-4">Products For {}</h1>
        <div className="grid lg:grid-cols-4 gap-10 py-16">
          {data.map((product, inx) => (
            <Products
              key={inx}
              setCategoriesName={setCategoriesName}
              product={product}
              setModalOpenClose={setModalOpenClose}
              setReportCloseModal={setReportCloseModal}
            ></Products>
          ))}
        </div>
      </div>

      {modalOpenClose && (
        <CategoriesModal
          modalOpenClose={modalOpenClose}
          setModalOpenClose={setModalOpenClose}
          modalData={categoriesName}
          refetch={refetch}
        />
      )}

      {reportCloseModal && (
        <TwoReportModal setReportCloseModal={setReportCloseModal} />
      )}
    </div>
  );
};

export default CategoriesRouteById;
