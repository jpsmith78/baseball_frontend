import React, { Component } from 'react'
import Person from './Person'
import Card from './Card'

class DisplayList extends Component {
  render(){
    return(
      <div>
        {this.props.currentView === 'people' ?
          <div className="display-container">
            {this.props.persons.map((person, index) => {
              return (
                <Person
                  key={index}
                  person={person}
                  arrayIndex={index}
                  handleDelete={this.props.handleDelete}
                  handleUpdate={this.props.handleUpdate}
                  currentArray='persons'
                />
              )
            })}
          </div> :
          <div className="display-container">
            {this.props.cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  card={card}
                  arrayIndex={index}
                  handleCardDelete={this.props.handleCardDelete}
                  handleCardUpdate={this.props.handleCardUpdate}
                  currentArray='cards'
                />
              )
            })}
          </div>
        }
      </div>
    )
  }
}

export default DisplayList;
