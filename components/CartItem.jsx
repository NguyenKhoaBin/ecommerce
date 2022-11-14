import Image from "next/image";
import React, { useEffect, useState } from "react";

import { urlFor } from "../libs/client";
import MinusIcon from "./icon/MinusIcon";
import PlusIcon from "./icon/PlusIcon";
import RemoveIcon from "./icon/RemoveIcon";
import {
  handleInCreQtyItemInCart,
  handleDeCreQtyItemInCart,
  handleDeleteItemInCart,
  selectCart,
  selectTotalPrice,
  selectTotalQty,
} from "../app/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdateCartItem, setCartInDb } from "../hooks/firebaseHook";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const CartItem = ({ product }) => {
  const [loggedInUser] = useAuthState(auth);
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCart);
  const totalQty = useSelector(selectTotalQty);
  const totalPrice = useSelector(selectTotalPrice);

  const inCreQtyItemInCart = () => {
    dispatch(handleInCreQtyItemInCart({ product }));
    // setCartInDb(cartItem, totalPrice, totalQty, loggedInUser?.email);
  };

  const deCreQtyItemInCart = () => {
    dispatch(handleDeCreQtyItemInCart({ product }));
  };

  const deleteItemInCart = () => {
    dispatch(handleDeleteItemInCart({ product }));
  };
  useEffect(() => {
    if (loggedInUser)
      handleUpdateCartItem(loggedInUser?.email, cartItem, totalQty, totalPrice);
  }, [totalQty, cartItem, totalPrice]);

  return (
    <div className="flex items-center w-full gap-5 my-5 rounded-lg hover:bg-black hover:bg-opacity-5">
      <div className="bg-[#DCDCDC] max-w-[110px] p-1 rounded-lg flex items-center ">
        <Image
          src={urlFor(product?.image[0]).url()}
          width={100}
          height={100}
          alt="cart-item"
        ></Image>
      </div>
      <div className="flex flex-col flex-1 gap-5 px-5">
        <div className="flex items-center justify-between font-bold text-textColor">
          <p>{product?.name}</p>
          <span>${product?.price}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 border border-[#ccc] p-2">
            <MinusIcon onClick={deCreQtyItemInCart} />
            <span className="border-x border-x-[#ccc] px-3">
              {product?.quantity}
            </span>
            <PlusIcon onClick={inCreQtyItemInCart} />
          </div>
          <span className="text-red-500 cursor-pointer">
            <RemoveIcon onClick={deleteItemInCart}></RemoveIcon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
