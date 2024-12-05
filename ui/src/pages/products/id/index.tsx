import React from "react";
import { useLoaderData } from "react-router-dom";
import { Product as ProductType } from "../../../models/product";

export const Product = () => {
  const product = useLoaderData() as ProductType;
  React.useEffect(() => {});
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="text-[40px] uppercase">{product.name}</div>
      <div className="flex flex-row w-[620px] gap-[20px]">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[300px] h-[300px] border-2 border-blue-200 rounded-[20px]">
            {product.imgSrc}
          </div>
          <div className="flex flex-row w-[300px] justify-end">
            {product.otherImageSrcs &&
              product.otherImageSrcs.map((src: string, index: number) => {
                return (
                  <div
                    className="w-[100px] h-[100px] border-2 border-blue-200 rounded-[20px]"
                    key={index}
                  >
                    {src}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="text-[14px] text-justify">
          <div>
            <span className="font-bold">Product Description:</span>{" "}
            {product.description ? product.description : "No description given"}
          </div>
          <div>
            <span className="font-bold">Price:</span> PHP {product.price.toFixed(2)}
          </div>
          <div>
            <span className="font-bold">Stocks Available:</span>{" "}
            {product.stockAvailable}
          </div>
        </div>
      </div>
    </div>
  );
};
