import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import DisplayList from './components/DisplayList'
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
    fetch('https://baseballbackend.herokuapp.com/person')
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
    fetch('https://baseballbackend.herokuapp.com/person', {
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
    fetch('https://baseballbackend.herokuapp.com/card')
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
    fetch('https://baseballbackend.herokuapp.com/card', {
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

  handlePersonUpdate = (person, arrayIndex, currentArray) => {
    console.log(arrayIndex);

    fetch('https://baseballbackend.herokuapp.com/person/' + person.id, {
      body: JSON.stringify(person),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then((updatedPerson) => {
        return updatedPerson.json()
      })
      .then((jData) => {
        console.log(jData);

      })
      this.fetchCards()
  }

  handleCardUpdate = (card, arrayIndex, currentArray) => {
    console.log(arrayIndex);
    fetch('https://baseballbackend.herokuapp.com/card/' + card.id, {
      body: JSON.stringify(card),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then((updatedCard) => {
        return updatedCard.json()
      })
      .then((jData) => {
        console.log(jData);
      })
  }

  handleDelete = (elementId, arrayIndex, currentArray) => {
    fetch('https://baseballbackend.herokuapp.com/person/' + elementId, {
      method: 'DELETE'
    })
      .then((data) => {
        this.removeFromArray(currentArray, arrayIndex)
      })
        .catch((err) => {
          console.log(err);
        })
  }

  handleCardDelete = (elementId, arrayIndex, currentArray) => {
    fetch('https://baseballbackend.herokuapp.com/card/' + elementId, {
      method: 'DELETE'
    })
      .then((data) => {
        this.removeFromArray(currentArray, arrayIndex)
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

  removeFromArray = (array, arrayIndex) => {
    this.setState((prevState) => {
      prevState[array].splice(arrayIndex, 1)
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
          handleDelete={this.handleDelete}
          handleCardDelete={this.handleCardDelete}
          handleUpdate={this.handlePersonUpdate}
          handleCardUpdate={this.handleCardUpdate}
        />
        {this.state.currentView === 'people' ?
        <Form
          handleCreatePerson={this.handleCreatePerson}
        /> :
        <CardForm
          handleCreateCard={this.handleCreateCard}
        />
        }
      </div>
    );
  }
}

export default App;
