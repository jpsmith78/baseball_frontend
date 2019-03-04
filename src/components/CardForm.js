import React, { Component } from 'react'


class CardForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      player: '',
      team: '',
      image: '',
      position: '',
      batting_avg: '',
      owner: 0
    }
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

  handleCardSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateCard(this.state)
    this.clearCardForm()
  }

  clearCardForm = () => {
    this.setState({
      player: '',
      team: '',
      image: '',
      postion: '',
      batting_avg: '',
      owner: ''
    })
  }

  render(){
    return(
      <div>
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
      </div>

    )
  }
}

export default CardForm;
