import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureCompo from './PureComponent'

export class ParentComponent extends PureComponent {
  constructor(props) {
    super(props)
  
    console.log('ParentComponent constructor')

    this.state = {
       firstName: 'John'
    }
  }

  render() {
    console.log('ParentComponent render')

    setTimeout(() => {
      this.setState({
        firstName: 'John'
      })
    },2000)

    return (
      <div>
        <div>ParentComponent</div>
        <PureCompo name={this.state.firstName}/>
      </div>      
    
    )
  }
}

export default ParentComponent