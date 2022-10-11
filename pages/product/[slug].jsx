import Image from "next/image";
import React from "react";
import MinusIcon from "../../components/icon/MinusIcon";
import PlusIcon from "../../components/icon/PlusIcon";
import StarIcon from "../../components/icon/StarIcon";
import SameProduct from "../../components/SameProduct";

const ProductDetail = () => {
  const handleClickDecre = () => {
    console.log("minus");
  };
  const handleClickIncre = () => {
    console.log("incre");
  };

  return (
    <div className="py-8 px-[75px]">
      <div className="flex flex-wrap">
        <div className="flex flex-col gap-5 w-full lg:w-[30%]">
          <div className="bg-[#DCDCDC] p-3 rounded-xl cursor-pointer hover:bg-orange-400 transition duration-500 ease-in-out flex items-center justify-center">
            <Image
              src={
                "https://cdn.sanity.io/images/s4nqfjth/production/6bd5e9084b74c5abf0bd42fb6f4a97619402f93d-600x600.webp"
              }
              width={375}
              height={375}
              alt="product-detail-image"
            ></Image>
          </div>
          <div className="flex items-center justify-evenly ">
            <div className="p-2 bg-[#DCDCDC] rounded-lg cursor-pointer flex items-center hover:bg-orange-400 transition duration-500 ease-in-out">
              <Image
                src={
                  "https://cdn.sanity.io/images/s4nqfjth/production/6bd5e9084b74c5abf0bd42fb6f4a97619402f93d-600x600.webp"
                }
                width={65}
                height={65}
                alt="product-detail-image"
              ></Image>
            </div>
          </div>
        </div>

        <div className="lg:px-10 py-5 space-y-5 text-textColor w-full lg:w-[70%]">
          <h3 className=" text-3xl font-[700]">boAt Party Pal 50</h3>
          <div className="flex items-center">
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <span className="mx-1">(20)</span>
          </div>
          <span className="text-lg font-[700]">Details:</span>
          <p className="desc">
            Immerse in the 20W RMS Stereo Sound with the powerful Party Pal 50
            bluetooth speaker. Set the vibes of the party just right with the
            RGB LEDs. Keep worries at bay and party poolside with IPX5 splash
            resistant! Get, set, grooving as Party Pal 50 comes with a powerful
            playback of 4.5 Hrs. Access Instant Voice Assistant and enjoy the
            multiple connectivity modes- USB, AUX, Bluetooth v5.1, and FM.
            Coming with Type-C interface, Party Pal 50 is all you need to set
            the mood just about right. So, where y’all partying at?
          </p>
          <p className="font-[700] text-orange-700 text-2xl my-2">$56</p>
          <div className="flex items-center gap-5">
            <p className="text-lg font-[700]">Quantity:</p>
            <div className="flex gap-3 border border-[#ccc] p-2">
              <MinusIcon onClick={handleClickDecre} />
              <span className="border-x border-x-[#ccc] px-3">0</span>
              <PlusIcon onClick={handleClickIncre} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 lg:flex-row ">
            <button className="px-8 py-2 text-xl font-[500] w-[180px] hover:scale-110 transition duration-300 ease-in-out  text-orange-500 border border-orange-500">
              Add to cart
            </button>
            <button className="px-8 py-2 text-xl hover:scale-110 transition duration-300 ease-in-out font-[500]  w-[180px]  text-white bg-red-600">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <SameProduct />
    </div>
  );
};

export default ProductDetail;
