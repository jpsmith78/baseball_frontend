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

  handleImageChange = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  handlePositionChange = (event) => {
    this.setState({
      position: event.target.value
    })
  }

  handleBattingAvgChange = (event) => {
    this.setState({
      batting_avg: event.target.value
    })
  }

  handleOwnerChange = (event) => {
    this.setState({
      owner: event.target.value
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
          <input
            type="text"
            placeholder="Image"
            onChange={this.handleImageChange}
            value={this.state.image}
          />
          <input
            type="text"
            placeholder="Position"
            onChange={this.handlePositionChange}
            value={this.state.position}
          />
          <input
            type="text"
            placeholder="Batting Average"
            onChange={this.handleBattingAvgChange}
            value={this.state.batting_avg}
          />
          <input
            type="number"
            placeholder="Owner ID"
            onChange={this.handleOwnerChange}
            value={this.state.owner}
          />
          <input type="submit"/>
        </form>
      </div>

    )
  }
}

export default CardForm;
