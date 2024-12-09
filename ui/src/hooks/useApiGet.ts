import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../models/product";

type UseApiGetType<T> = [
  response: T,
  error: string,
  loading: boolean,
  refetch: () => Promise<void>
];
export const useApiGet = <T> ({ url }: { url: string }): UseApiGetType<T> => {
  const [response, setResponse] = useState<T>([] as T);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const axiosRequest = async () => {
      setLoading(true);
      await axios
        .get(url)
        .then((res) => {
          setResponse(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };
    axiosRequest();
  }, [url]);

  const refetch = async () => {
    setLoading(true);
    await axios
      .get(url)
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  return [response, error, loading, refetch];
};
