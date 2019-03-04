import React, { Component } from 'react'
// import Person from './Person'

class Card extends Component {
  render(){
    return(
      <div>
        <img src={this.props.card.image} alt={this.props.card.player}/><br/>
        Player: {this.props.card.player}<br/>
        Team: {this.props.card.team}<br/>
        Position: {this.props.card.position}<br/>
        Batting Avg: {this.props.card.batting_avg}<br/>
        Owner: {this.props.card.owner.name}
      </div>
    )
  }
}


export default Card;
