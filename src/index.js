import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tv from "./views/Tv";
import Movie from "./views/Movie";
import Results from "./views/Results";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/tv/:id" exact element={<Tv />} />
        <Route path="/movie/:id" exact element={<Movie />} />
        <Route path="/results/:query" exact element={<Results />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
