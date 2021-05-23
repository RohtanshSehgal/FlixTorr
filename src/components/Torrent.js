import React, { useEffect, useState } from "react";
import "../css/torrent.css";
import ErrorDisplay from "./ErrorDisplay";
import Torrentlist from "./TorrentList";

function Torrent({ query, comp }) {
  const torr = `https://api.sumanjay.cf/torrent/?query=${(query + "").replace(
    /[^a-zA-Z ]/g,
    ""
  )}`;

  const [results, setResults] = useState([]);
  const [check, setcheck] = useState(false);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setResults([]);
    setcheck(false);
    setLoad(true);
    fetch(torr).then((data) => {
      data.text().then((data) => {
        if (data === "Error" || data === "null") {
          setcheck(true);
          setLoad(false);
          setResults([]);
        } else {
          const resp = JSON.parse(data);
          if (resp.status === false) {
            setcheck(true);
            setLoad(false);
            setResults([]);
          } else {
            setResults(resp);
            setLoad(false);
            setcheck(false);
          }
        }
      });
    });
  }, [torr]);

  return (
    <div className="torrentcontainer">
      <h1 style={{ marginLeft: "22px" }}>TORRENTS</h1>
      {check ? <ErrorDisplay comp="torrents" /> : ""}

      <div className="items">
        {load ? (
          <div
            className="shimmer"
            style={{
              width: "100%",
              margin: "10px",
              height: "200px",
            }}
          ></div>
        ) : (
          ""
        )}

        {results.length !== 0
          ? results?.map((result) => {
              if (
                result.type.indexOf("Movies") !== -1 ||
                result.type.indexOf("TV") !== -1
              ) {
                return (
                  <li key={result?.magnet}>
                    {result?.nsfw ? (
                      ""
                    ) : (
                      <Torrentlist
                        key={result?.magnet}
                        name={result?.name}
                        site={result?.site}
                        size={result?.size}
                        type={result?.type}
                        magnet={result?.magnet}
                        trusted={result?.trusted}
                        nsfw={result?.nsfw}
                      />
                    )}
                  </li>
                );
              }
              return void 0;
            })
          : ""}
      </div>
    </div>
  );
}

export default Torrent;
