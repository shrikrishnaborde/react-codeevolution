import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName: '',
       comments: '',
       skills: 'react'
    }
  }

  handleUserNameChange = (event) => { 
    this.setState({
      userName: event.target.value
    })
  }

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  handleSkillsChange = (event) => { 
    this.setState({
      skills: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(`Hello ${this.state.userName} ${this.state.comments} ${this.state.skills}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
        <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        <select value="this.state.skills" onChange={this.handleSkillsChange}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form