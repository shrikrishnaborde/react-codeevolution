import React, { Component } from 'react'
import FRInput from './FRInput';

export class FRInputParentRef extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus</button>
      </>
    )
  }
}

export default FRInputParentRef