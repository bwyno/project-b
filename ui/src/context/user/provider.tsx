import React from "react";
import { SelectedProduct } from "../../models/product";
import { UserContext } from "./context";

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = React.useState<SelectedProduct[]>([]);
  const [cartCount, setCartCount] = React.useState<number>(0);

  const addItemToCart = (item: SelectedProduct) => {
    setCart([...cart, item]);
    setCartCount(cartCount + 1);
  };
  return (
    <UserContext.Provider
      value={{
        cart,
        setCart,
        addItemToCart,
        cartCount,
        setCartCount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
