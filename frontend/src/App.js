import React, { Component } from 'react'

import EmployeeList from './App/components/EmployeeList'
import logo from './logo.svg'
import './App.css'

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
          { this._renderEmployee() }
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
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbmRyYSIsImlhdCI6MTUyNTA5ODk4NiwiZXhwIjoxNTI1MTAyNTg2fQ.EiEiLMvmi3O5KKDy6phNIpi5BwygbBhGZCxNB98QHZw'
      }
    }

    fetch(' /api/employee', options)
      .then(res => res.json())
      .then(result => this.setState({ result }))
      .then(() => console.log('finish promise'))
      .catch(e => console.log(e))

    console.log('hello after fetch')
  }

  _renderEmployee = () => {
    const { result } = this.state
    if (result)
      return result.map(item => (
        <EmployeeList
          key = {item.emp_no}
          first = {item.first_name}
          last = {item.last_name}
        />
      ))
    else
      return
  }
}

export default App;
