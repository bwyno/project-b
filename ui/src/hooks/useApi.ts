import axios from "axios";
import { useState } from "react";
export const useApi = ({
  method,
  url,
  data,
}: {
  method: string;
  url: string;
  data: any;
}) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const axiosInstance = async () => {
    try {
      setLoading(true);
      if (method === "post") {
        axios({
          method: method,
          url: url,
          data: data,
        });
      } else if (method === "get") {
        axios({
          method: method,
          url: url,
        });
      }
    } catch (e: any) {
      setError(e.message);
    }
  };

  return [response, error, loading, axiosInstance];
};
