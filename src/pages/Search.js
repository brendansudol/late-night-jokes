import React, { Component } from "react";

import { Error } from "../components/Error";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Inputs } from "../components/Inputs";
import { Intro } from "../components/Intro";
import { Loading } from "../components/Loading";
import { NoResults } from "../components/NoResults";
import { Results } from "../components/Results";
import { paramsToUrl, urlToParams, getInitialValue, API_BASE } from "../util";

class Search extends Component {
  constructor(props) {
    super(props);

    const params = urlToParams(props.location.search);

    this.state = {
      jokes: null,
      isLoading: false,
      hasError: false,
      lastSearchedQuery: null,
      query: params.query || "",
      host: getInitialValue("host", params.host),
      year: getInitialValue("year", params.year),
      order: getInitialValue("order", params.order)
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
    const { location, history } = this.props;
    const { query, host, year, order } = this.state;

    const paramStr = paramsToUrl({ query, host, year, order });
    const newPath = `?${paramStr}`;

    if (paramStr.length > 0 && newPath !== location.search) {
      history.push(`?${paramStr}`);
    }
  };

  render() {
    const { query, host, year, jokes, isLoading, lastSearchedQuery } = this.state;

    return (
      <div className="app container mx-auto p2 sm-py3">
        <Header />
        <main className="app-content">
          <Inputs
            query={query}
            host={host}
            year={year}
            isLoading={isLoading}
            onSubmit={this.handleSubmit}
            onQueryChange={this.handleQueryChange}
            onSelectChange={this.handleSelectChange}
          />
          {lastSearchedQuery == null && <Intro onSuggestionClick={this.handleSuggestionClick} />}
          {jokes != null && this.renderContent()}
        </main>
        <Footer />
      </div>
    );
  }

  renderContent = () => {
    const { jokes, order, lastSearchedQuery, isLoading, hasError } = this.state;

    if (jokes.length === 0) {
      if (isLoading) return <Loading />;
      else if (hasError) return <Error />;
      else return <NoResults query={lastSearchedQuery} />;
    }

    return <Results jokes={jokes} order={order} onSelectChange={this.handleSelectChange} />;
  };
}

export default Search;
