import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="my-5 px-[40px] lg:px-5 h-full max-h[120px] flex items-center justify-evenly flex-col gap-3">
      <h3 className="text-xl font-[500] text-center text-textColor">
        © 2022 Nguyen Khoa Bin All Rights Reserved
      </h3>
      <div className="flex items-center justify-center gap-5">
        <a href="https://www.facebook.com/nguyen.bin.796569">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/747/747543.png"
            width={25}
            height={25}
            alt="insta"
            className="w-full h-full cursor-pointer hover:scale-110"
          ></Image>
        </a>
        <a href="https://www.facebook.com/nguyen.bin.796569">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            width={25}
            height={25}
            alt="insta"
            className="w-full h-full cursor-pointer hover:scale-110"
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default Footer;
