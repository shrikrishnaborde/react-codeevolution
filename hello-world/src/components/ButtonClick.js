import React, { Component } from 'react'

export default class ButtonClick extends Component {

  clickHandler = () => {
    console.log('Button clicked');
  }

  render() {
    return (
      <button onClick={this.clickHandler}>Click</button>
    )
  }
}
