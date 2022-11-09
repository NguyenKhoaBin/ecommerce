import Image from "next/image";
import React, { useState } from "react";

import { urlFor } from "../libs/client";
import MinusIcon from "./icon/MinusIcon";
import PlusIcon from "./icon/PlusIcon";
import RemoveIcon from "./icon/RemoveIcon";
import {
  handleInCreQtyItemInCart,
  handleDeCreQtyItemInCart,
  handleDeleteItemInCart,
} from "../app/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const inCreQtyItemInCart = () => {
    dispatch(handleInCreQtyItemInCart({ product }));
  };

  const deCreQtyItemInCart = () => {
    dispatch(handleDeCreQtyItemInCart({ product }));
  };

  const deleteItemInCart = () => {
    dispatch(handleDeleteItemInCart({ product }));

    console.log("remove");
  };

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
