import React, { Component } from 'react'

export class RegularComponent extends Component {
  constructor(props) {
    super(props)
  
    console.log('RegularComponent constructor')
  }
  render() {
    console.log('RegularComponent render')

    return (
      <div>RegularComponent</div>
    )
  }
}

export default RegularComponent