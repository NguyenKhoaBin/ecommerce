import React from "react";
import { urlFor } from "../libs/client";
import ProductItem from "./ProductItem";
import Link from "next/link";

const Products = ({ productData }) => {
  return (
    <div className="p-4 lg:p-8 text-textColor">
      <h2 className="my-5 text-[28px] font-[800] text-center lg:text-4xl">
        Best Seller Products
      </h2>
      <p className="text-center text-xl font-[500]">
        speaker There are many variations passages
      </p>

      <div className="flex flex-wrap items-center justify-center gap-5 py-5">
        {productData?.length > 0 &&
          productData.map((product, index) => (
            <ProductItem
              url={urlFor(product.image[0]).url()}
              key={index}
              name={product.name}
              price={product.price}
              slug={product.slug.current}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
