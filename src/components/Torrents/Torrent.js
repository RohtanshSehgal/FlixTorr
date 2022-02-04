import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import Stack from "@mui/material/Stack";
import BasicCard from "../Card/BasicCard";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./Torrent.css";
function Torrent({ dataTorrents, error, loading, mediaType }) {
  return (
    <>
      <h1
        style={{
          marginLeft: "20px",
        }}
      >
        TORRENTS
      </h1>
      {loading ? (
        <CircularProgress
          style={{
            color: "red",
            marginLeft: "20px",
          }}
        />
      ) : (
        ""
      )}
      {error === 404 ? (
        <Alert
          sx={{
            backgroundColor: "#0d0101",
            color: "white",
          }}
          severity="error"
        >
          <AlertTitle>Error</AlertTitle>
          <strong>TORRENTS NOT FOUND</strong>
        </Alert>
      ) : (
        ""
      )}
      <Stack
        className="stackrow"
        width={"100%"}
        display={"flex"}
        spacing={2}
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          overflowX: "scroll",
          overflowY: "hidden",
        }}
      >
        {dataTorrents.length === 0
          ? ""
          : dataTorrents.map((value, index) => {
              return (
                <BasicCard component={mediaType} key={index} data={value} />
              );
            })}
      </Stack>
    </>
  );
}

export default Torrent;
