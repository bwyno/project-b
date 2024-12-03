import { products } from "../../assets/products";
import { Product } from "../../models/product";
import { Card } from "./Card";
export const Products = () => {
  return (
    <div className="p-[20px] grid lg:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1">
      {products.data.map((product: Product) => {
        return (
          <Card data={product} />
        );
      })}
    </div>
  );
};
