import React from "react";
import { Link } from "react-router-dom";
import "../css/Movies.css";
import star from "../images/Star.svg";
import magnet from "../images/Magnet.svg";

function Movielists({ comp, title, desc, poster, id, rating, bg }) {
  return (
    <>
      {!rating || poster === null || bg === null ? (
        ""
      ) : (
        <>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/FlixTorr/torrents/${comp}/${id}/${title}`}
          >
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
                <button style={{ paddingRight: "10px" }}>
                  <img
                    style={{ height: "45px", width: "45px", padding: "8px" }}
                    src={magnet}
                    alt=""
                  />
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/FlixTorr/torrents/${comp}/${id}/${title}`}
                  >
                    Fetch Magnets
                  </Link>
                </button>
                <div className="flexrate">
                  <img
                    src={star}
                    style={{
                      height: "18px",
                      width: "18px",
                      padding: "1px",
                      marginBottom: "4px",
                    }}
                    alt=""
                  />
                  <em>{rating}</em>
                </div>
              </div>
            </div>
          </Link>
        </>
      )}
    </>
  );
}

export default Movielists;
