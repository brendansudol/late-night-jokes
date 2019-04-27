import React, { Component } from "react";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

import { paramsToUrl, urlToParams, API_BASE } from "../util";
import { Loading } from "../components/Loading";

class Random extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: null,
      isLoading: false
    };
  }

  componentDidMount() {
    // TODO
  }

  render() {
    return (
      <div className="app container mx-auto p2">
        <h1>Random Joke!</h1>
      </div>
    );
  }
}

export default Random;
