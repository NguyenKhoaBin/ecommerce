import Image from "next/image";
import React from "react";

const HeaderBanner = () => {
  return (
    <div className="bg-[#DCDCDC] rounded-2xl py-8 min-h-[500px] h-full relative ">
      <div className="lg:pt-[75px] lg:pb-[35px] px-[30px]  mx-auto">
        <div className="px-3 space-y-2">
          <h4 className="text-xl font-[500] ">Beats solo</h4>
          <h3 className="text-4xl lg:font-[500] font-bold lg:text-[50px]">
            Wireless
          </h3>
        </div>
        <h2 className="my-5 lg:my-[80px] text-4xl lg:font-[400] font-bold text-white lg:text-[150px]">
          HEADPHONE
        </h2>
        <button className="px-2 mx-auto lg:mx-0 py-3 mt-[200px] mb-[20px] lg:px-6 lg:py-3 bg-orange-600 rounded-lg text-lg font-[500] text-white  lg:my-[30px] hover:bg-opacity-[.8] outline-none  cursor-pointer block">
          Shop wireless headphone
        </button>
        <div className="flex justify-center lg:justify-end text-lg  lg:text-right lg:px-[75px] z-20">
          <div className="lg:max-w-[40%] w-full ">
            <p className="font-bold text-textColor">Description</p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              aliquid cupiditate reiciendis quae reprehenderit.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute  top-[28%] right-[25%] lg:top-0  h-[175px] w-[175px] md:h-[250px] md:w-[275px] lg:h-[500px] lg:w-[500px] lg:right-[20%]">
        <Image
          src={
            "https://cdn.sanity.io/images/s4nqfjth/production/a088c6a11d0466ce8255727071e98ebd789e53d1-600x600.webp"
          }
          width={550}
          height={550}
          alt="banner"
        ></Image>
      </div>
    </div>
  );
};

export default HeaderBanner;
