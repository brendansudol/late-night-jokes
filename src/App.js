import React, { Component } from 'react'

const HOST_OPTIONS = ['--', 'conan', 'colbert']
const YEAR_OPTIONS = ['--', '2010', '2011']

class App extends Component {
  state = {
    jokes: [],
    query: '',
    host: '--',
    year: '--',
    isLoading: false,
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('https://late-night-jokes-api.herokuapp.com/')
    const data = await response.json()
    this.setState({ jokes: data.results, isLoading: false })
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const { host, jokes, query, isLoading } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="search" name="query" value={query} onChange={this.handleChange} />
          <select name="host" value={host} onChange={this.handleChange}>
            {HOST_OPTIONS.map((value, i) => (
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
