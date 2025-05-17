import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await axios.get(url);
        setData(response.data.data); 
        setError(null);
      } catch (err) {
        setError("Failed to fetch product: " + err.message);
        setData(null);
      } finally {
        setIsPending(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
