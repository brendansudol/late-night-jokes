import React from "react";
import ReactDOM from "react-dom";

import "ace-css/css/ace.min.css";
import "./index.css";

import App from "./App";
import { urlToParams, getInitialValue } from "./util";

const { query, host, year, order } = urlToParams(window.location.hash);

ReactDOM.render(
  <App
    initialQuery={query || ""}
    initialHost={getInitialValue("host", host)}
    initialYear={getInitialValue("year", year)}
    initialOrder={getInitialValue("order", order)}
  />,
  document.getElementById("root")
);
