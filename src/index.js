import React from "react";
import ReactDOM from "react-dom";

import "ace-css/css/ace.min.css";
import "./index.css";

import App from "./App";
import { urlToParams } from "./util";

// TODO: check whether initial values are valid
const initialValues = urlToParams(window.location.hash);

ReactDOM.render(
  <App initialValues={initialValues} />,
  document.getElementById("root")
);
