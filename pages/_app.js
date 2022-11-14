import "../styles/globals.css";
import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import React, { useEffect } from "react";
import { store } from "../app/store";
import { Provider, useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { setCartInDb } from "../hooks/firebaseHook";

function MyApp({ Component, pageProps }) {
  const [loggedInUser] = useAuthState(auth);
  let newUser = false;
  useEffect(() => {
    console.log("re-render");
    const setUser = async () => {
      try {
        await setDoc(
          doc(db, "users", loggedInUser?.email),
          {
            email: loggedInUser?.email,
            userName: loggedInUser?.displayName,
            photoUrl: loggedInUser?.photoURL,
          },
          { merge: true }
        );
      } catch (error) {
        console.log(error);
      }
    };
    async function fetch() {
      const q = await query(
        collection(db, "cart"),
        where("userEmail", "==", loggedInUser?.email)
      );
      const result = [];
      await onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          result.push({ id: doc.id, ...doc.data() });
          result.length <= 0 ? (newUser = true) : (newUser = false);
        });
      });
    }

    const setCart = async () => {
      try {
        await setDoc(doc(db, "cart", loggedInUser?.email), {
          cartItem: [],
          totalQty: 0,
          totalPrice: 0,
          userEmail: loggedInUser?.email,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (loggedInUser) {
      fetch();
      setUser();
      if (newUser) {
        setCart();
      }
    }
  }, [loggedInUser]);

  return (
    <Provider store={store}>
      <Toaster></Toaster>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
