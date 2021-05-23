import React from "react";
import "../css/search.css";
import Row from "./Row";
import Torrent from "./Torrent";
import requests from "../requests";
function Results({ match }) {
  const url1 = `/search/multi?api_key="apikey"&language=en-US&page=1&include_adult=false&query=${match.params.query}`;
  return (
    <div className="results">
      <Row
        title={`Results for: ${match.params.query}`}
        fetchUrl={url1}
        heading={true}
      />
      <Torrent query={match.params.query} />
      <Row
        title={requests.movies.title}
        fetchUrl={requests.movies.Link}
        heading={true}
      />
      <Row
        title={requests.trending.title}
        fetchUrl={requests.trending.Link}
        heading={true}
      />
    </div>
  );
}

export default Results;
