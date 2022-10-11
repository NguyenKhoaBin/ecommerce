import React from "react";
import ProductItem from "./ProductItem";
import Slider from "./Slider";

const SameProduct = () => {
  return (
    <div className="my-10 ">
      <h2 className="text-center text-3xl text-textColor font-[700] my-10">
        You May Also Like
      </h2>
      {/* <div className="flex gap-8">
        <div className="w-[30%]">
          <ProductItem></ProductItem>
        </div>
        <div className="w-[30%]">
          <ProductItem></ProductItem>
        </div>
        <div className="w-[30%]">
          <ProductItem></ProductItem>
        </div>
        <div className="w-[30%]">
          <ProductItem></ProductItem>
        </div>
        <div className="w-[30%]">
          <ProductItem></ProductItem>
        </div>
      </div> */}
      <Slider>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Slider>
    </div>
  );
};

export default SameProduct;
