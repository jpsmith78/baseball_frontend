import React, { Component } from 'react'


class CardForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      player: '',
      team: '',
      image: '',
      position: '',
      batting_avg: '',
      owner: 0
    }
  }

  handleCardSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateCard(this.state)
    this.clearCardForm()
  }

  clearCardForm = () => {
    this.setState({
      player: '',
      team: '',
      image: '',
      postion: '',
      batting_avg: '',
      owner: ''
    })
  }

  render(){
    return(


    )
  }
}

export default CardForm;
