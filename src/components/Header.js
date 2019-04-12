import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <div className="title">
          <h1>Baseball Card Collecting and Trading Forum!</h1>
          <nav>
            <button onClick={() => {this.props.handleView('people')}}>Users</button>
            <button onClick={() => {this.props.handleView('cards')}}>Cards</button>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header;
