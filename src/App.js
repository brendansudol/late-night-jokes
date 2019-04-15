import React, { Component } from 'react'

const API_BASE = 'https://late-night-jokes-api.herokuapp.com/'

const HOSTS = [
  { id: '', display: 'All hosts' },
  { id: 'Conan', display: "Conan O'Brien" },
  { id: 'Ferguson', display: 'Craig Ferguson' },
  { id: 'Letterman', display: 'David Letterman' },
  { id: 'Corden', display: 'James Corden' },
  { id: 'Leno', display: 'Jay Leno' },
  { id: 'Fallon', display: 'Jimmy Fallon' },
  { id: 'Kimmel', display: 'Jimmy Kimmel' },
  { id: 'Meyers', display: 'Seth Meyers' },
  { id: 'Colbert', display: 'Stephen Colbert' },
]

const YEARS = [
  { id: '', display: 'All years' },
  { id: '2009', display: '2009' },
  { id: '2010', display: '2010' },
  { id: '2011', display: '2011' },
  { id: '2012', display: '2012' },
  { id: '2013', display: '2013' },
  { id: '2014', display: '2014' },
  { id: '2015', display: '2015' },
  { id: '2016', display: '2016' },
  { id: '2017', display: '2017' },
  { id: '2018', display: '2018' },
]

const objToUrlParams = obj =>
  Object.entries(obj)
    .filter(([_, val]) => val !== '')
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&')

const Skeleton = ({ className = '', width }) => (
  <div className={`skeleton-line ${className}`} style={{ width }} />
)

const Loading = ({ entries = 10 }) => (
  <div>
    <Skeleton className="mb2" width={70} />
    {[...Array(entries)].map((_, i) => (
      <div key={i} className="mb3 pl2 py2 result">
        <div className="mb2">
          <Skeleton className="mb1 h3" width="60%" />
          <Skeleton className="mb1 h3" width="80%" />
        </div>
        <Skeleton className="h5" width="30%" />
      </div>
    ))}
  </div>
)

const resultCtLine = n => `${n}${n === 100 ? '+' : ''} result${n !== 1 ? 's' : ''}`

class App extends Component {
  state = {
    jokes: null,
    query: '',
    host: '',
    year: '',
    isLoading: false,
  }

  handleChange = (e, cb) => {
    const { name, value } = e.target
    this.setState({ [name]: value }, cb)
  }

  handleSelectChange = e => {
    this.handleChange(e, this.fetchJokes)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.fetchJokes()
  }

  fetchJokes = async () => {
    this.setState({ jokes: [], isLoading: true })

    const { query, host, year } = this.state
    const params = objToUrlParams({ query, host, year })
    const url = `${API_BASE}?${params}`
    const response = await fetch(url)
    const data = await response.json()

    this.setState({ jokes: data.results, isLoading: false })
  }

  render() {
    const { host, jokes, query, year, isLoading } = this.state

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
              onChange={this.handleChange}
            />
            <button className="btn btn-primary rounded-right" type="submit">
              Go
            </button>
          </div>
          <div className="flex sm-col-5 mxn1 h5">
            <select
              className="select bg-white mx1 my0"
              name="host"
              value={host}
              onChange={this.handleSelectChange}
            >
              {HOSTS.map(host => (
                <option key={host.id} value={host.id}>
                  {host.display}
                </option>
              ))}
            </select>
            <select
              className="select bg-white mx1 my0"
              name="year"
              value={year}
              onChange={this.handleSelectChange}
            >
              {YEARS.map(year => (
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
              <h5 className="mb2">{resultCtLine(jokes.length)}</h5>
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
    )
  }
}

export default App
