import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../libs/client";
const HeaderBanner = ({ bannerData }) => {
  return (
    <div className="bg-[#DCDCDC] rounded-2xl md:py-5 py-10 min-h-[500px] h-full relative z-50 ">
      <div className="lg:pt-[75px] lg:pb-[35px] px-[30px]  mx-auto">
        <div className="space-y-2 lg:px-3">
          <h4 className="text-xl font-[500] ">{bannerData.smallText}</h4>
          <h3 className="text-4xl lg:font-[500] font-bold lg:text-[50px]">
            {bannerData.midText}
          </h3>
        </div>
        <h2 className="my-5 uppercase lg:my-[80px] text-4xl lg:font-[400] font-bold text-white lg:text-[150px]">
          {bannerData.product}
        </h2>
        <Link href={`/product/${bannerData?.product}`}>
          <button className="px-2 min-w-[220px] mx-auto lg:mx-0 py-3 mt-[200px] mb-[20px] lg:px-6 lg:py-3 bg-orange-600 rounded-lg text-lg font-[500] text-white  lg:my-[30px] hover:bg-opacity-[.8] outline-none  cursor-pointer block">
            {bannerData.buttonText}
          </button>
        </Link>
        <div className="flex justify-center lg:justify-end text-lg  lg:text-right lg:px-[75px] z-20">
          <div className="lg:max-w-[40%] w-full ">
            <p className="font-bold text-textColor">Description</p>
            <p className="">
              The game begins here. With Immortal 1000D gaming headphones, don’t
              just play the game - feel it, live it, and own it. Level up your
              audio game with 7.1 Channel.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute  top-[28%] right-[25%] lg:top-0  h-[175px] w-[175px] md:h-[250px] md:w-[275px] md:top-[15%]  lg:h-[500px] lg:w-[500px] lg:right-[20%]">
        <Image
          src={urlFor(bannerData.image).url()}
          width={550}
          height={550}
          alt="banner"
        ></Image>
      </div>
    </div>
  );
};

export default HeaderBanner;
