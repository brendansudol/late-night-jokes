import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";

import "ace-css/css/ace.min.css";
import "./index.css";

import Random from "./pages/Random";
import Search from "./pages/Search";

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/random" component={Random} />
    </Switch>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
