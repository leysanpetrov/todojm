import React, { Component } from 'react';
import './new-task-form.css';
// import PropTypes from 'prop-types'
// import Task from '../task/task'
// import Footer from '../footer/footer'

export default class NewTaskForm extends Component {

  state = {
    label: '',
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    const { onItemAdded } = this.props;
    const { label } = this.state;
    onItemAdded(label);
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
    const { label } = this.state;
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            onChange={this.onChange}
            placeholder="What needs to be done?"
            // autoFocus
            value={label}
          />
        </form>
      </header>
    );
  }
}
