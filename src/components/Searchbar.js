import React, { useCallback, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../css/search.css";
import searchbutton from "../images/SearchButton.svg";
function Search() {
  const [state, setstate] = useState("");
  const history = useHistory();
  const location = useLocation();
  const handleOnClick = useCallback(
    (text) => {
      if (text.trim().length > 0) {
        history.push(`/movies/${text}`);
      } else {
        alert("Please input alphabet characters only");
      }
    },
    [history]
  );
  useEffect(() => {
    const link = history.location.pathname.substring(
      history.location.pathname.lastIndexOf("/") + 1
    );
    setstate(link);
  }, [history.location.pathname, location]);

  return (
    <div className="search">
      <input
        style={{ color: "white" }}
        value={state === "FLIXTORR" ? "" : state}
        required
        onChange={(event) => setstate(event.target.value)}
        type="text"
        placeholder={"What are you ʢ👁️.👁️ʡ for?"}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleOnClick(event.target.value);
          }
        }}
      ></input>{" "}
      <button onClick={() => handleOnClick(state)}>
        <img
          alt="Freepik"
          src={searchbutton}
          style={{ height: "35px", width: "35px" }}
        />
      </button>
    </div>
  );
}

export default Search;
