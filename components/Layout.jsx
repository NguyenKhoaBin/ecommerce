import { async } from "@firebase/util";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCart,
  selectTotalPrice,
  selectTotalQty,
  handleSetCart,
  getCart,
} from "../app/cartSlice";
import { auth, db } from "../config/firebase";
import { handleUpdateCartItem, handleFetchData } from "../hooks/firebaseHook";
import Footer from "./Footer";
import Navbar from "./Navbar";
let cartRs = [];
const Layout = ({ children }) => {
  const [loggedInUser] = useAuthState(auth);

  const dispatch = useDispatch();
  const cartItem = useSelector(selectCart);
  const totalQty = useSelector(selectTotalQty);
  const totalPrice = useSelector(selectTotalPrice);
  useEffect(() => {
    if (loggedInUser) {
      // handleFetchData("cart", "nguyenkhoabin15122001@gmail.com");
      async function fetch() {
        let result = [];
        const q = await query(
          collection(db, "cart"),
          where("userEmail", "==", loggedInUser?.email)
        );
        await onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            result.push({ id: doc.id, ...doc.data() });
          });
          dispatch(getCart(result));
        });
      }
      fetch();
    } else {
      dispatch(getCart([{ cartItem: [] }]));
    }
  }, [loggedInUser]);

  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
