import React from "react";
import { urlFor } from "../libs/client";
import ProductItem from "./ProductItem";
import Slider from "./Slider";

const SameProduct = ({ products }) => {
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
        {products?.map((item, index) => (
          <ProductItem
            key={index}
            url={urlFor(item.image[0]).url()}
            name={item.name}
            price={item.price}
            slug={item?.slug.current}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SameProduct;
