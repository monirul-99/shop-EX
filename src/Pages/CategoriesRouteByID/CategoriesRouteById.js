import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import TwoReportModal from "../../Dashboard/ReportedProducts/TwoReportModal";
import CategoriesModal from "../BookingModal/CategoriesModal";
import Products from "./Products";

const CategoriesRouteById = () => {
  const data = useLoaderData();
  const {
    setCategoriesName,
    setModalOpenClose,
    setReportCloseModal,
    modalOpenClose,
    categoriesName,
    reportCloseModal,
  } = useContext(AuthContext);

  const { data: dataX = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () =>
      fetch(`https://shop-ex-server-one.vercel.app/all-categories/:id`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      }),
  });
  return (
    <>
      <div className="h-[200px] overflow-hidden">
        <section className="relative bg-[url(https://img.freepik.com/free-photo/young-happy-woman-shopper-showing-okay-sign-winking-pleased-with-good-discounts-buying-staff-sale_1258-119323.jpg?w=1800&t=st=1674560441~exp=1674561041~hmac=41fcb74b4e40b394dfbef5a7be9d10e6ed52bbd3ee4af93132f2723325e84db6)] bg-cover bg-center bg-no-repeat -mt-7">
          <div className="absolute inset-0 bg-black/60 "></div>

          <div className="relative mx-auto px-4 py-32">
            <div className="text-center sm:text-left">
              <strong className="block font-extrabold text-center text-3xl text-white">
                #{data?.length} Products Available
              </strong>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#F6F6F6] text-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-10 gap-3 py-16 px-3 lg:px-0">
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
    </>
  );
};

export default CategoriesRouteById;
