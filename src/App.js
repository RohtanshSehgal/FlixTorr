import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Movies from "./components/Movies";
import Torrent from "./components/Torrent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchMovie from "./components/SearchMovie";
import Nav from "./components/nav";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-BQCF60S5JC");
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/FlixTorr" exact component={Movies} />
          <Route
            path="/FlixTorr/torrents/:comp/:id/:title"
            exact
            component={Torrent}
          />
          <Route path="/FlixTorr/movies/:query" exact component={SearchMovie} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
