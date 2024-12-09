import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BaseLayout } from "../layouts/baseLayout";
import { Home } from "../pages/home";
import { Products } from "../pages/products";
import { Product } from "../pages/products/id";
import { ContextProvider } from "../context";
import { products } from "../assets/products";
import { Cart } from "../pages/cart";
import { useApiGet } from "../hooks/useApiGet";

const router = createBrowserRouter([
  {
    path: "",
    Component: BaseLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/products/:id",
        Component: Product,
      },
      {
        path: "/cart",
        Component: Cart,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </>
  );
}

export default App;
