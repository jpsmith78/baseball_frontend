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
      <div className="update-person">
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
          <select
            onChange={this.updateInterestChange}
            value={this.state.interest}>
            <option value="">Select Interest</option>
            <option value="Collector">Collector</option>
            <option value="Investor">Investor</option>
            <option value="Trader">Trader</option>
          </select>
          <br />
          <input type="submit" value="Update"/>
        </form>
      </div>
    )
  }
}

export default UpdatePersonForm;
