import React, { Component } from 'react'
import UpdateCardForm from './UpdateCardForm'


class Card extends Component {
  render(){
    return(
      <div className="card-container">
        <ul className="card">
          <li><img src={this.props.card.image} alt={this.props.card.player}/></li>
          <li>Player: {this.props.card.player}</li>
          <li>Team: {this.props.card.team}</li>
          <li>Position: {this.props.card.position}</li>
          <li>Batting Avg: {this.props.card.batting_avg}</li>
          <li>Owner: {this.props.card.owner.name}</li>
        </ul>
        <button className="card-update button" onClick={() => {

        }}>Update</button>
        <UpdateCardForm
          card={this.props.card}
          arrayIndex={this.props.arrayIndex}
          handleCardUpdate={this.props.handleCardUpdate}
        />
        <button className="card-delete button" onClick={() => {
          this.props.handleCardDelete(this.props.card.id, this.props.arrayIndex, this.props.currentArray)}}>Delete
        </button><br/><br/>
      </div>
    )
  }
}


export default Card;
