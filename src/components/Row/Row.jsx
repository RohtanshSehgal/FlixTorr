import React, { useState, useRef } from "react";
import "./Row.css";
import general from "../../services/general";
import Overlay from "../Overlay/Overlay";
import useFetchData from "../../hooks/useFetchData";
import useClickOutside from "../../hooks/useClickOutside";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Row({ title, fetchUrl, heading, forwardedRef }) {
  const ref = useRef();
  const handleUpdate = (args) => {
    setShow(args);
  };
  const [show, setShow] = useClickOutside({
    ref: ref,
    bannerRef: forwardedRef,
  });

  const [details, setDetails] = useState({});
  const [movies, error] = useFetchData({ fetchUrl: fetchUrl });
  return (
    <div className="row">
      {heading ? (
        <h1 style={{ marginLeft: "22px" }}>{title.toUpperCase()}</h1>
      ) : (
        ""
      )}
      <div className="row_posters">
        {error ? (
          <Alert
            sx={{
              backgroundColor: "#0d0101",
              color: "white",
            }}
            severity="error"
          >
            <AlertTitle>Error</AlertTitle>
            <strong>Not Found</strong>
          </Alert>
        ) : (
          ""
        )}
        {movies.length !== 0 ? (
          movies
            .filter((movie) => {
              return movie.vote_average > 7 && movie.overview;
            })
            .map((movie) => {
              return (
                <img
                  key={movie.id}
                  src={general.image.poster + movie.poster_path}
                  alt=""
                  onClick={() => {
                    setShow(true);
                    setDetails(movie);
                    forwardedRef.current.style.display = "none";
                  }}
                />
              );
            })
        ) : (
          <LinearProgress color="inherit" />
        )}
      </div>
      <div>
        {show ? (
          <Overlay
            handleUpdate={handleUpdate}
            forwardedRef={{ ref: ref, banRef: forwardedRef }}
            details={details}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Row;
