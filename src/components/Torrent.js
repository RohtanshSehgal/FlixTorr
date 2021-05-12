import { useEffect, useState } from "react";
import React from "react";
import Torrentlist from "./Torrentlist";
import Details from "./details";
import "../css/Torrent.css";
import { trackPromise } from "react-promise-tracker";
import torrent from "../images/Torrent.svg";
import ErrorDisplay from "./ErrorDisplay";

function Torrent({ match }) {
  const torr = `https://api.sumanjay.cf/torrent/?query=${(
    match.params.title + ""
  ).replace(/[^a-zA-Z ]/g, "")}`;
  const [mag, setMag] = useState([]);
  const [check, setcheck] = useState(false);
  useEffect(() => {
    trackPromise(
      fetch(torr).then((data) => {
        data.text().then((data) => {
          if (data === "Error") {
            setcheck(true);
          }
          const resp = JSON.parse(data);
          setMag(resp);
        });
      })
    );
  }, [torr, match.params.title]);
  return (
    <div className="lists">
      <Details
        title={match.params.title}
        id={match.params.id}
        comp={match.params.comp}
      />
      <img className="head-tor" src={torrent} alt="" />
      {check ? <ErrorDisplay comp="torrents" /> : ""}
      <div className="container-torrent">
        {mag.map((mag) => {
          if (
            mag.type.indexOf("Movies") !== -1 ||
            mag.type.indexOf("TV") !== -1
          ) {
            return (
              <Torrentlist
                key={mag.magnet}
                magnet={mag.magnet}
                size={mag.size}
                site={mag.site}
                type={mag.type}
                name={mag.name}
                title={match.params.title}
                trusted={mag.trusted}
                nsfw={mag.nsfw}
                id={match.params.id}
              />
            );
          }
          return "";
        })}
      </div>
    </div>
  );
}

export default Torrent;
