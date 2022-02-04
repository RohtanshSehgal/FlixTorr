import { useRef } from "react";
import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import Row from "../components/Row/Row";
import general from "../services/general";
import Torrent from "../components/Torrents/Torrent";
import MoviesRoutes from "../services/Movies";
import TvRoutes from "../services/Tv";
import Tab from "../components/Tab/Tab";
function Results() {
  const { query } = useParams();
  const parentRef = useRef(null);
  const [dataTorrents, error, loading] = useSearch({
    query: query,
  });
  return (
    <div>
      <Row
        title={"Results"}
        forwardedRef={parentRef}
        fetchUrl={general.search + query}
        heading={true}
      />
      <Torrent
        dataTorrents={dataTorrents}
        error={error}
        loading={loading}
        mediaType={"search"}
      />

      <Row
        title={MoviesRoutes.home.trendingtoday.title}
        fetchUrl={MoviesRoutes.home.trendingtoday.path + "1"}
        heading={true}
        forwardedRef={parentRef}
      />

      <Row
        title={TvRoutes.home.trendingtoday.title}
        fetchUrl={TvRoutes.home.trendingtoday.path + "1"}
        heading={true}
        forwardedRef={parentRef}
      />
      <Tab fetchUrl={parentRef} />
    </div>
  );
}

export default Results;
