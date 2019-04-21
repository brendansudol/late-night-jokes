import React, { Component } from "react";
import { FiFacebook, FiTwitter } from "react-icons/fi";

import { Loading } from "./Loading";
import {
  paramsToUrl,
  API_BASE,
  API_RESULTS_LIMIT,
  HOST_OPTIONS,
  ORDER_OPTIONS,
  SUGGESTED_QUERIES,
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
      hasError: false,
      lastSearchedQuery: null,
      query: props.initialQuery,
      host: props.initialHost,
      year: props.initialYear,
      order: props.initialOrder
    };
  }

  componentDidMount() {
    this.fetchJokes();
  }

  handleQueryChange = e => {
    const query = e.target.value;
    this.setState({ query });
  };

  handleSelectChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.fetchJokes);
  };

  handleSuggestionClick = query => e => {
    e.preventDefault();
    this.setState({ query }, this.fetchJokes);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchJokes();
  };

  fetchJokes = async () => {
    this.updateUrl();

    const { query, host, year, order } = this.state;
    if (!query) return;

    this.setState({
      jokes: [],
      isLoading: true,
      hasError: false,
      lastSearchedQuery: query
    });

    try {
      const urlParams = paramsToUrl({ query, host, year, order });
      const response = await fetch(`${API_BASE}?${urlParams}`);
      const data = await response.json();
      this.setState({ jokes: data.results, isLoading: false });
    } catch (err) {
      console.log("Uh-oh! Something goofed up", err);
      this.setState({ isLoading: false, hasError: true });
    }
  };

  updateUrl = () => {
    const { query, host, year, order } = this.state;
    window.location.hash = paramsToUrl({ query, host, year, order });
  };

  render() {
    const {
      query,
      host,
      year,
      order,
      jokes,
      isLoading,
      hasError,
      lastSearchedQuery
    } = this.state;

    return (
      <div className="app container mx-auto p2">
        <header className="mb2 flex">
          <div className="flex-auto">
            <h1 className="m0 h2 sm-h1">
              <a href="/" className="text-decoration-none">
                Late Night Joke Library
              </a>
            </h1>
            <p className="m0 h4 sm-h3 line-height-1">
              Explore 10+ years of monologue jokes
            </p>
          </div>
          <div className="flex flex-column justify-end right-align xs-hide">
            <div className="line-height-1">
              <a href="#!">
                <FiTwitter className="ml1" />
              </a>
              <a href="#!">
                <FiFacebook className="ml1" />
              </a>
            </div>
            <div className="h6">
              <a href="mailto:brendansudol@gmail.com?Subject=Late%20Night%20Joke%20Library">
                Send feedback
              </a>
            </div>
          </div>
        </header>
        <main className="app-content">
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
                required={true}
              />
              <button
                className="btn btn-primary rounded-right"
                type="submit"
                disabled={isLoading}
              >
                Go
              </button>
            </div>
            <div className="flex sm-col-5 mxn1 h5">
              <select
                className="select mx1 my0 col-7"
                name="host"
                value={host}
                onChange={this.handleSelectChange}
              >
                {HOST_OPTIONS.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.display}
                  </option>
                ))}
              </select>
              <select
                className="select mx1 my0 col-5"
                name="year"
                value={year}
                onChange={this.handleSelectChange}
              >
                {YEAR_OPTIONS.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.display}
                  </option>
                ))}
              </select>
            </div>
          </form>
          {lastSearchedQuery == null && (
            <div className="py1">
              <span className="mr1">A few suggestions to get you started:</span>
              {SUGGESTED_QUERIES.map(suggestion => (
                <a
                  key={suggestion}
                  className="mr1 bold"
                  href="#!"
                  onClick={this.handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </a>
              ))}
            </div>
          )}
          {jokes != null &&
            (jokes.length === 0 ? (
              isLoading ? (
                <Loading />
              ) : hasError ? (
                <p className="my3 p2 h3 center rounded bg-red white">
                  <strong>Uh-oh!</strong> Something went wrong. Please try again
                  in a few moments.
                </p>
              ) : (
                <p className="my3 p2 h3 center rounded no-results">
                  <strong>Sorry!</strong> We couldn't find any results for{" "}
                  <em>{lastSearchedQuery}</em>.
                </p>
              )
            ) : (
              <div>
                <div className="mb2 flex items-center justify-between">
                  <h5 className="m0">{resultSentence(jokes.length)}</h5>
                  <div className="flex items-center justify-center">
                    <h5 className="m0 pr1 flex-none">Sort by:</h5>
                    <select
                      className="m0 select select-skinny h5"
                      name="order"
                      value={order}
                      onChange={this.handleSelectChange}
                    >
                      {ORDER_OPTIONS.map(option => (
                        <option key={option.id} value={option.id}>
                          {option.display}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
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
        </main>
        <footer className="mt3 pt2 h5 border-top border-light">
          <a href="https://brendansudol.com" className="mr2">
            Made by @brensudol
          </a>
          <a
            href="https://github.com/brendansudol/late-night-jokes"
            className="mr2"
          >
            Code on GitHub
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
