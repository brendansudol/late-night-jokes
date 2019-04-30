import React, { Component } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { Link } from "react-router-dom";

import { API_BASE } from "../util";
import { Footer } from "../components/Footer";
import { SkeletonLine } from "../components/SkeletonLine";

const Loading = () => (
  <div className="my3 pl2 py2 result result-loading">
    <div className="mb3">
      <SkeletonLine className="mb1 h2" width="80%" />
      <SkeletonLine className="mb1 h2" width="90%" />
      <SkeletonLine className="mb1 h2" width="70%" />
    </div>
    <div className="flex">
      <SkeletonLine className="h3 mr2" width={80} />
      <SkeletonLine className="h3" width={80} />
    </div>
  </div>
);

class Random extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idx: 0,
      jokes: null,
      isLoading: false,
      hasError: false
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true, hasError: false });
    try {
      const response = await fetch(`${API_BASE}?query=trump`);
      const data = await response.json();
      this.setState({ jokes: data.results, isLoading: false });
    } catch (err) {
      console.log("Uh-oh! Something goofed up", err);
      this.setState({ isLoading: false, hasError: true });
    }
  }

  refresh = () => {
    this.setState(prev => ({ idx: prev.idx + 1 }));
  };

  render() {
    const { idx, jokes } = this.state;

    return (
      <div className="app container mx-auto p2">
        <main className="app-content">
          <Link to="/">‹ Back to search</Link>
          <h2 className="mt1 h3 sm-h2">
            Late Night Comedy Library <small className="regular">Random Joke</small>
          </h2>
          <Loading />
          <button className="btn btn-primary flex items-center" onClick={this.refresh}>
            <FiRefreshCw className="mr1" />
            <span>Next</span>
          </button>
        </main>
        <Footer />
      </div>
    );

    if (jokes == null) return null;

    const joke = jokes[idx];

    return (
      <div className="container mx-auto p2">
        <h1>{JSON.stringify(joke)}</h1>
        <button className="btn btn-primary" onClick={this.refresh}>
          Refresh
        </button>
      </div>
    );
  }
}

export default Random;
