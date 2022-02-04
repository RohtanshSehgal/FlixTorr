import { useState, useEffect } from "react";
import service from "../services/axios";
function useFetchData({ fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchdata() {
      setMovies([]);
      const request = await service.tmdb.get(fetchUrl);
      if (request.data.errors || request.data.results.length === 0) {
        setError(true);
      } else {
        setError(false);
        setMovies(request.data.results);
      }
      return request;
    }
    fetchdata();
  }, [fetchUrl]);
  return [movies, error];
}

export default useFetchData;
