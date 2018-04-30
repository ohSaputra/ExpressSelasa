import React from 'react'

class EmployeeList extends React.Component {
  render () {
    return (
      <li>{`${this.props.first} ${this.props.last}`}</li>
    )
  }
}
export default EmployeeList