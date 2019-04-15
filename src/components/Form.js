import React, { Component } from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: '',
      interest: ''
    }
  }

  handleNewNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value
    })
  }

  handleInterestChange = (event) => {
    this.setState({
      interest: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreatePerson(this.state)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      name: '',
      age: '',
      interest: ''
    })
  }

  render(){
    return(
      <div className="enter-person">
      <h3>Add A New User</h3>
          <form onSubmit={this.handleSubmit}>
            <label>User Name</label>
            <input
              type="text"
              onChange={this.handleNewNameChange}
              value={this.state.name}
            />
            <label>User Age</label>
            <input
              type="text"
              onChange={this.handleAgeChange}
              value={this.state.age}
            />
            <label>User Interest</label>
            <select
              onChange={this.handleInterestChange}
              value={this.state.interest}>
              <option value="">Select Interest</option>
              <option value="Collector">Collector</option>
              <option value="Investor">Investor</option>
              <option value="Trader">Trader</option>
            </select><br/>
            <input type="submit"/>
          </form>
      </div>
    )
  }
}

export default Form;
