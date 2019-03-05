import React, { Component } from 'react'


class UpdatePersonForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.person.id,
      name: '',
      age: '',
      interest: ''
    }
  }

  updateNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  updateAgeChange = (event) => {
    this.setState({
      age: event.target.value
    })
  }

  updateInterestChange = (event) => {
    this.setState({
      interest: event.target.value
    })
  }

  handleUpdateSubmit = (event) => {
    event.preventDefault()
    this.props.handleUpdate(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleUpdateSubmit}>
          <input
            type="text"
            placeholder={this.props.person.name}
            onChange={this.updateNameChange}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder={this.props.person.age}
            onChange={this.updateAgeChange}
            value={this.state.age}
          />
          <input
            type="text"
            placeholder={this.props.person.interest}
            onChange={this.updateInterestChange}
            value={this.state.interest}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default UpdatePersonForm;
