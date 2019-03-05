import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <h1>Baseball Card Collecting and Trading Forum!</h1>
        <nav>
          <span onClick={() => {this.props.handleView('people')}}>Users</span>
          <span onClick={() => {this.props.handleView('cards')}}>Cards</span>
        </nav>
      </div>
    )
  }
}

export default Header;
