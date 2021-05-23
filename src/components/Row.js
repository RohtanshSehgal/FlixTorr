import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../css/row.css";
import Display from "./Display";
import ErrorDisplay from "./ErrorDisplay";
function Row({ title, fetchUrl, heading }) {
  const image = "https://image.tmdb.org/t/p/w1280";
  const image2 = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [activeMovie, setactiveMovie] = useState(0);
  const [err, setErr] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      if (request.data.errors || request.data.results.length === 0) {
        setErr(true);
      } else {
        setErr(false);
        setMovies(request.data.results);
      }
      return request;
    }
    fetchdata();
  }, [fetchUrl]);
  return (
    <div className="row">
      {heading ? (
        <h1 style={{ marginLeft: "22px" }}>{title.toUpperCase()}</h1>
      ) : (
        ""
      )}
      <div className="row_posters">
        {err ? <ErrorDisplay comp="Movies" /> : ""}

        {movies.map((movie, i) => {
          return (
            <img
              key={movie.id}
              src={image + movie.poster_path}
              alt=""
              onClick={() => {
                setShowDetails(true);
                setactiveMovie(i);
                window.scrollBy({ top: 280, behavior: "smooth" });
              }}
            />
          );
        })}
      </div>
      <div id="d">
        {!showDetails ? (
          ""
        ) : (
          <>
            <button
              className="btn"
              style={{
                fontSize: "1.1rem",
                padding: "0.5rem 1rem",
                marginLeft: "20px",
                marginBottom: "5px",
                color: "#f4f4f4",
                backgroundColor: "transparent",
              }}
              onClick={() => {
                setShowDetails(false);
              }}
            >
              Close
            </button>

            <Display
              background={image2 + movies[activeMovie]?.backdrop_path}
              poster={image + movies[activeMovie]?.poster_path}
              title={
                movies[activeMovie]?.title ||
                movies[activeMovie]?.name ||
                movies[activeMovie]?.original_name
              }
              releasedate={
                movies[activeMovie]?.first_air_date ||
                movies[activeMovie]?.release_date
              }
              rating={movies[activeMovie]?.vote_average}
              language={movies[activeMovie]?.original_language}
              overview={movies[activeMovie]?.overview}
              id={movies[activeMovie]?.id}
              type={
                movies?.media_type || movies[activeMovie]?.first_air_date
                  ? "tv"
                  : "movie"
              }
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Row;
