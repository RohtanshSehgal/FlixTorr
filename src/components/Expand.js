import React from "react";
import { useState, useEffect } from "react";
import "../css/display.scss";
import axios from "../axios";
import requests from "../requests";
import "../css/button.css";
import Display from "./Display";

function Expand() {
  const image = "https://image.tmdb.org/t/p/w1280";
  const image2 = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.netflix.Link);
      setMovie(request.data.results[0]);

      return request;
    }
    fetchData();
  }, []);

  return (
    <>
      <Display
        background={image2 + movie?.backdrop_path}
        poster={image + movie?.poster_path}
        title={movie?.title || movie?.name || movie?.original_name}
        releasedate={movie?.first_air_date}
        rating={movie?.vote_average}
        language={movie?.original_language}
        overview={movie?.overview}
        id={movie?.id}
        type="tv"
      />
    </>
  );
}

export default Expand;
