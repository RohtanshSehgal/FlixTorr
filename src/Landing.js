import Expand from "./components/Expand";
import Row from "./components/Row";
import Tab from "./components/Tab";
import requests from "./requests";

function Landing() {
  return (
    <>
      <Expand />
      <Row
        title={requests.netflix.title}
        fetchUrl={requests.netflix.Link}
        heading={true}
      />
      <Row
        title={requests.movies.title}
        fetchUrl={requests.movies.Link}
        heading={true}
      />
      <Row
        title={requests.trending.title}
        fetchUrl={requests.trending.Link}
        heading={true}
      />

      <Tab start={3} end={10} />
    </>
  );
}

export default Landing;
