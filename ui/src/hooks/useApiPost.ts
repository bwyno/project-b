import axios from "axios";
import { useEffect, useState } from "react";
export const useApiPost = ({ url, data }: { url: string; data: unknown }) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const axiosRequest = async () => {
    setLoading(true);
    await axios
      .post(url, data)
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    axiosRequest();
  });
  return [response, error, loading];
};
