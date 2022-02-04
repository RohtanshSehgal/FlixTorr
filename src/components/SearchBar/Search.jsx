import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Search.css";
import searchbutton from "./search.png";
function Search() {
  const [state, setstate] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  function handleOnClick(text) {
    if (text.trim().length > 0) {
      navigate(`/results/${text}`);
    } else {
      alert("Please input alphabet characters only");
    }
  }
  useEffect(() => {
    let link = location.pathname;
    if (link.includes("/results")) {
      link = link.substring(link.lastIndexOf("/") + 1).replaceAll("%20", " ");
      setstate(link);
    } else {
      setstate("");
    }
  }, [location]);

  return (
    <div className="search">
      <input
        style={{ color: "white" }}
        value={state}
        required
        onChange={(event) => setstate(event.target.value)}
        type="text"
        placeholder={"What are you ʢ👁️.👁️ʡ for?"}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleOnClick(event.target.value);
          }
        }}
      ></input>
      <button onClick={() => handleOnClick(state)}>
        <img
          alt=""
          src={searchbutton}
          style={{ height: "35px", width: "35px" }}
        />
      </button>
    </div>
  );
}

export default Search;
