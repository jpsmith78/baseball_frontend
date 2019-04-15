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
      formView: 'hide',
      owner_id: 0
    }
  }

  handleFormView = (view)=>{
    this.setState({formView: view})
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
      owner_id: event.target.value
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
      position: '',
      batting_avg: '',
      owner: ''
    })
  }

  render(){
    return(
      <div className="enter-card">
        <h3>Add A New Card</h3>
        <form onSubmit={this.handleCardSubmit}>
          <label>Player</label>
          <input
            type="text"
            onChange={this.handlePlayerChange}
            value={this.state.player}
          />
          <label>Team</label>
          <input
            type="text"
            onChange={this.handleTeamChange}
            value={this.state.team}
          />
          <label>Image</label>
          <input
            type="text"
            onChange={this.handleImageChange}
            value={this.state.image}
          />
          <label>Position</label>
          <input
            type="text"
            onChange={this.handlePositionChange}
            value={this.state.position}
          />
          <label>Batting Average</label>
          <input
            type="text"
            onChange={this.handleBattingAvgChange}
            value={this.state.batting_avg}
          />
          <label>Owner ID</label>
          <input
            type="number"
            onChange={this.handleOwnerChange}
            value={this.state.owner_id}
          />
          <br/>
          <input type="submit"/>
        </form>
      </div>

    )
  }
}

export default CardForm;
