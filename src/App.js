import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Routers from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">index</Link>
          <Link to="/list">list</Link>
        </nav>
        <Routers/>
      </div>
    )
  }
}

export default App
