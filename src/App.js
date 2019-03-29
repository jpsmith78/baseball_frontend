import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import DisplayList from './components/DisplayList'
import CardForm from './components/CardForm'

// ==================================================
// <<<<<<<<<<<<<<<<<CLASS>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ==================================================

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: 'people',
      persons: [],
      cards: []
    }
  }


  // ==================================================
  // <<<<<<<<<<<<<HANDLE VIEW>>>>>>>>>>>>>>>>>>
  // ==================================================
  handleView = (view) => {
    this.setState({
      currentView: view
    })
  }



  // ==================================================
  // <<<<<<<<<<<<<PERSON>>>>>>>>>>>>>>>>>>>>>
  // ==================================================
  // ==================================================
  // <<<<<<<<FETCH PERSON FUNCTION>>>>>>>>>>>>>>>>>>
  // ==================================================
  fetchPersons = () => {
    fetch('https://bballbackend.herokuapp.com/person')
      .then((data) => data.json())
      .then((jData) => {
        this.setPersons(jData)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // ==================================================
  // <<<<<<<<SET PERSON FUNCTION>>>>>>>>>>>>>>>>>>
  // ==================================================

  setPersons = (person) => {
    this.setState({
      persons: person
    })
  }

  // ==================================================
  // <<<<<<<<CREATE PERSON FUNCTION>>>>>>>>>>>>>>>>>>
  // ==================================================
  handleCreatePerson = (person) => {
    fetch('https://bballbackend.herokuapp.com/person', {
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

  // ==================================================
  // <<<<<<<<UPDATE ARRAY (PERSON)>>>>>>>>>>>>>>>>>>
  // ==================================================
  updateArray = (person, array) => {
    this.setState((prevState) => {
      prevState[array].push(person)
      return {
        [array]: prevState[array]
      }
    })
  }
  // ==================================================
  // <<<<<<<<UPDATE PERSON FUNCTION>>>>>>>>>>>>>>>>>>
  // ==================================================
  handlePersonUpdate = (person, arrayIndex, currentArray) => {
    console.log(arrayIndex);

    fetch('https://bballbackend.herokuapp.com/person/' + person.id, {
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
        this.fetchPersons()
      })
      .catch(err => console.log(err))
  }



  // ==================================================
  // <<<<<<<<DELETE PERSON FUNCTION>>>>>>>>>>>>>>>>>>
  // ==================================================
  handleDelete = (elementId, arrayIndex, currentArray) => {
    fetch('https://bballbackend.herokuapp.com/person/' + elementId, {
      method: 'DELETE'
    })
      .then((data) => {
        this.removeFromArray(currentArray, arrayIndex)
      })
        .catch((err) => {
          console.log(err);
        })
  }



  // ==================================================
  // <<<<<<<<<<<<<CARD>>>>>>>>>>>>>>>>>>>>
  // ==================================================
  // ==================================================
  // <<<<<<<<FETCH CARD FUNCTION>>>>>>>>>>>>>>>>>>
  // ==================================================

  fetchCards = () => {
    fetch('https://bballbackend.herokuapp.com/card')
      .then((data) => {
        return data.json()
      })
      .then((jData) => {
        console.log(jData);
        this.setCards(jData)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  // ==================================================
  // <<<<<<<<SET CARD FUNCTION>>>>>>>>>>>>>>>>>>
  // ==================================================

  setCards = (card) => {
    this.setState({
      cards: card
    })
  }

  // ==================================================
  // <<<<<<<<CREATE CARD FUNCTION>>>>>>>>>>>>>>>>>>
  // ==================================================
  handleCreateCard = (card) => {
    fetch('https://bballbackend.herokuapp.com/card', {
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
        this.fetchCards()
        this.handleView('cards')
      })
      .catch((err) => {
          console.log(err);
      })
  }


  // ==================================================
  // <<<<<<<<UPDATE CARD FUNCTION>>>>>>>>>>>>>>>>>>
  // ==================================================
  handleCardUpdate = (card, arrayIndex, currentArray) => {
    console.log(card);
    fetch('https://bballbackend.herokuapp.com/card/' + card.id, {
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
        this.fetchCards()
        this.handleView('cards')
      })
  }


  // ==================================================
  // <<<<<<<<DELETE CARD FUNCTION>>>>>>>>>>>>>>>>>>
  // ==================================================
  handleCardDelete = (elementId, arrayIndex, currentArray) => {
    fetch('https://bballbackend.herokuapp.com/card/' + elementId, {
      method: 'DELETE'
    })
      .then((data) => {
        this.removeFromArray(currentArray, arrayIndex)
      })
        .catch((err) => {
          console.log(err);
        })
  }




  // ==================================================
  // <<<<<<<REMOVE FROM ARRAY (BOTH)>>>>>>>>>>>>>>>>>
  // ==================================================
  removeFromArray = (array, arrayIndex) => {
    this.setState((prevState) => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  // ==================================================
  // <<<<<<<<DID MOUNT>>>>>>>>>>>>>>>>>>
  // ==================================================
  componentDidMount() {
    this.fetchPersons()
    this.fetchCards()
  }


  // ==================================================
  // <<<<<<<<RENDER>>>>>>>>>>>>>>>>>>
  // ==================================================
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
