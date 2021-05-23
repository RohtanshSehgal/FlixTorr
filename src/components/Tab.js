import React, { useState } from "react";
import Row from "./Row";
import requests from "../requests";
import "../css/tab.css";

function Tab({ start, end }) {
  const [genre, setGenre] = useState(requests.top.title);
  const [list, setList] = useState(requests.top.Link);
  const [active, setActive] = useState(0);
  const tab_Headings = Object.keys(requests).splice(start, end);

  return (
    <>
      <section className="tab">
        <menu className="menu">
          <ul>
            {tab_Headings.map((keys, i) => {
              return (
                <li
                  style={
                    active === i
                      ? {
                          boxShadow: "0px 6px 15px rgba(255, 30, 30, .5)",
                          color: "rgba(255,50,50,1)",
                        }
                      : { backgroundColor: "transparent" }
                  }
                  key={i}
                  className="tab"
                  onClick={() => {
                    setGenre(requests[keys]["title"]);
                    setList(requests[keys]["Link"]);
                    setActive(i);
                  }}
                >
                  {requests[keys]["title"].toUpperCase()}
                </li>
              );
            })}
          </ul>
        </menu>
      </section>
      <div>
        <Row title={genre} fetchUrl={list} heading={false} />
      </div>
    </>
  );
}

export default Tab;
