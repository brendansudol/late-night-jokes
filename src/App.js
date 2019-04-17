import React, { Component } from "react";

import { Loading } from "./Loading";
import {
  paramsToUrl,
  API_BASE,
  API_RESULTS_LIMIT,
  HOST_OPTIONS,
  YEAR_OPTIONS
} from "./util";

const resultSentence = n =>
  `${n}${n === API_RESULTS_LIMIT ? "+" : ""} result${n !== 1 ? "s" : ""}`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: null,
      isLoading: false,
      query: props.initialQuery,
      host: props.initialHost,
      year: props.initialYear
    };
  }

  componentDidMount() {
    this.updateUrl();
    this.fetchJokes();
  }

  handleQueryChange = e => {
    const query = e.target.value;
    this.setState({ query }, this.updateUrl);
  };

  handleSelectChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.updateUrl();
      this.fetchJokes();
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchJokes();
  };

  fetchJokes = async () => {
    const { query, host, year } = this.state;
    if (!query) return;

    this.setState({ jokes: [], isLoading: true });

    const params = paramsToUrl({ query, host, year });
    const response = await fetch(`${API_BASE}?${params}`);
    const data = await response.json();

    this.setState({ jokes: data.results, isLoading: false });
  };

  updateUrl = () => {
    const { query, host, year } = this.state;
    window.location.hash = paramsToUrl({ query, host, year });
  };

  render() {
    const { host, jokes, query, year, isLoading } = this.state;

    return (
      <div className="container mx-auto p2">
        <div className="mb2">
          <h1 className="m0 h2 sm-h1">Late Night Joke Library</h1>
          <p className="h4 sm-h3">Explore 10+ years of monologue jokes</p>
        </div>
        <form
          className="mb2 p2 sm-p3 bg-light rounded sm-flex justify-between"
          onSubmit={this.handleSubmit}
        >
          <div className="flex sm-col-6 mb2 sm-m0">
            <input
              className="input m0 rounded-left"
              type="search"
              name="query"
              placeholder="Search..."
              value={query}
              onChange={this.handleQueryChange}
            />
            <button
              className="btn btn-primary rounded-right"
              type="submit"
              disabled={isLoading || !query}
            >
              Go
            </button>
          </div>
          <div className="flex sm-col-5 mxn1 h5">
            <select
              className="select bg-white mx1 my0 col-7"
              name="host"
              value={host}
              onChange={this.handleSelectChange}
            >
              {HOST_OPTIONS.map(host => (
                <option key={host.id} value={host.id}>
                  {host.display}
                </option>
              ))}
            </select>
            <select
              className="select bg-white mx1 my0 col-5"
              name="year"
              value={year}
              onChange={this.handleSelectChange}
            >
              {YEAR_OPTIONS.map(year => (
                <option key={year.id} value={year.id}>
                  {year.display}
                </option>
              ))}
            </select>
          </div>
        </form>
        {jokes != null &&
          (jokes.length === 0 ? (
            isLoading ? (
              <Loading />
            ) : (
              <p>No jokes :(</p>
            )
          ) : (
            <div>
              <h5 className="mb2">{resultSentence(jokes.length)}</h5>
              {jokes.map(joke => (
                <div key={joke.id} className="mb3 pl2 py2 result">
                  <div className="mb2">{joke.text}</div>
                  <div className="h5">
                    {joke.host}
                    <span className="px1">/</span>
                    {joke.date}
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    );
  }
}

export default App;
