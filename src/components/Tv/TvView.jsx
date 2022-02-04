import React from "react";
import MediaCard from "../Card/MediaCard";
import TvDetail from "./TvDetails/TvDetails";
import LinearProgress from "@mui/material/LinearProgress";
import Torrent from "../Torrents/Torrent";
import useFetchTvTorrents from "../../hooks/useFetchTvTorrents";
function TvView({ data, forwardedRef }) {
  const [dataTorrents, error, loading] = useFetchTvTorrents({
    title: data.name,
  });
  return (
    <div>
      {" "}
      {Object.keys(data).length !== 0 ? (
        <>
          <TvDetail forwardedRef={forwardedRef} detail={data} />
          <h1 style={{ marginLeft: "20px" }}>LATEST EPISODE TO AIR</h1>
          <MediaCard
            name={data.last_episode_to_air.name}
            imagePath={data.last_episode_to_air.still_path}
            overview={data.last_episode_to_air.overview}
            runtime={data.episode_run_time[0]}
          />
        </>
      ) : (
        <LinearProgress color="inherit" />
      )}
      <Torrent
        dataTorrents={dataTorrents}
        error={error}
        loading={loading}
        mediaType={"tv"}
      />
    </div>
  );
}

export default TvView;
