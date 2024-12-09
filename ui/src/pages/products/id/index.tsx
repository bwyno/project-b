import { useApiGet } from "../../../hooks/useApiGet";
import { useParams } from "react-router-dom";
import { Product as ProductType } from "../../../models/product";

export const Product = () => {
  const { id } = useParams();
  const [response, error, loading, refetch] = useApiGet<ProductType>({
    url: `${import.meta.env.VITE_API_URL}/products/${id}`,
  });

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="text-[40px] uppercase">{response.name}</div>
      <div className="flex flex-row w-[620px] gap-[20px]">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[300px] h-[300px] border-2 border-blue-200 rounded-[20px]">
            {response.imgSrc}
          </div>
          <div className="flex flex-row w-[300px] justify-end">
            {response.otherImageSrcs &&
              response.otherImageSrcs.map((src: string, index: number) => {
                return (
                  <div
                    className="w-[100px] h-[100px] border-2 border-blue-200 rounded-[20px]"
                    key={index}
                  >
                    {src}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="text-[14px] text-justify">
          <div>
            <span className="font-bold">Product Description:</span>{" "}
            {response.description ? response.description : "No description given"}
          </div>
          <div>
            <span className="font-bold">Price:</span> PHP {response.price}
          </div>
          <div>
            <span className="font-bold">Stocks Available:</span>{" "}
            {response.stockAvailable}
          </div>
        </div>
      </div>
    </div>
  );
};
