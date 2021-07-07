import React, { Component } from 'react'
import './new-task-form.css'

export default class NewTaskForm extends Component {

  // let dateOfCreate = new Date();
  state = {
    label: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: ''
    })
  }

  onChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  render () {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input className="new-todo"
                 onChange={this.onChange}
                 placeholder="What needs to be done?"
                 autoFocus
                 value={this.state.label}/>
          {/*<span>{dateOfCreate}</span>*/}
        </form>
      </header>
    )
  }

}