import React, { Component } from 'react'
// import Card from './Card'


class Person extends Component {
  render(){
    return(
      <div className="person-container">
        <ul>
          <li>User: {this.props.person.name}</li>
          <li>Age: {this.props.person.age}</li>
          <li>Interest: {this.props.person.interest}</li>
          <li>Collection:
            { this.props.person.collection ?
                this.props.person.collection.map((player, index)=>{
                  return(
                    <ul key={index}>
                      <li >{player.player}</li>
                      <li >{player.team}</li>
                      <li ><img src={player.image} alt={player.player} /></li>
                      <li >{player.position}</li>
                      <li > {player.batting_avg}</li>
                      <br />
                    </ul>
                  )
                }) : "" }
          </li>
        </ul>
      </div>
    )
  }
}

export default Person;
