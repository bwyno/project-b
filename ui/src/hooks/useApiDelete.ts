import axios from "axios";
import { useEffect, useState } from "react";
export const useApiDelete = ({ url }: { url: string }) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const axiosRequest = async () => {
    setLoading(true);
    await axios
      .delete(url)
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
