import React, { Component } from 'react'
import UpdatePersonForm from './UpdatePersonForm'



class Person extends Component {
  render(){
    return(
      <div className="person-container">
        <ul className="person">
          <li>User ID:  {this.props.person.id}</li>
          <li>User Name:  {this.props.person.name}</li>
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

          <UpdatePersonForm
            person={this.props.person}
            arrayIndex={this.props.arrayIndex}
            handleUpdate={this.props.handleUpdate}
          />
          <button className="person-delete button" onClick={() => {
            this.props.handleDelete(this.props.person.id, this.props.arrayIndex, this.props.currentArray)
          }}>Delete</button><br/>
        </ul>
      </div>
    )
  }
}

export default Person;
