import React, { Component } from 'react'
import UpdateCardForm from './UpdateCardForm'


class Card extends Component {
  render(){
    return(
      <div>
        <img src={this.props.card.image} alt={this.props.card.player}/><br/>
        Player: {this.props.card.player}<br/>
        Team: {this.props.card.team}<br/>
        Position: {this.props.card.position}<br/>
        Batting Avg: {this.props.card.batting_avg}<br/>
        Owner: {this.props.card.owner.name}<br/>
        <button onClick={() => {

        }}>Update</button>
        <UpdateCardForm
          card={this.props.card}
          arrayIndex={this.props.arrayIndex}
          handleCardUpdate={this.props.handleCardUpdate}
        />
        <button onClick={() => {
          this.props.handleCardDelete(this.props.card.id, this.props.arrayIndex, this.props.currentArray)}}>Delete
        </button><br/><br/>
      </div>
    )
  }
}


export default Card;
