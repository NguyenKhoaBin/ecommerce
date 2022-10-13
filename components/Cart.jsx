import React from "react";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../libs/client";
import CartItem from "./CartItem";
import ArrowLeft from "./icon/ArrowLeft";
import Link from "next/link";
import Image from "next/image";
import ShoppingBagIcon from "./icon/ShoppingBagIcon";

const Cart = ({ setShowCart }) => {
  const { cartItems, totalPrice, totalQuantities } = useStateContext();
  return (
    <div className="fixed w-screen top-0 right-0 z-[100] transition-all ">
      <div
        className="absolute top-0 left-0 z-10 hidden w-screen h-screen bg-black cursor-pointer lg:block bg-opacity-10 "
        onClick={() => {
          setShowCart(false);
        }}
      ></div>

      <div className="relative z-[1000] lg:w-[600px] lg:float-right w-screen h-screen px-5 py-5P bg-white   md:px-10 overflow-y-scroll scrollbar-hide ">
        <div className="inline-block  text-xl font-[500] text-textColor hover:opacity-75 hover:-translate-x-1 transition-all my-5 items-center ">
          <div
            className="flex gap-5 cursor-pointer"
            onClick={() => setShowCart(false)}
          >
            <ArrowLeft />
            <p>Your cart</p>
            <span className="text-red-500">{`(${totalQuantities} item)`}</span>
          </div>
        </div>
        {totalQuantities == 0 && (
          <div className="flex flex-col items-center h-[85%] justify-between ">
            <ShoppingBagIcon></ShoppingBagIcon>
            <Link href={"/"}>
              <button
                className=" my-5 block px-[75px] py-3  text-xl font-[500] text-white bg-[#E77236] rounded-lg hover:opacity-80"
                onClick={() => setShowCart(false)}
              >
                SHOP NOW
              </button>
            </Link>
          </div>
        )}
        {totalQuantities > 0 && (
          <>
            <div className="">
              {cartItems?.map((item, index) => (
                <CartItem product={item} key={index}></CartItem>
              ))}
            </div>
          </>
        )}
      </div>
      {totalPrice > 0 && (
        <div className="lg:w-[600px] px-10 absolute bottom-0 right-0 w-full z-[1000] bg-white py-5 space-y-3">
          <div className="flex items-center justify-between text-2xl font-bold text-black">
            <p>Subtotal</p>
            <span>${totalPrice}</span>
          </div>
          <Link href={"/checkoutAll"}>
            <button
              className="block px-[75px] py-3 mx-auto text-xl font-[500] text-white bg-red-600 rounded-lg hover:opacity-80"
              onClick={() => setShowCart(false)}
            >
              PAY WITH STRIPE
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
