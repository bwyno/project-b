import React from "react";
import { UserContext } from "../../context/user";
import { Product } from "../../models/product";
import { Card } from "./Card";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useApiGet } from "../../hooks/useApiGet";

export const Products = () => {
  const { cartCount } = React.useContext(UserContext);
  const navigate = useNavigate();
  const [response, error, loading, refetch] = useApiGet<Product[]>({
    url: `${import.meta.env.VITE_API_URL}/products`,
  });
  return (
    <div>
      <div className="p-[20px] grid lg:grid-cols-4 gap-2 md:grid-cols-2 sm:grid-cols-1">
        {response.map((product: Product) => {
          return <Card data={product} key={product.id} />;
        })}
        <div
          onClick={() => navigate("/cart")}
          className="fixed right-4 bottom-4 border-2 h-[60px] w-[60px] flex justify-center items-center border-blue-600 hover:bg-blue-100 rounded-[10px] cursor-pointer"
        >
          <ShoppingCartIcon
            sx={{ fontSize: 40 }}
            className="text-blue-600 h-full w-full"
          />
          <div className="absolute top-[-12.5px] h-[25px] w-[30px] border-2 flex justify-center items-center border-blue-600 text-red-600 font-semibold bg-white rounded-[10px] select-none">
            {cartCount}
          </div>
        </div>
      </div>
    </div>
  );
};
