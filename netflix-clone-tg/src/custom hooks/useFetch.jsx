import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchGenre() {
      const response = await axios.get(`https://api.themoviedb.org/3${url}`);
      setData(response.data?.results);
      return response;
    }
    fetchGenre();
  }, [url]);
  return data;
};

export default useFetch;
