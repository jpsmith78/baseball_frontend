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
      <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="New User"
              onChange={this.handleNewNameChange}
              value={this.state.name}
            />
            <input
              type="text"
              placeholder="Age"
              onChange={this.handleAgeChange}
              value={this.state.age}
            />
            <input
              type="text"
              placeholder="Trader/Collector/Investor"
              onChange={this.handleInterestChange}
              value={this.state.interest}
            />
            <input type="submit"/>
          </form>
      </div>
    )
  }
}

export default Form;
