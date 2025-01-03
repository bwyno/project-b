import React from "react";
import { Product } from "../../models/product";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user";
import { ProductContext } from "../../context/products";

export const Card = ({ data }: { data: Product }) => {
  const [hover, setHover] = React.useState<boolean>(false);
  const [quantity, setQuantity] = React.useState<number>(0);
  const { addItemToCart } = React.useContext(UserContext);
  const { setProduct } = React.useContext(ProductContext);
  const navigate = useNavigate();
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
          <div
            onClick={() => {
              setProduct(data);
              navigate(`/products/${data.id}`);
            }}
            className="hover:bg-blue-400 bg-blue-200 rounded-[10px] text-[16px] w-[140px] h-[40px] border-blue-500 flex items-center justify-center select-none cursor-pointer"
          >
            View Product
          </div>

          <div>
            <input
              className="w-[50px] rounded-[20px] px-2 text-center"
              type="text"
              placeholder="quantity"
              value={quantity.toString()}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (/^\d*$/.test(inputValue)) {
                  const clampedValue = Math.min(
                    Number(inputValue),
                    data.stockAvailable
                  );
                  setQuantity(clampedValue);
                }
              }}
              maxLength={3}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (quantity !== 0) {
                    addItemToCart({ ...data, quantity: quantity });
                    setQuantity(0);
                  }
                }
              }}
            />
          </div>
          <div
            onClick={() => {
              if (quantity !== 0) {
                addItemToCart({ ...data, quantity: quantity });
                setQuantity(0);
              }
            }}
            className="hover:bg-blue-400 bg-blue-200 rounded-[10px] text-[16px] w-[140px] h-[40px] border-blue-500 flex items-center justify-center select-none cursor-pointer"
          >
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
          <div className="text-[15px]">PRICE: {data.price} PHP</div>
          <div className="text-[14px] italic">
            {!data.description
              ? "No description available"
              : data.description.length < 120
              ? data.description
              : `${data.description.slice(0, 120)}...`}
          </div>
        </div>
      </div>
    </div>
  );
};
