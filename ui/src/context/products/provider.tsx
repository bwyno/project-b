import React from "react";
import { ProductContext } from "./context";
import { Product } from "../../models/product";

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [product, setProduct] = React.useState<Product>();
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
