import React, { useState, useRef } from "react";
import Row from "../Row/Row";
import MoviesRoutes from "../../services/Movies";
import "./Tab.css";

function Tab({ forwardedRef }) {
  const requests = MoviesRoutes.genre;
  const [genre, setGenre] = useState(requests.action.title);
  const [list, setList] = useState(requests.action.Link);
  const [active, setActive] = useState(0);
  const tab_Headings = Object.keys(requests);

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
        <Row
          title={genre}
          fetchUrl={list + "1"}
          heading={false}
          forwardedRef={forwardedRef}
        />
        <Row
          title={genre}
          fetchUrl={list + "2"}
          heading={false}
          forwardedRef={forwardedRef}
        />
      </div>
    </>
  );
}

export default Tab;
