import React, { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import Movielists from "./Movielists";
import Torrentlist from "./Torrentlist";
import MovSec from "../images/Movies.svg";
import SerSec from "../images/Series.svg";
import TorrSec from "../images/Torrent.svg";
import "../css/search.css";
import ErrorDisplay from "./ErrorDisplay";

function SearchMovie({ match }) {
  const image = "https://image.tmdb.org/t/p/w1280";
  const url1 =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const url2 = "https://api.tvmaze.com/search/shows?q=";
  const url3 = "https://api.sumanjay.cf/torrent/?query=";
  // Movie
  const [result, getresults] = useState([]);
  const [movcheck, setmovcheck] = useState(false);
  // series
  const [seriesResult, setseriesResult] = useState([]);
  const [sercheck, setsercheck] = useState(false);
  // torr
  const [torrResult, settorrResult] = useState([]);
  const [torrcheck, settorrcheck] = useState(false);

  useEffect(() => {
    trackPromise(
      // mov
      fetch(url1 + match.params.query)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.results.length !== 0) {
            setmovcheck(false);
            getresults(data.results);
          } else {
            setmovcheck(true);
          }
        }),
      // series
      fetch(url2 + match.params.query.replace(/\d+/g, ""))
        .then((data) => data.json())
        .then((resp) => {
          if (resp.length !== 0) {
            setsercheck(false);
            setseriesResult(resp);
          } else {
            setsercheck(true);
          }
        }),
      // torr
      fetch(url3 + match.params.query).then((data) => {
        data.text().then((data) => {
          if (data === "Error") {
            settorrcheck(false);
            settorrcheck(true);
          }
          const resp = JSON.parse(data);
          settorrResult(resp);
        });
      })
    );
  }, [match.params.query]);
  return (
    <div className="serachcontainer">
      <img className="headsearch" src={MovSec} alt="" />
      {movcheck ? <ErrorDisplay comp="movies" /> : ""}
      <div className="container">
        {movcheck === false
          ? result.map((res) => {
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
            })
          : ""}
      </div>
      <img className="headsearch" src={SerSec} alt="" />
      {sercheck ? <ErrorDisplay comp="series" /> : ""}
      <div className="container">
        {sercheck === false
          ? seriesResult.map((res) => {
              if (res.show.image) {
                return (
                  <Movielists
                    comp="series"
                    key={res.show.id}
                    title={res.show.name}
                    desc={res.show.summary}
                    poster={res.show.image.original}
                    id={res.show.id}
                    rating={
                      res.show.rating.average ? res.show.rating.average : 5
                    }
                  />
                );
              }
              return "";
            })
          : ""}
      </div>
      <img className="headsearch" src={TorrSec} alt="" />
      {torrcheck ? <ErrorDisplay comp="Torrents" /> : ""}
      <div className="container-torrent">
        {torrcheck === false
          ? torrResult.map((mag) => {
              if (
                mag.type.indexOf("Movies") !== -1 ||
                mag.type.indexOf("TV") !== -1
              ) {
                return (
                  <Torrentlist
                    key={mag.magnet}
                    magnet={mag.magnet}
                    size={mag.size}
                    site={mag.site}
                    type={mag.type}
                    name={mag.name}
                    title={match.params.title}
                    trusted={mag.trusted}
                    nsfw={mag.nsfw}
                    id={match.params.id}
                  />
                );
              }
              return "";
            })
          : ""}
      </div>
    </div>
  );
}

export default SearchMovie;
