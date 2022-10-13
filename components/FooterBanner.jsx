import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../libs/client";

const FooterBanner = ({ bannerData }) => {
  return (
    <div className="rounded-3xl w-full bg-[#EF2D34] flex justify-between items-center px-10 pt-[100px] pb-[25px] lg:pb-[75px] my-[75px] relative flex-wrap gap-8 lg:gap-0">
      <div className="w-[full] lg:max-w-[20%] text-white z-[9999]">
        <span className="text-lg">{bannerData.discount}</span>
        <h2 className="text-4xl lg:text-[75px] font-[800] leading-[1]">
          {bannerData.largeText1 + " " + bannerData.largeText2}
        </h2>
        <span className="text-lg">{bannerData.saleTime}</span>
      </div>
      <div className="z-40 flex flex-col items-center space-y-5 text-white">
        <span>{bannerData.smallText}</span>
        <h2 className="text-5xl lg:text-[75px] font-[800] leading-[1]">
          {bannerData.midText}
        </h2>
        <p>{`company that's grown from 270 to 480 employees in the last 12 months.`}</p>
        <Link href={`/product/${bannerData.product}`}>
          <button className="px-4 py-2 text-orange-600 bg-white rounded-lg outline-none hover:opacity-80">
            {bannerData.buttonText}
          </button>
        </Link>
      </div>
      <div
        className=" absolute lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-[42%] lg:left-[40%]
        top-[5%] right-[5%] max-w-[250px] lg:max-w-[550px]
      "
      >
        <Image
          src={urlFor(bannerData.image).url()}
          width={550}
          height={550}
          alt="Item banner footer"
        ></Image>
      </div>
    </div>
  );
};

export default FooterBanner;
