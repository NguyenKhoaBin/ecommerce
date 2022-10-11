import Image from "next/image";
import React from "react";
import MinusIcon from "./icon/MinusIcon";
import PlusIcon from "./icon/PlusIcon";
import RemoveIcon from "./icon/RemoveIcon";

const CartItem = () => {
  return (
    <div className="flex items-center w-full gap-5 my-5 rounded-lg hover:bg-black hover:bg-opacity-5">
      <div className="bg-[#DCDCDC] max-w-[110px] p-1 rounded-lg flex items-center ">
        <Image
          src={
            "https://cdn.sanity.io/images/s4nqfjth/production/a088c6a11d0466ce8255727071e98ebd789e53d1-600x600.webp"
          }
          width={100}
          height={100}
          alt="cart-item"
        ></Image>
      </div>
      <div className="flex flex-col flex-1 gap-5 px-5">
        <div className="flex items-center justify-between font-bold text-textColor">
          <p>boAt Party Pal 50</p>
          <span>$56</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 border border-[#ccc] p-2">
            <MinusIcon />
            <span className="border-x border-x-[#ccc] px-3">0</span>
            <PlusIcon />
          </div>
          <span className="text-red-500 cursor-pointer">
            <RemoveIcon></RemoveIcon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
