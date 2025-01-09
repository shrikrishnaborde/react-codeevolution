import React, { Component, createRef } from 'react'
import Input from './Input'

export class FocusInput extends Component {
  constructor(props) {
    super(props)
  
    this.componentRef = React.createRef()
  }

  clickHandler = () => {
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus</button>
      </>
    )
  }
}

export default FocusInput