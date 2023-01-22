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

  //Add to cart with modal func
  const shoppingBooking = (modalData, setModalOpenClose) => {
    setUpdateGet("");
    const { title, img, price, describe, location } = modalData;
    const orders = {
      productsName: title,
      img,
      price,
      describe,
      orderUser: user?.displayName,
      email: user?.email,
      location,
    };
    fetch(`http://localhost:5000/orders-products`, {
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
      productsName: title,
      img,
      price,
      describe,
      orderUser: user?.displayName,
      email: user?.email,
      location,
    };
    fetch(`http://localhost:5000/orders-products`, {
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

  useEffect(() => {
    fetch(`http://localhost:5000/orders-get-email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user?.email, updateGet]);

  //Comments Get Func
  useEffect(() => {
    fetch(`http://localhost:5000/comments-data`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  //MyOrders Delete Items Func
  const orderProductsDelete = (id) => {
    setUpdateGet("");
    fetch(`http://localhost:5000/order-products/${id}`, {
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
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
