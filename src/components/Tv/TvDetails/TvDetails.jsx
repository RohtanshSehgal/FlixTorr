import React from "react";
import general from "../../../services/general";
import star from "../../images/icons8-star-64.png";
import "./TvDetails.css";
function TvDetail({ forwardedRef, detail }) {
  return (
    <div
      className="tvdetail"
      style={{
        backgroundImage: `url(${
          general.image.background + detail.backdrop_path
        })`,
      }}
    >
      <div ref={forwardedRef} className="moviedetail-content">
        <h1>{detail.name.toUpperCase()}</h1>

        <h2>{detail.tagline}</h2>

        <h3>
          {detail.genres
            .map((value) => {
              return value.name;
            })
            .join(" | ")
            .toUpperCase()}
        </h3>

        <img
          id="poster"
          src={general.image.poster + detail.poster_path}
          alt=""
        />
        <h6
          style={{
            zIndex: "10",
            fontSize: "1.5vh",
            color: "whitesmoke",
            marginTop: "5px",
          }}
        >
          {String(detail.first_air_date).split("-")[0]}
        </h6>
        <span>
          <h4>{detail.vote_average}</h4>

          <img src={star} alt="" />
        </span>

        <span>
          <h6>
            {parseInt(detail.number_of_seasons) === 1
              ? detail.number_of_seasons + " Season"
              : detail.number_of_seasons + " Seasons"}
          </h6>

          <em>
            <h6>{detail.original_language}</h6>
          </em>
        </span>
        <p>{detail.overview}</p>
      </div>
    </div>
  );
}

export default TvDetail;
