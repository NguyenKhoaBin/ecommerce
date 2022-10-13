import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MinusIcon from "../../components/icon/MinusIcon";
import PlusIcon from "../../components/icon/PlusIcon";
import StarIcon from "../../components/icon/StarIcon";
import SameProduct from "../../components/SameProduct";
import { useStateContext } from "../../context/StateContext";
import { client, urlFor } from "../../libs/client";

const ProductDetail = ({ products, product }) => {
  const [indexImage, setIndexImage] = useState(0);
  const { qty, handleIncreQty, handleDecreQty, onAdd } = useStateContext();
  const handleClickBuyNow = (product) => {};

  return (
    <div className="py-8 px-[75px]">
      <div className="flex flex-wrap">
        <div className="flex flex-col gap-5 w-full lg:w-[30%]">
          <div className="bg-[#DCDCDC] p-3 rounded-xl cursor-pointer hover:bg-orange-400 transition duration-500 ease-in-out flex items-center justify-center">
            <Image
              src={urlFor(product?.image[indexImage]).url()}
              width={375}
              height={375}
              alt="product-detail-image"
            ></Image>
          </div>
          <div className="flex items-center justify-around ">
            {product?.image.map((url, index) => (
              <div
                className="p-2 bg-[#DCDCDC] rounded-lg cursor-pointer flex items-center hover:bg-orange-400 transition duration-500 ease-in-out"
                key={index}
              >
                <Image
                  src={urlFor(url).url()}
                  width={65}
                  height={65}
                  alt="product-detail-image"
                  onMouseEnter={() => setIndexImage(index)}
                ></Image>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:px-10 py-5 space-y-5 text-textColor w-full lg:w-[70%]">
          <h3 className=" text-3xl font-[700]">{product.name}</h3>
          <div className="flex items-center">
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <span className="mx-1">(20)</span>
          </div>
          <span className="text-lg font-[700]">Details:</span>
          <p className="desc">{product.details}</p>
          <p className="font-[700] text-orange-700 text-2xl my-2">
            ${product.price}
          </p>
          <div className="flex items-center justify-center gap-5 lg:justify-start">
            <p className="text-lg font-[700]">Quantity:</p>
            <div className="flex gap-3 border border-[#ccc] p-2">
              <MinusIcon onClick={handleDecreQty} />
              <span className="border-x border-x-[#ccc] px-3">{qty}</span>
              <PlusIcon onClick={handleIncreQty} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 lg:gap-10 lg:flex-row ">
            <button
              className="px-8 py-3 text-xl font-[500] w-[180px] hover:scale-110 transition duration-300 ease-in-out  text-orange-500 border border-orange-500 rounded-sm"
              onClick={() => onAdd(product, qty)}
            >
              Add to cart
            </button>
            <Link href={`/product/${product.name}/checkout`}>
              <button
                className="px-8 py-3 text-xl hover:scale-110 transition duration-300 ease-in-out font-[500]  w-[180px]  text-white bg-red-600 outline-none rounded-sm"
                onClick={handleClickBuyNow(product)}
              >
                Buy now
              </button>
            </Link>
            ;
          </div>
        </div>
      </div>
      <SameProduct products={products} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetail;
