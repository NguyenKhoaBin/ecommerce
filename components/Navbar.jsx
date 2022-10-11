import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "../components/icon/CartIcon";
import Cart from "./Cart";

const Navbar = () => {
  const handleClickOpenCart = () => {
    setShowCart(!showCart);
  };
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-between max-h-[70px] h-full w-full
  p-5 cursor-pointer px-[50px] "
      >
        <Link href={"/"}>
          <h2
            className="text-[#908383] 
    text-xl hover:text-opacity-[.8]"
          >
            BSHOP
          </h2>
        </Link>
        <span className="h-[40px] w-[40px] flex items-center text-[#7b7474] cursor-pointer  hover:scale-110 relative ">
          <CartIcon onClick={handleClickOpenCart}></CartIcon>
          <span className="text-textColor absolute right-[0] flex items-center justify-center w-5 h-5 p-1 -translate-y-1/4 text-[14px] font-[500] -translate-x-1/5 bg-orange-400 rounded-full">
            2
          </span>
        </span>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
};

export default Navbar;
