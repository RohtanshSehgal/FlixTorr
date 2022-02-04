import React from "react";
import "./Details.css";
import star from "./Images/icons8-star-64.png";
import general from "../../services/general";
import { Link } from "react-router-dom";
function Details({ forwardedRef, details, handleUpdate }) {
  const handleShow = handleUpdate;
  return (
    <section className="details">
      {details ? (
        <div
          ref={forwardedRef.ref}
          className="movie-card"
          style={{
            backgroundImage: `url(${
              general.image.background + details.backdrop_path
            })`,
          }}
        >
          <h1>{details.title || details.name}</h1>

          <span style={{ color: "red" }}>
            {details.release_date || details.first_air_date}
          </span>
          <span>
            <span>
              {Math.floor(details.vote_average)}
              <img className="star" src={star} alt="" />
            </span>
            <em style={{ color: "skyblue" }}>{details.original_language}</em>
          </span>
          <p>{details.overview}</p>
          <button
            onClick={() => {
              handleShow(false);
              forwardedRef.banRef.current.style = "flex";
              window.scrollTo(0, 90);
            }}
            className="watch"
          >
            <Link
              to={`${
                details.first_air_date
                  ? `/tv/${details.id}`
                  : `/movie/${details.id}`
              }`}
            >
              Find Torrents
            </Link>
          </button>
        </div>
      ) : (
        void 0
      )}
    </section>
  );
}

export default Details;
