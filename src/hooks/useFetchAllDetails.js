import React, { useState, useEffect } from "react";
import { tmdb } from "../services/axios";
import MoviesRoutes from "../services/Movies";
function useFetchAllDetails({ fetchUrl }) {
  function clean(array) {
    return array.filter((value) => {
      return value.media_type === "movie";
    });
  }
  const [allDetails, setallDetails] = useState([]);
  useEffect(() => {
    tmdb
      .get(fetchUrl)
      .then(({ data }) => {
        let results = clean(data.results);
        let randomIndex = Math.floor(Math.random() * (data.results.length / 2));
        return results[randomIndex];
      })
      .then((result) => {
        tmdb
          .get(
            MoviesRoutes.idSearch.idpath +
              result.id.toString() +
              MoviesRoutes.idSearch.getdetails.path
          )
          .then(({ data }) => {
            setallDetails(data);
          });
      });
  }, [fetchUrl]);
  return allDetails;
}

export default useFetchAllDetails;
