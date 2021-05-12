import React, { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import Movielists from "./Movielists";
import MovSec from "../images/Movies.svg";
import SerSec from "../images/Series.svg";
import "../css/search.css";
import ErrorDisplay from "./ErrorDisplay";

function SearchMovie({ match }) {
  const image = "https://image.tmdb.org/t/p/w1280";
  const url1 =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const url2 = "https://api.tvmaze.com/search/shows?q=";
  const [result, getresults] = useState([]);
  const [seriesResult, setseriesResult] = useState([]);
  useEffect(() => {
    trackPromise(
      fetch(url1 + match.params.query)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.results.length !== 0) {
            getresults(data.results);
          }
        }),

      fetch(url2 + match.params.query.replace(/\d+/g, ""))
        .then((data) => data.json())
        .then((resp) => {
          if (resp.length !== 0) {
            setseriesResult(resp);
          }
        })
    );
  }, [match.params.query]);
  return (
    <div className="serachcontainer">
      <img className="headsearch" src={MovSec} alt="" />
      {result.length === 0 ? <ErrorDisplay comp="movies" /> : ""}
      <div className="container">
        {result.map((res) => {
          if (res.poster_path !== null) {
            return (
              <Movielists
                comp="movies"
                key={res.id}
                title={res.title}
                desc={res.overview}
                poster={image + res.poster_path}
                id={res.id}
                rating={res.vote_average}
              />
            );
          }
          return "";
        })}
      </div>
      <img className="headsearch" src={SerSec} alt="" />
      {seriesResult.length === 0 ? <ErrorDisplay comp="series" /> : ""}
      <div className="container">
        {seriesResult.map((res) => {
          if (res.show.image) {
            return (
              <Movielists
                comp="series"
                key={res.show.id}
                title={res.show.name}
                desc={res.show.summary}
                poster={res.show.image.original}
                id={res.show.id}
                rating={res.show.rating.average ? res.show.rating.average : 5}
              />
            );
          }
          return "";
        })}
      </div>
    </div>
  );
}

export default SearchMovie;
