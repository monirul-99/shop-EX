import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [myOrders, setMyOrders] = useState([]);
  const [comments, setComments] = useState([]);
  const [updateGet, setUpdateGet] = useState("");
  const [wishlistUpdate, setWishlistUpdateGet] = useState("");
  const [wishlistData, setWishlistData] = useState("");
  const [review, setReview] = useState("");
  const [reviewUp, setReviewUp] = useState("");

  //Modal
  const [categoriesName, setCategoriesName] = useState("");
  const [reportCloseModal, setReportCloseModal] = useState(null);
  const [modalOpenClose, setModalOpenClose] = useState(null);

  let addition2 = myOrders.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  const addition = parseFloat(addition2).toFixed(2);
  //Add to cart with modal func
  const shoppingBooking = (modalData) => {
    setUpdateGet("");
    const { title, img, price, describe, location } = modalData;
    const orders = {
      title,
      img,
      price,
      describe,
      orderUser: user?.displayName,
      email: user?.email,
      location,
    };
    fetch(`https://shop-ex-server-one.vercel.app/orders-products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`${user?.displayName} added successful!`);
        setModalOpenClose(null);
        setUpdateGet("Update Value");
      });
  };
  //Add to cart func
  const shoppingBookingTwo = (modalData) => {
    setUpdateGet("");
    const { title, img, price, describe, location } = modalData;
    const orders = {
      title,
      img,
      price,
      describe,
      orderUser: user?.displayName,
      email: user?.email,
      location,
    };
    fetch(`https://shop-ex-server-one.vercel.app/orders-products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`${user?.displayName} added successful!`);
        setUpdateGet("Update Value");
      });
  };
  //wishlist  func
  const wishlistBooking = (modalData) => {
    setWishlistUpdateGet("");
    const { title, img, price, describe, location } = modalData;
    const orders = {
      title,
      img,
      price,
      describe,
      orderUser: user?.displayName,
      email: user?.email,
      location,
    };
    fetch(`https://shop-ex-server-one.vercel.app/wishlist-products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`${user?.displayName} Wishlist  added successful!`);
        setWishlistUpdateGet("Update Value");
        setModalOpenClose(null);
      });
  };

  //review func
  const reviewsBooking = (review, id) => {
    setReviewUp("");
    const reviews = {
      user: user?.displayName,
      img: user?.photoURL,
      diff: id,
      review,
      email: user?.email,
    };
    fetch(`https://shop-ex-server-one.vercel.app/review-post`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`${user?.displayName} review add successful!`);
        setReviewUp("Update");
      });
  };

  //wishList data request
  useEffect(() => {
    fetch(
      `https://shop-ex-server-one.vercel.app/wishlist-get-email/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setWishlistData(data));
  }, [user?.email, wishlistUpdate]);

  //myOrders data request
  useEffect(() => {
    fetch(
      `https://shop-ex-server-one.vercel.app/orders-get-email/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user?.email, updateGet]);

  //Comments Get Func
  useEffect(() => {
    fetch(`https://shop-ex-server-one.vercel.app/comments-data`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  //MyOrders Delete Items Func
  const orderProductsDelete = (id) => {
    setUpdateGet("");
    fetch(`https://shop-ex-server-one.vercel.app/order-products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Hello, ${user?.displayName} ! Your Products Removed`);
          // refetch();
          setUpdateGet("Update");
        }
      });
  };
  //WishList Delete Items Func
  const wishlistProductsDelete = (id) => {
    setWishlistUpdateGet("");
    fetch(`https://shop-ex-server-one.vercel.app/wishlist-products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(
            `Hello, ${user?.displayName} ! Wishlist Products Removed`
          );
          // refetch();
          setWishlistUpdateGet("Update");
        }
      });
  };

  //Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Update Name
  const updateProfileInfo = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //Logout
  const logout = () => {
    setLoading(true);
    localStorage.removeItem("access-token");
    return signOut(auth);
  };

  //Login with Password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google SignIn
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    signInWithGoogle,
    createUser,
    signIn,
    logout,
    updateProfileInfo,
    myOrders,
    orderProductsDelete,
    comments,
    shoppingBooking,
    shoppingBookingTwo,
    wishlistBooking,
    setCategoriesName,
    setModalOpenClose,
    setReportCloseModal,
    modalOpenClose,
    categoriesName,
    reportCloseModal,
    wishlistData,
    wishlistProductsDelete,
    addition,
    reviewsBooking,
    review,
    setReview,
    setWishlistData,
    reviewUp,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
