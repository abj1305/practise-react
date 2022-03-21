import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./components/App";
import Jokes from "./components/Jokes";
import "./index.css";
import MusicMaster from "./projects/music-master";

ReactDOM.render(
  <BrowserRouter history={createBrowserHistory()}>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route path="/jokes" element={<Jokes />}></Route>
      <Route path="/music-master" element={<MusicMaster />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
