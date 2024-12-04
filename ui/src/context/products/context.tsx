import React from "react";
import { Product } from "../../models/product";

export type ProductContextType = {
  product: Product | undefined;
  setProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
};

export const ProductContext = React.createContext<
  ProductContextType | any
>(null);
