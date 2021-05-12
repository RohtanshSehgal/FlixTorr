import React, { useState, useEffect } from "react";
import Movielists from "./Movielists";
import "../css/Movies.css";
import { trackPromise } from "react-promise-tracker";
import Header from "./Header";
function Movies() {
  const image = "https://image.tmdb.org/t/p/w1280";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    trackPromise(
      fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
      )
        .then((resp) => resp.json())
        .then((data) => {
          setMovies(data.results);
        })
    );
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        {movies.map((movies) => {
          return (
            <Movielists
              comp="movies"
              key={movies.id}
              title={movies.title}
              desc={movies.overview}
              poster={image + movies.poster_path}
              id={movies.id}
              rating={movies.vote_average}
              bg={image + movies.backdrop_path}
            />
          );
        })}
      </div>
    </>
  );
}
export default Movies;
