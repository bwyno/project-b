import { ProductContextProvider } from "./products";
import { UserContextProvider } from "./user";

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <UserContextProvider>
      <ProductContextProvider>{children}</ProductContextProvider>
    </UserContextProvider>
  );
};
