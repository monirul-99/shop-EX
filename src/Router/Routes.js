import { createBrowserRouter } from "react-router-dom";
import AllSeller from "../Dashboard/All Seller/AllSeller";
import AllBuyers from "../Dashboard/AllBuyers/AllBuyers";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import AddProducts from "../Dashboard/MyProducts/AddProducts/AddProducts";
import MyProducts from "../Dashboard/MyProducts/MyProducts";
import ReportedProducts from "../Dashboard/ReportedProducts/ReportedProducts";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CategoriesRouteById from "../Pages/CategoriesRouteByID/CategoriesRouteById";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import MyOrders from "../Pages/MyOrders/myOrders";
import Payment from "../Pages/MyOrders/Payments";
import Shop from "../Pages/Shop/Shop";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import WishList from "../Pages/WishList/WishList";
import PrivateRoute from "./PrivateRauter";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/myWishlist",
        element: <WishList />,
      },
      {
        path: "/myOrders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-categories/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-categories/${params.id}`),
        element: (
          <PrivateRoute>
            <CategoriesRouteById />
          </PrivateRoute>
        ),
      },
      {
        path: "/categories-search/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories-search/${params.id}`),
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // {
      //   path: "/dashboard",
      //   element: <MyProducts />,
      // },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/addProducts",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/allSellers",
        element: <AllSeller />,
      },
      {
        path: "/dashboard/allBuyers",
        element: <AllBuyers />,
      },
      {
        path: "/dashboard/reportedProducts",
        element: <ReportedProducts />,
      },
    ],
  },
]);
