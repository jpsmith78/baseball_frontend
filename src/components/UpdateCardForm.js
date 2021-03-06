import React, { Component } from 'react'


class UpdateCardForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.card.id,
      player: '',
      team: '',
      image: '',
      position: '',
      batting_avg: '',
      owner_id: this.props.card.owner.person_id,
      updateView: 'hide'
    }
  }

  handleUpdateView = (view)=>{
    this.setState({updateView: view})
  }

  updatePlayerChange = (event) => {
    this.setState({
      player: event.target.value
    })
  }

  updateTeamChange = (event) => {
    this.setState({
      team: event.target.value
    })
  }

  updateImageChange = (event) => {
    this.setState({
      image: event.target.value
    })
  }
  updatePositionChange = (event) => {
    this.setState({
      position: event.target.value
    })
  }
  updateBattingAvgChange = (event) => {
    this.setState({
      batting_avg: event.target.value
    })
  }
  updateOwnerChange = (event) => {
    this.setState({
      owner_id: event.target.value
    })
  }

  handleUpdateCardSubmit = (event) => {
    event.preventDefault()
    this.props.handleCardUpdate(this.state)
  }

  render(){
    return (
      <div className="update-card">

        {this.state.updateView === 'update' ?

        <form onSubmit={this.handleUpdateCardSubmit}>
          <label>Update Player Name</label>
          <input
            type="text"
            placeholder={this.props.card.player}
            onChange={this.updatePlayerChange}
            value={this.state.player}
          />
          <label>Update Player Team</label>
          <input
            type="text"
            placeholder={this.props.card.team}
            onChange={this.updateTeamChange}
            value={this.state.team}
          />
          <label>Update Player Image</label>
          <input
            type="text"
            placeholder={this.props.card.image}
            onChange={this.updateImageChange}
            value={this.state.image}
          />
          <label>Update Player Position</label>
          <input
            type="text"
            placeholder={this.props.card.position}
            onChange={this.updatePositionChange}
            value={this.state.position}
          />
          <label>Update Batting Average</label>
          <input
            type="text"
            placeholder={this.props.card.batting_avg}
            onChange={this.updateBattingAvgChange}
            value={this.state.batting_avg}
          />
          <label>Update Owner ID</label>
          <input
            type="number"
            onChange={this.updateOwnerChange}
            value={this.state.owner_id}
          />
          <br/>
          <input className="update button" type="submit" value="Update"/>
          <button className="hide button" onClick={()=>{this.handleUpdateView('hide')}}>hide</button>
        </form>

        : <button className="update button" onClick={()=>{this.handleUpdateView('update')}}>Update</button>
        }
      </div>
    )
  }
}

export default UpdateCardForm;
