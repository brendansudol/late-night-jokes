import React from "react";
import ReactDOM from "react-dom";

import "ace-css/css/ace.min.css";
import "./index.css";

import App from "./App";
import { urlToParams, HOSTS, YEARS } from "./util";

const { query, host, year } = urlToParams(window.location.hash);

ReactDOM.render(
  <App
    initialQuery={query || ""}
    initialHost={HOSTS.has(host) ? host : ""}
    initialYear={YEARS.has(year) ? year : ""}
  />,
  document.getElementById("root")
);
