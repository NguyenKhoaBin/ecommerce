import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "../components/icon/CartIcon";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { selectTotalQty, selectTotalPrice } from "../app/cartSlice";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineLogout,
} from "react-icons/hi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import Image from "next/image";

const Navbar = () => {
  const [loggedInUser] = useAuthState(auth);
  const router = useRouter();
  const handleClickOpenCart = () => {
    setShowCart(!showCart);
  };
  const [showCart, setShowCart] = useState(false);

  const totalQuantities = useSelector(selectTotalQty);

  return (
    <>
      <div
        className="flex items-center justify-between max-h-[70px] h-full w-full
  p-5 cursor-pointer lg:px-[50px] px-[40px] "
      >
        <Link href={"/"}>
          <h2
            className="text-[#908383] 
    text-xl hover:text-opacity-[.8]"
          >
            BSHOP
          </h2>
        </Link>
        <div className="flex items-center gap-5 text-[#7b7474] mr-2 transition duration-300 ease-in-out">
          <span className="h-[40px] w-[40px] flex items-center cursor-pointer  hover:scale-110 relative ">
            <HiOutlineShoppingBag
              className="w-7 h-7"
              onClick={handleClickOpenCart}
            />
            <span className="text-textColor absolute right-[0] flex items-center justify-center w-5 h-5 p-1 -translate-y-1/4 text-[14px] font-[500] -translate-x-1/5 bg-orange-400 rounded-full">
              {totalQuantities}
            </span>
          </span>
          {loggedInUser ? (
            <div className="flex items-center group ">
              <div className="overflow-hidden transition duration-300 ease-in-out rounded-full cursor-pointer w-7 h-7 hover:scale-105 group-hover:hidden">
                <Image
                  src={loggedInUser.photoURL}
                  objectFit="contain"
                  height={40}
                  width={40}
                ></Image>
              </div>

              <HiOutlineLogout
                onClick={() => {
                  signOut(auth);
                  router.push("/sign-in");
                }}
                className="hidden transition duration-300 ease-in-out cursor-pointer group-hover:block w-7 h-7 hover:scale-110"
              />
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href={"/sign-in"}>
                <a>
                  <HiOutlineUser className="cursor-pointer w-7 h-7 hover:scale-110" />
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
};

export default Navbar;
