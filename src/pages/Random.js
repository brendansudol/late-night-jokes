import React, { Component } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Error } from "../components/Error";
import { Footer } from "../components/Footer";
import { SkeletonLine } from "../components/SkeletonLine";
import { API_BASE } from "../util";

const sleep = ms => new Promise(r => setTimeout(r, ms));

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

const Result = ({ joke }) => (
  <div className="my3 pl2 py2 result">
    <div className="mb2 h3 sm-h2 measure">{joke.text}</div>
    <div>
      {joke.host}
      <span className="px1">/</span>
      {joke.date}
    </div>
  </div>
);

class Random extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idx: 0,
      jokes: [],
      isLoading: false,
      hasError: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ idx: 0, jokes: [], isLoading: true, hasError: false });
    try {
      await sleep(1000);
      const response = await fetch(`${API_BASE}/random`);
      const data = await response.json();
      this.setState({ jokes: data.results, isLoading: false });
    } catch (err) {
      console.log("Uh-oh! Something goofed up", err);
      this.setState({ isLoading: false, hasError: true });
    }
  };

  refresh = () => {
    const { idx, jokes } = this.state;
    if (idx + 1 === jokes.length) return this.fetchData();
    this.setState(prev => ({ idx: prev.idx + 1 }));
  };

  render() {
    const { jokes, isLoading, hasError } = this.state;

    return (
      <div className="app container-small mx-auto p2 sm-py3">
        <main className="app-content">
          <Link to="/">‹ Back to search</Link>
          <div className="mt1 sm-flex items-baseline justify-between">
            <h2 className="mt0 mb1 sm-mb0 h2 sm-h1">Late Night Comedy Library</h2>
            <button
              className="btn btn-primary btn-small flex items-center"
              onClick={this.refresh}
              disabled={isLoading || hasError || jokes == null}
            >
              <FiRefreshCw className="mr1" />
              <span>Random Joke</span>
            </button>
          </div>
          {jokes != null && this.renderContent()}
        </main>
        <Footer />
      </div>
    );
  }

  renderContent() {
    const { idx, jokes, isLoading, hasError } = this.state;

    if (isLoading) return <Loading />;
    if (hasError || jokes.length === 0 || jokes[idx] == null) return <Error />;
    return <Result joke={jokes[idx]} />;
  }
}

export default Random;
