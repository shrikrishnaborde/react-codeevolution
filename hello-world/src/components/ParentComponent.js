import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureCompo from './PureComponent'
import MemoComponent from './MemoComponent'

export class ParentComponent extends Component {
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
        {/*<RegularComponent name={this.state.firstName}/>*/}
        {/*<PureCompo name={this.state.firstName}/>*/}
        <MemoComponent name={this.state.firstName}/>
      </div>      
    
    )
  }
}

export default ParentComponent