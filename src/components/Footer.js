import React from "react";
import logo from "../images/FlixTorr.svg";
import Github from "../images/github.svg";
import contact from "../images/contact.svg";
import social from "../images/linkedin.svg";
import "../css/index.css";
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
          classname="images"
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
          <a
            href="mailto: sehgalrohtansh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                height: "48px",
                width: "48px",
              }}
              src={contact}
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rohtanshsehgal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                height: "48px",
                width: "48px",
              }}
              src={social}
              alt=""
            />
          </a>
        </span>
        <a
          href="https://rohtanshsehgal.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Developed By Rohtansh Sehgal</em>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
