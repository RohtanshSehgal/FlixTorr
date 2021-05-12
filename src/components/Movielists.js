import React from "react";
import { Link } from "react-router-dom";
import "../css/Movies.css";
import magnet from "../images/Magnet.svg";

function Movielists({ comp, title, desc, poster, id, rating, bg }) {
  return (
    <>
      {!rating || poster === null || bg === null ? (
        ""
      ) : (
        <div className="item">
          <h3>{title}</h3>
          <img
            style={{
              height: "300px",
              width: "200px",
              padding: "10px",
            }}
            src={poster}
            alt=""
          />
          <div className="rate">
            <button>
              <img
                style={{ height: "45px", width: "45px", padding: "5px" }}
                src={magnet}
                alt=""
              />
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/torrents/${comp}/${id}/${title}`}
              >
                Fetch Magnets
              </Link>
            </button>
            <div className="flexrate">
              <img
                src="https://img.icons8.com/fluent/18/000000/rating-circled.png"
                alt=""
              />
              <em>{rating}</em>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Movielists;
