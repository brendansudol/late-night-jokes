import React, { Component } from 'react'

const API_BASE = 'https://late-night-jokes-api.herokuapp.com/'
const HOST_OPTIONS = ['', 'conan', 'colbert']
const YEAR_OPTIONS = ['', '2010', '2011']

const objToUrlParams = obj =>
  Object.entries(obj)
    .filter(([_, val]) => val !== '')
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&')

class App extends Component {
  state = {
    jokes: [],
    query: '',
    host: '',
    year: '',
    isLoading: false,
  }

  componentDidMount() {
    this.fetchJokes()
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { query, host, year } = this.state
    const params = objToUrlParams({ query, host, year })
    const url = `${API_BASE}?${params}`
    this.fetchJokes(url)
  }

  fetchJokes = async (url = API_BASE) => {
    this.setState({ isLoading: true })
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ jokes: data.results, isLoading: false })
  }

  render() {
    const { host, jokes, query, year, isLoading } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="search" name="query" value={query} onChange={this.handleChange} />
          <select name="host" value={host} onChange={this.handleChange}>
            {HOST_OPTIONS.map((value, i) => (
              <option key={i}>{value}</option>
            ))}
          </select>
          <select name="year" value={year} onChange={this.handleChange}>
            {YEAR_OPTIONS.map((value, i) => (
              <option key={i}>{value}</option>
            ))}
          </select>
          <button type="submit">submit</button>
        </form>
        {jokes.length === 0 ? (
          <p>{isLoading ? 'Loading...' : 'No jokes :('}</p>
        ) : (
          <div style={{ opacity: isLoading ? 0.5 : 1 }}>
            {jokes.map(joke => (
              <p key={joke.id}>{joke.text}</p>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default App
