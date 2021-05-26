import React from "react";
import fast from "../images/Fast.svg";
import slow from "../images/Slow.svg";
function Torrentlist({ magnet, size, site, type, name, trusted }) {
  function copyToClipboard(link) {
    var textField = document.createElement("textarea");
    textField.innerText = link;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }

  return (
    <div className="item">
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
      <div className="child">
        <h4>{name}</h4>
        <h5>Website: {site}</h5>
        <h5>Size: {size}</h5>
        <h6>Type: {type}</h6>
        <button
          style={{
            fontSize: "1rem",
            padding: "0.5rem 0.5rem",
            marginTop: "5px",
            color: "#f4f4f4",
            backgroundColor: "transparent",
          }}
          className="btn"
          onClick={() => {
            copyToClipboard(magnet);
            alert(`${name} Link Copied to Clipboard`);
          }}
        >
          Copy Link!
        </button>
      </div>
    </div>
  );
}

export default Torrentlist;
