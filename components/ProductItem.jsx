import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../libs/client";

const ProductItem = ({
  url = "https://cdn.sanity.io/images/s4nqfjth/production/a088c6a11d0466ce8255727071e98ebd789e53d1-600x600.webp",
  name = "boAt Rockerz 451",
  width = 250,
  height = 250,
  price = 56,
  slug,
  className = "",
}) => {
  return (
    <div>
      <Link href={`/product/${slug}`}>
        <div
          className={`w-full transition duration-500 ease-in-out cursor-pointer hover:scale-110 flex flex-col items-center ${className} `}
        >
          <div className="bg-[#DCDCDC] rounded-lg overflow-hidden ">
            <Image
              src={url}
              width={width}
              height={height}
              alt="product item"
            ></Image>
          </div>
          <p className="text-textColor font-[600]">{name}</p>
          <span className="font-bold text-black">${price}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
