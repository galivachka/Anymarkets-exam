import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [url]);
  return [data];
};
