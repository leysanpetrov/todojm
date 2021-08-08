import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {

  state = {
    label: '',
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };

  onChange = (ev) => {
    this.setState({
      label: ev.target.value,
    });
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            onChange={this.onChange}
            placeholder="What needs to be done?"
            // eslint-disable-next-line react/destructuring-assignment
            value={this.state.label}
          />
        </form>
      </header>
    );
  }
}
