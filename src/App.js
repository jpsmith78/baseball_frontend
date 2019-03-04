import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import DisplayList from './components/DisplayList'
import Person from './components/Person'
import Card from './components/Card'
import CardForm from './components/CardForm'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: 'people',
      persons: [],
      cards: []
    }
  }

  //fetching person data
  fetchPersons = () => {
    fetch('http://localhost:3000/person')
      .then((data) => {
        return data.json()
      })
      .then((jData) => {
        console.log(jData);
        this.sortPersonData(jData)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  sortPersonData = (persons) => {
    let personData = []
    persons.forEach((person) => {
      personData.push(person)
    })
    this.setPersons(personData)
  }

  setPersons = (person) => {
    this.setState({
      persons: person
    })
  }

  handleCreatePerson = (person) => {
    fetch('http://localhost:3000/person', {
      body: JSON.stringify(person),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then((createdPerson) => {
        return createdPerson.json()
      })
      .then((jData) => {
        this.updateArray(jData, 'persons')
        this.handleView('people')
      })
      .catch((err) => {
          console.log(err);
      })
  }

//fetching card data
  fetchCards = () => {
    fetch('http://localhost:3000/card')
      .then((data) => {
        return data.json()
      })
      .then((jData) => {
        console.log(jData);
        this.sortCardsData(jData)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  sortCardsData = (cards) => {
    let cardData = []
    cards.forEach((card) => {
      cardData.push(card)
    })
    this.setCards(cardData)
  }

  setCards = (card) => {
    this.setState({
      cards: card
    })
  }

  handleCreateCard = (card) => {
    fetch('http://localhost:3000/card', {
      body: JSON.stringify(card),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then((createdCard) => {
        return createdCard.json()
      })
      .then((jData) => {
        this.updateArray(jData, 'cards')
        this.handleView('cards')
      })
      .catch((err) => {
          console.log(err);
      })
  }

  handleView = (view) => {
    this.setState({
      currentView: view
    })
  }

  updateArray = (person, array) => {
    this.setState((prevState) => {
      prevState[array].push(person)
      return {
        [array]: prevState[array]
      }
    })
  }

  componentDidMount() {
    this.fetchPersons()
    this.fetchCards()
  }


  render() {
    return (
      <div className="main-page">
        <Header handleView={this.handleView}/>
        <DisplayList
          currentView={this.state.currentView}
          persons={this.state.persons}
          cards={this.state.cards}
        />
        <Form
          handleCreatePerson={this.handleCreatePerson}
        />
        <CardForm
          handleCreateCard={this.handleCreateCard}
        />
      </div>
    );
  }
}

export default App;
