import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: 'people', //other page is cards
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
      })
      .catch((err) => {
        console.log(err);
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
      })
      .catch((err) => {
        console.log(err);
      })
  }

  setPersonData = (person) => {
    this.setState({
      persons: person
    })
  }

  setCardData = (card) => {
    this.setState({
      cards: card
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
        <Header />
        <Form handleCreatePerson={this.handleCreatePerson}/>
      </div>
    );
  }
}

export default App;
