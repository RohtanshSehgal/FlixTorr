import React from "react";
import "../css/display.scss";
import "../css/button.css";
import { useHistory } from "react-router";
function Display({
  background,
  poster,
  title,
  releasedate,
  rating,
  language,
  overview,
  id,
  type,
}) {
  const history = useHistory();

  return (
    <div>
      <div
        className="movie_card"
        id="bright"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={poster} alt="" />
            <h1>{title}</h1>
            <h4>{releasedate}</h4>
            <span className="minutes">{rating}</span>
            <h5 className="type">{language}</h5>
          </div>
          <div className="movie_desc">
            <p
              style={{
                paddingTop: "40px",
              }}
              className="text"
            >
              {(overview + "").length > 260
                ? `${(overview + "").slice(0, 260)}.....`
                : overview}
            </p>
            <div style={{ paddingTop: "20px" }}>
              <button
                style={{
                  fontSize: "1.1rem",
                  padding: "0.5rem 1rem",
                  color: "#f4f4f4",
                  backgroundColor: "transparent",
                }}
                className="btn"
                onClick={() => {
                  history.push(`/torrent/${id}/${type}/${title}`);
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
              >
                Fetch Torrents
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
