import React from "react";
import general from "../../services/general";
import star from "../images/icons8-star-64.png";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner({ forwardedRef, detail }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${
          general.image.background + detail.backdrop_path
        })`,
      }}
    >
      <div ref={forwardedRef} className="banner-content">
        <h1>{detail.title.toUpperCase()}</h1>
        <h2>{detail.tagline}</h2>
        <h3>
          {detail.genres
            .map((value) => {
              return value.name;
            })
            .join(" | ")
            .toUpperCase()}
        </h3>
        <span>
          <h4>{detail.vote_average}</h4>
          <img src={star} alt="" />
        </span>
        <span>
          <h6>{Math.round(parseInt(detail.runtime) / 60) + " hrs"}</h6>
          <em>
            <h6>{detail.original_language}</h6>
          </em>
        </span>
        <p>{detail.overview}</p>
        <button className="watch">
          <Link
            to={`${
              detail.first_air_date ? `/tv/${detail.id}` : `/movie/${detail.id}`
            }`}
          >
            Find Torrents
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Banner;
