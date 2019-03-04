import React, { Component } from 'react'
import Card from './Card'


class Person extends Component {
  render(){
    return(
      <div className="person-container">

          User: {this.props.person.name}<br/>
          Age: {this.props.person.age}<br/>
          Interest: {this.props.person.interest}<br/>
          {/*}// Collection: {this.props.person.collection.map((card, index) => {
          //   return(
          //     <div>
          //       <Card />
          //     </div>
          //   )
          // })}*/}
        
        <br/>
      </div>
    )
  }
}

export default Person;
