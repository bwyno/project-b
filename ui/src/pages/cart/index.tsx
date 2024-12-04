import React from "react";
import { UserContext } from "../../context/user";
import { SelectedProduct } from "../../models/product";

export const Cart = () => {
  const { cart } = React.useContext(UserContext);
  return (
    <div>
      {cart.length > 0 ? (
        cart.map((item: SelectedProduct) => {
          return (
            <div>
              {item.name} : {item.quantity}
            </div>
          );
        })
      ) : (
        <div>No items in the cart</div>
      )}
    </div>
  );
};
