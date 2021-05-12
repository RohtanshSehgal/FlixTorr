import React from "react";
import { useState, useEffect } from "react";
import "../css/details.scss";
import { trackPromise } from "react-promise-tracker";
import desc from "../images/Details.svg";

function Details({ title, id, comp }) {
  const image = "https://image.tmdb.org/t/p/w1280";
  var obj = {};
  id = parseInt(id);
  const url1 =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const url2 = "https://api.tvmaze.com/shows/";
  const [details, getDetails] = useState([]);
  const [serdetails, setserDetails] = useState({});
  useEffect(() => {
    if (comp === "series") {
      trackPromise(
        fetch(url2 + id)
          .then((resp) => resp.json())
          .then((data) => {
            setserDetails(data);
          })
      );
    }
    if (comp === "movies") {
      trackPromise(
        fetch(url1 + title)
          .then((resp) => resp.json())
          .then((data) => {
            getDetails(data.results);
          })
      );
    }
  }, [title, id, comp]);

  return (
    <>
      <img
        className="head-tor"
        style={{ height: "90px", width: "225px" }}
        src={desc}
        alt=""
      />
      {comp === "movies" ? (
        <div>
          {details.map((el) => {
            el.id === id ? (obj = el) : void 0;
            return "";
          })}
          {obj && Object.keys(obj).length !== 0 ? (
            <div
              className="movie_card"
              id="bright"
              style={{
                backgroundImage: `url(${
                  obj.backdrop_path
                    ? image + obj.backdrop_path
                    : image + obj.poster_path
                })`,
              }}
            >
              <div className="info_section">
                <div className="movie_header">
                  <img
                    className="locandina"
                    src={image + obj.poster_path}
                    alt=""
                  />
                  <h1>{obj.original_title}</h1>
                  <h4>{obj.release_date}</h4>
                  <span className="minutes">{obj.vote_average}</span>
                </div>
                <div className="movie_desc">
                  <p className="text">
                    {(obj.overview + "").length > 277
                      ? (obj.overview + "").slice(0, 277)
                      : obj.overview}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {comp === "series" && Object.keys(serdetails).length !== 0 ? (
        <div
          className="movie_card"
          id="bright"
          style={{
            backgroundImage: `url(${serdetails.image.original})`,
          }}
        >
          <div className="info_section">
            <div className="movie_header">
              <img
                className="locandina"
                src={serdetails.image.original}
                alt=""
              />
              <h1>{serdetails.name}</h1>
              <h4>{serdetails.premiered}</h4>
              <span className="minutes">{serdetails.rating.average}</span>
            </div>
            <div className="movie_desc">
              <p
                className="text"
                dangerouslySetInnerHTML={{
                  __html:
                    (serdetails.summary + "").length > 277
                      ? (serdetails.summary + "").slice(0, 277) + " ....."
                      : serdetails.summary,
                }}
              ></p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Details;
