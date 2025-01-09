import React, { Component, PureComponent } from 'react'

export class PureCompo extends PureComponent {
  constructor(props) {
    super(props)
  
    console.log('PureComponent constructor')
  }
  render() {
    console.log('PureComponent render')
    return (
      <div>PureComponent</div>
    )
  }
}

export default PureCompo;