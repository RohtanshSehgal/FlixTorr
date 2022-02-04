import React from "react";
import logo from "../images/FlixTorr.svg";
import Github from "./github.svg";
import "./Footer.css";
function Footer() {
  return (
    <footer style={{ marginTop: "10px" }}>
      <div className="footer">
        <img
          className="endlogo"
          src={logo}
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
          alt=""
        />
        <span
          className="images"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <a
            href="https://github.com/RohtanshSehgal/FlixTorr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                height: "48px",
                width: "48px",
              }}
              src={Github}
              alt=""
            />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
