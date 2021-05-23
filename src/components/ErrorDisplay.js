import React from "react";
import "../css/error.css";
import error from "../images/Error.svg";
function ErrorDisplay({ comp }) {
  return (
    <div className="error">
      <div className="insideErr">
        <img
          src={error}
          style={{ height: "30px", width: "30px", padding: "4px" }}
          alt=""
        />
        <em>Ahh! my bad i cant find {comp} that you've serached for ಠ╭╮ಠ</em>
      </div>
      {comp === "torrents" ? (
        <div className="insideErr">
          <em>Try Reloading the page 3-4 times.</em>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ErrorDisplay;
