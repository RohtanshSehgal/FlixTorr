import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Landing from "./Landing";
import Nav from "./components/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Results from "./components/Results";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/torrent/:id/:type/:title" exact component={Banner} />
        <Route path="/results/:query" exact component={Results} />
      </Switch>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
