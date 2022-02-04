import { useState, useEffect } from "react";
import axios from "axios";
import TorrentRoutes from "../services/Torrent";
function useSearch({ query }) {
  const baseUrl = "https://torrvia.herokuapp.com";
  const [torrents, setTorrents] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // async function singleRequest(url, retries = 3) {
    //   try {
    //     let { data } = await axios.get(url);
    //     setTorrents(torrents.concat(data.results));
    //     setloading(false);
    //     setError(null);
    //     return true;
    //   } catch (error) {
    //     if (error.response.status === 503 && retries !== 0) {
    //       singleRequest(retries - 1);
    //     } else {
    //       return false;
    //     }
    //   }
    // }

    // fetchAll
    async function fetchAll(retries = 3) {
      setloading(true);
      setError(null);
      setTorrents([]);
      let axiosArr = [
        TorrentRoutes.yts + query,
        TorrentRoutes.x1337 + query + "/1",
        TorrentRoutes.piratebay + query,
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

    fetchAll();
  }, [query]);
  return [torrents, error, loading];
}

export default useSearch;
