import React, { Component } from 'react'
import Card from './Card'


class Person extends Component {
  render(){
    return(
      <div className="person-container">
        <ul>
          <li>User: {this.props.person.name}</li>
          <li>Age: {this.props.person.age}</li>
          <li>Interest: {this.props.person.interest}</li>
          <li>Collection:

                {this.props.person.collection.map((i)=>{
                  return(
                    <ul>
                      <li>{i.player}</li>
                      <li>{i.team}</li>
                      <li><img src={i.image} alt={i.player} /></li>
                      <li>{i.position}</li>
                      <li>{i.batting_avg}</li>
                      <br />
                    </ul>

                  )
                })}



          </li>
        </ul>
      </div>
    )
  }
}

export default Person;
