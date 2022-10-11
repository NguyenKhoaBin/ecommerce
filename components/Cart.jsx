import React from "react";
import CartItem from "./CartItem";

const Cart = ({ setShowCart }) => {
  return (
    <div
      className="fixed w-screen top-0 right-0 z-[100] transition-all bg-black bg-opacity-10 cursor-pointer"
      onClick={() => setShowCart(false)}
    >
      <div className="relative z-[101] lg:w-[600px] lg:float-right w-screen h-screen px-5 py-10 bg-white cursor-pointer  md:px-10 overflow-y-scroll scrollbar-hide ">
        <div
          className="flex gap-3 text-xl font-[500] text-textColor hover:opacity-75 hover:-translate-x-1 transition-all mb-5"
          onClick={() => setShowCart(false)}
        >
          <span>{`<`}</span>
          <p>Your cart</p>
          <span className="text-red-500">(3 items)</span>
        </div>

        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </div>
    </div>
  );
};

export default Cart;
