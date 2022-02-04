import { useState, useEffect } from "react";
import axios from "axios";
import TorrentRoutes from "../services/Torrent";
function useFetchTvTorrents({ title }) {
  const baseUrl = "https://torrvia.herokuapp.com";
  const [torrents, setTorrents] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // fetchAll
    async function fetchAll(retries = 3) {
      setloading(true);
      setError(null);
      setTorrents([]);
      let axiosArr = [
        TorrentRoutes.x1337 + title + "/1",
        TorrentRoutes.piratebay + title,
      ];
      axiosArr = axiosArr.map((value) => {
        return axios.get(baseUrl + value);
      });
      try {
        let resp = await Promise.allSettled(axiosArr);
        axiosArr = resp
          .filter((res) => {
            return res.status === "fulfilled";
          })
          .map((res) => {
            return res.value.data.results;
          });
        let mergedData = [].concat.apply([], axiosArr);

        setTorrents(mergedData);
        setloading(false);
        setError(null);
      } catch (error) {
        if (error.response.status === 503 && retries !== 0) {
          fetchAll(retries - 1);
        } else {
          setloading(false);
          setError(error.response.status);
        }
      }
    }

    if (title) {
      fetchAll();
    } else {
      void 0;
    }
  }, [title]);
  return [torrents, error, loading];
}

export default useFetchTvTorrents;
