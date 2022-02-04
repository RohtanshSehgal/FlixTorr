import React from "react";
import MovieDetail from "./MovieDetails/MovieDetails";
import LinearProgress from "@mui/material/LinearProgress";
import Torrent from "../Torrents/Torrent";
import useFetchMovieTorrents from "../../hooks/useFetchMovieTorrents";
function MovieView({ data, forwardedRef }) {
  const [dataTorrents, error, loading] = useFetchMovieTorrents({
    imdbId: data.imdb_id,
    title: data.title,
  });
  return (
    <div>
      {Object.keys(data).length !== 0 ? (
        <>
          <MovieDetail forwardedRef={forwardedRef} detail={data} />
        </>
      ) : (
        <LinearProgress color="inherit" />
      )}
      <Torrent
        dataTorrents={dataTorrents}
        error={error}
        loading={loading}
        mediaType={"movie"}
      />
    </div>
  );
}

export default MovieView;
