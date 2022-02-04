import React, { useRef, useEffect } from "react";
import Banner from "../components/Banner/Banner";
import Row from "../components/Row/Row";
import MoviesRoutes from "../services/Movies";
import useFetchAllDetails from "../hooks/useFetchAllDetails";
import TvRoutes from "../services/Tv";
import Tab from "../components/Tab/Tab";
import axios from "axios";
function Home() {
  const parentRef = useRef(null);
  const data = useFetchAllDetails({
    fetchUrl: MoviesRoutes.home.banner.path,
  });
  useEffect(() => {
    axios.get("https://torrvia.herokuapp.com/");
  }, []);

  return (
    <div>
      {Object.keys(data).length !== 0 ? (
        <Banner forwardedRef={parentRef} detail={data} />
      ) : (
        ""
      )}
      {/* Rows below with pages */}
      {/* 1 */}
      <Row
        title={MoviesRoutes.home.popular.title}
        fetchUrl={MoviesRoutes.home.popular.path + "1"}
        heading={true}
        forwardedRef={parentRef}
      />
      <Row
        title={MoviesRoutes.home.popular.title}
        fetchUrl={MoviesRoutes.home.popular.path + "2"}
        heading={false}
        forwardedRef={parentRef}
      />
      {/* 2 */}
      <Row
        title={TvRoutes.home.popular.title}
        fetchUrl={TvRoutes.home.popular.path + "1"}
        heading={true}
        forwardedRef={parentRef}
      />
      <Row
        title={TvRoutes.home.popular.title}
        fetchUrl={TvRoutes.home.popular.path + "2"}
        heading={false}
        forwardedRef={parentRef}
      />
      {/* 3 */}
      <Row
        title={MoviesRoutes.home.trendingtoday.title}
        fetchUrl={MoviesRoutes.home.trendingtoday.path + "1"}
        heading={true}
        forwardedRef={parentRef}
      />
      <Row
        title={MoviesRoutes.home.trendingtoday.title}
        fetchUrl={MoviesRoutes.home.trendingtoday.path + "2"}
        heading={false}
        forwardedRef={parentRef}
      />
      {/* 4 */}
      <Row
        title={TvRoutes.home.trendingtoday.title}
        fetchUrl={TvRoutes.home.trendingtoday.path + "1"}
        heading={true}
        forwardedRef={parentRef}
      />
      <Row
        title={TvRoutes.home.trendingtoday.title}
        fetchUrl={TvRoutes.home.trendingtoday.path + "2"}
        heading={false}
        forwardedRef={parentRef}
      />
      <Tab forwardedRef={parentRef} />
    </div>
  );
}

export default Home;
