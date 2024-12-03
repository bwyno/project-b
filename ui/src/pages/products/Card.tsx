import React from "react";
import { Product } from "../../models/product";

export const Card = ({ data }: { data: Product }) => {
  const [hover, setHover] = React.useState<boolean>(false);
  return (
    <div className="flex items-center justify-center relative">
      {hover && (
        <div
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          className="absolute z-10 flex flex-col items-center justify-center gap-[10px]"
        >
          <div className="hover:bg-blue-400 bg-blue-200 rounded-[10px] text-[16px] w-[140px] h-[40px] border-blue-500 flex items-center justify-center select-none cursor-pointer">
            View Product
          </div>
          <div className="hover:bg-blue-400 bg-blue-200 rounded-[10px] text-[16px] w-[140px] h-[40px] border-blue-500 flex items-center justify-center select-none cursor-pointer">
            Add to Cart
          </div>
        </div>
      )}
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={`${
          hover ? "bg-sky-700 blur-[1px]" : ""
        } border-2 flex flex-col h-[400px] pt-[10px] w-[220px] items-center relative rounded-[20px] bg-blue-200 border-blue-400`}
      >
        <div className="h-[180px] w-[180px] border-2 mt-[10px] rounded-[10px] shrink-0 border-blue-400">
          {data.imgSrc}
        </div>
        <div className="absolute right-2 h-[30px] flex items-center justify-center w-[30px] border-2 rounded-[50%] bg-blue-700 text-white  border-blue-400 text-[10px]">
          {data.stockAvailable}
        </div>
        <div className="w-[180px] flex flex-col gap-2">
          <div className="text-[20px] uppercase text-center">{data.name}</div>
          <div className="text-[15px]">PRICE: {data.price.toFixed(2)} PHP</div>
          <div className="text-[14px] italic">
            {data.description
              ? `${data.description.slice(0, 120)}...`
              : "No description given"}
          </div>
        </div>
      </div>
    </div>
  );
};
