import React from "react";
import { useLoaderData } from "react-router-dom";
import { Product as ProductType } from "../../../models/product";

export const Product = () => {
  const product = useLoaderData() as ProductType;
  React.useEffect(() => {});
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.price.toFixed(2)}</div>
      <div>
        {product.description ? product.description : "No description given"}
      </div>
    </div>
  );
};
