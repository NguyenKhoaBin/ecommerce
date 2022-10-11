import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="p-4 lg:p-8 text-textColor">
      <h2 className="my-5 text-[28px] font-[800] text-center lg:text-4xl">
        Best Seller Products
      </h2>
      <p className="text-center text-xl font-[500]">
        speaker There are many variations passages
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5 py-5">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default Products;
