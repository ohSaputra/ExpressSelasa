import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    result: null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>Employee names: </li>
          {
            this.state.result && this.state.result.map(item => (
              <li>{`${item.first_name} ${item.last_name}`}</li>
            ))
          }
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this._getEmployee()
  }

  _getEmployee = () => {
    const options = {
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuamF5IiwiaWF0IjoxNTI0NTc5MzgwLCJleHAiOjE1MjQ1ODI5ODB9.9XJZ2hdJ8VcjVN35ZhmK-kA3ZpLWDwKqMviMLK_eTfs'
      }
    }

    fetch('/api/employee', options)
      .then(res => res.json())
      .then(result => this.setState({ result }))
      .catch(e => console.log(e))
  }
}

export default App;
