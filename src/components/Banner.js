import React, { useEffect, useState } from "react";

import Row from "./Row";
import "../css/banner.css";
import Torrent from "./Torrent";

function Banner({ match }) {
  const image = "https://image.tmdb.org/t/p/w1280";
  const image2 = "https://image.tmdb.org/t/p/original";
  const [info, setinfo] = useState({});
  const API_KEY = "";
  const url = `/${match.params?.type}/${match.params?.id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
  const url2 = `https://api.themoviedb.org/3/${match.params?.type}/${match.params?.id}?api_key=${API_KEY}&language=en-US`;
  useEffect(() => {
    fetch(url2)
      .then((data) => data.json())
      .then((resp) => {
        setinfo(resp);
      });
  }, [url2]);
  return (
    <div>
      {Object.keys(info).length !== 0 ? (
        <div
          style={{
            backgroundImage: `url(${image2 + info?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="image"
        >
          <div className="info">
            <h1>{match.params?.title}</h1>
            <p>{info?.tagline}</p>
            <h4
              style={{
                color: "red",
                padding: "10px 0px",
              }}
            >
              {info?.first_air_date || info?.release_date}
            </h4>

            <img
              style={{
                height: "300px",
                width: "200px",
                margin: "10px 0px",
              }}
              src={image + info?.poster_path}
              alt=""
            />

            <p>
              {(info?.overview + "").length > 260
                ? `${(info?.overview + "").slice(0, 260)}.....`
                : info?.overview}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <Torrent query={match.params.title} comp={match.params.type} />
      <Row title={"Recommended"} fetchUrl={url} heading={true} />
    </div>
  );
}

export default Banner;
