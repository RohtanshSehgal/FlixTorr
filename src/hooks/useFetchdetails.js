import service from "../services/axios";
import { useState, useEffect } from "react";
import MoviesRoutes from "../services/Movies";
import TvRoutes from "../services/Tv";
function useFetchdetails({ id, media_type }) {
  const [details, setDetails] = useState({});
  useEffect(() => {
    if (media_type === "movie") {
      service.tmdb
        .get(
          MoviesRoutes.idSearch.idpath +
            id +
            MoviesRoutes.idSearch.getdetails.path
        )
        .then(({ data }) => {
          setDetails(data);
        });
    } else {
      service.tmdb
        .get(TvRoutes.idSearch.idpath + id + TvRoutes.idSearch.getdetails.path)
        .then(({ data }) => {
          setDetails(data);
        });
    }
  }, [id, media_type]);
  return details;
}

export default useFetchdetails;
