import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: 'persons', //other page is cards
      persons: [],
      cards: []
    }
  }

  //fetching API data
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

  componentDidMount() {
    this.fetchPersons()
  }


  render() {
    return (
      <div className="main-page">

      </div>
    );
  }
}

export default App;
