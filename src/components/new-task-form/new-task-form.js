import React, {Component} from "react";
import "./new-task-form.css"

export default class NewTaskForm extends Component {
  maxId = 100;
  // let dateOfCreate = new Date();
  state = {
   label: ""
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      className: null,
      id: this.maxId++,
    }

    this.setState(({ todoData }) => {
      console.log({ todoData })
      const newArr = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArr
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.label);
    this.setState({
      label: ""
    })
  }

  onChange = (e) => {
  this.setState({
    label: e.target.value
  })
  }

  render() {

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