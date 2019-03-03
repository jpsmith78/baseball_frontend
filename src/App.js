import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: 'persons', //other page is cards
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

  componentDidMount() {
    this.fetchPersons()
    this.fetchCards()
  }


  render() {
    return (
      <div className="main-page">
        <Header />
      </div>
    );
  }
}

export default App;
