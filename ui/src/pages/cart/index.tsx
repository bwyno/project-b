import React from "react";
import { UserContext } from "../../context/user";
import { SelectedProduct } from "../../models/product";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const Cart = () => {
  const { cart, setCart } = React.useContext(UserContext);
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="text-[40px] font-bold uppercase">Cart</div>
      <table>
        <thead>
          <tr>
            <th className="w-[300px]">Product Name</th>
            <th className="w-[100px]">Stocks Available</th>
            <th className="w-[100px]">Quantity</th>
            <th className="w-[100px]"></th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((item: SelectedProduct) => {
              return (
                <tr key={item.id} className="text-center">
                  <td>{item.name}</td>
                  <td>{item.stockAvailable}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <DeleteForeverIcon
                      onClick={() => {
                        setCart((prevState: SelectedProduct[]) =>
                          prevState.filter((unit) => unit.id !== item.id)
                        );
                      }}
                      className="text-blue-600 hover:text-red-600 cursor-pointer"
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
