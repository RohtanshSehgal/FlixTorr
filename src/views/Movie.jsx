import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import MovieView from "../components/Movies/MovieView";
import useFetchdetails from "../hooks/useFetchdetails";
import Row from "../components/Row/Row";
import MoviesRoutes from "../services/Movies";
import Tab from "../components/Tab/Tab";
function Movie() {
  const params = useParams();
  const parentRef = useRef(null);
  const data = useFetchdetails({
    id: params.id,
    media_type: "movie",
  });
  return (
    <div>
      <MovieView forwardedRef={parentRef} data={data} />
      {/* Reccomendation */}
      <Row
        title={MoviesRoutes.idSearch.recommendation.title}
        fetchUrl={
          MoviesRoutes.idSearch.idpath +
          params.id +
          MoviesRoutes.idSearch.recommendation.path +
          "1"
        }
        heading={true}
        forwardedRef={parentRef}
      />
      <Row
        title={MoviesRoutes.idSearch.recommendation.title}
        fetchUrl={
          MoviesRoutes.idSearch.idpath +
          params.id +
          MoviesRoutes.idSearch.recommendation.path +
          "2"
        }
        heading={false}
        forwardedRef={parentRef}
      />

      <Tab forwardedRef={parentRef} />
    </div>
  );
}

export default Movie;
