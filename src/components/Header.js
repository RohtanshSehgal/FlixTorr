import React from "react";
import logo from "../images/Trend.svg";
import trend from "../images/Trending.svg";
import "../css/header.css";
function Header() {
  return (
    <div className="head">
      <img src={trend} alt="" />
      <img
        src={logo}
        style={{ height: "55px", width: "55px", padding: "5px" }}
        alt=""
      />
    </div>
  );
}

export default Header;
