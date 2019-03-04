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

  handlePlayerChange = (event) => {
    this.setState({
      player: event.target.value
    })
  }

  handleTeamChange = (event) => {
    this.setState({
      team: event.target.value
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
        {this.props.currentView === 'people' ?
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
          </form> :

          <form onSubmit={this.handleCardSubmit}>
            <input
              type="text"
              placeholder="Player"
              onChange={this.handlePlayerChange}
              value={this.state.player}
            />
            <input
              type="text"
              placeholder="Team"
              onChange={this.handleTeamChange}
              value={this.state.team}
            />
            <input type="submit"/>
          </form>
        }
      </div>
    )
  }
}

export default Form;
