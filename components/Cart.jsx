import React from "react";
import CartItem from "./CartItem";
import ArrowLeft from "./icon/ArrowLeft";
import Link from "next/link";
import {
  selectCart,
  selectTotalPrice,
  selectTotalQty,
} from "../app/cartSlice.js";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { cartRs } from "./Layout";

const Cart = ({ setShowCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantities = useSelector(selectTotalQty);
  // console.log(cartRs.cartItem);

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
            <div className="pt-10 space-y-8">
              <Image
                src={"https://salt.tikicdn.com/desktop/img/mascot@2x.png"}
                width={300}
                height={400}
              />
              <p className="text-2xl text-[#3B3939] font-[700] text-center ">
                Cart is empty, shop now
              </p>
            </div>
            <Link href={"/"}>
              <button
                className=" my-2 block px-[75px] py-3  text-xl font-[500] text-white bg-[#E77236] rounded-lg hover:opacity-80"
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
        <div className="lg:w-[600px] px-10  bottom-[55px] md:bottom-0 fixed right-0 w-full z-[1000] bg-white py-5 space-y-3">
          <div className="flex items-center justify-between text-2xl font-bold text-black">
            <p>Subtotal</p>
            <span>${totalPrice}</span>
          </div>
          <Link href={"/checkoutAll"}>
            <button
              className="block px-[75px] py-3 mx-auto text-xl font-[500] text-white bg-red-600 rounded-lg hover:opacity-80 "
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
