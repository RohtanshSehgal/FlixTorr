import React from "react";
import "../css/nav.css";
import logo from "../images/falcon.png";
import flixtorr from "../images/FlixTorr.svg";
import { Link } from "react-router-dom";
import Search from "./Searchbar";
function Nav() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/FlixTorr"}>
          <img src={logo} className="falcon" alt="" />
        </Link>
        <Link
          to={"/FlixTorr"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <img src={flixtorr} className="flix" alt="" />
        </Link>
      </div>

      <Search />
    </div>
  );
}

export default Nav;
