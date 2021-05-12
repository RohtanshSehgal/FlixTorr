import React from "react";
import Movies from "./components/Movies";
import Torrent from "./components/Torrent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchMovie from "./components/SearchMovie";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/FlixTorr" exact component={Movies} />
          <Route path="/torrents/:comp/:id/:title" exact component={Torrent} />
          <Route path="/movies/:query" exact component={SearchMovie} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
