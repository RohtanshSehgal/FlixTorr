import React from "react";
import fast from "../images/Fast.svg";
import slow from "../images/Slow.svg";
function Torrentlist({
  magnet,
  size,
  site,
  type,
  name,
  title,
  trusted,
  nsfw,
  id,
}) {
  return (
    <div className="items-torrent">
      {trusted ? (
        <img
          src={fast}
          style={{ height: "55px", width: "55px", padding: "5px" }}
          alt=""
        />
      ) : (
        <img
          src={slow}
          style={{ height: "55px", width: "55px", padding: "5px" }}
          alt=""
        />
      )}
      <h4>{name}</h4>
      <h5>{size}</h5>
      <h5>Website: {site}</h5>
      <h5>{type}</h5>
      <button
        onClick={() => {
          navigator.clipboard.writeText(magnet);
          alert(`${name} Link Copied to Clipboard`);
        }}
      >
        Copy Link!
      </button>
    </div>
  );
}

export default Torrentlist;
