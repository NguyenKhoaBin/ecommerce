import Image from "next/image";
import React from "react";

const FooterBanner = () => {
  return (
    <div className="rounded-3xl w-full bg-[#EF2D34] flex justify-between items-center px-10 pt-[100px] pb-[25px] lg:pb-[75px] my-[75px] relative flex-wrap gap-8 lg:gap-0">
      <div className="w-[full] lg:max-w-[20%] text-white z-[9999]">
        <span className="text-lg">20% OFF</span>
        <h2 className="text-4xl lg:text-[75px] font-[800] leading-[1]">
          FINE SMILE
        </h2>
        <span className="text-lg">15 Nov to 7 dec</span>
      </div>
      <div className="flex flex-col items-center space-y-5 text-white">
        <span>Beats Solo Air</span>
        <h2 className="text-5xl lg:text-[75px] font-[800] leading-[1]">
          Summer Sale
        </h2>
        <p>{`company that's grown from 270 to 480 employees in the last 12 months.`}</p>
        <button className="px-4 py-2 text-orange-600 bg-white rounded-lg outline-none hover:opacity-80">
          Shop Now
        </button>
      </div>
      <div
        className=" absolute lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-[42%] lg:left-[40%]
        top-[5%] right-[5%] max-w-[250px] lg:max-w-[550px]
      "
      >
        <Image
          src={
            "https://cdn.sanity.io/images/s4nqfjth/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp"
          }
          width={550}
          height={550}
          alt="Item banner footer"
        ></Image>
      </div>
    </div>
  );
};

export default FooterBanner;
