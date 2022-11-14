import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const handleUpdateCartItem = async (
  userEmail,
  cartItem,
  totalQty,
  totalPrice
) => {
  const docRef = doc(db, "cart", userEmail);
  await updateDoc(docRef, {
    cartItem,
    totalPrice,
    totalQty,
  });
};

export const handleFetchData = async (
  collectionName,
  userEmail
  // setCartUser
) => {
  async function fetch() {
    const q = await query(
      collection(db, collectionName),
      where("userEmail", "==", userEmail || "")
    );
    await onSnapshot(q, (querySnapshot) => {
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      return result;
    });
  }
  fetch();
};

export const setCartInDb = async (
  cartItem,
  totalPrice,
  totalQty,
  userEmail
) => {
  try {
    await setDoc(doc(db, "cart", userEmail), {
      cartItem,
      totalQty,
      totalPrice,
      userEmail,
    });
  } catch (error) {
    console.log(error);
  }
};
