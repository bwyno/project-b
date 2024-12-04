import React from "react";
import {  SelectedProduct } from "../../models/product";

export type UserContextType = {
  cart: SelectedProduct[] | undefined;
  setCart: React.Dispatch<React.SetStateAction<SelectedProduct[] | undefined>>;
  addItemToCart: (item: SelectedProduct) => void;
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  showAddProductModal: boolean;
};

export const UserContext = React.createContext<UserContextType | any>(null);
