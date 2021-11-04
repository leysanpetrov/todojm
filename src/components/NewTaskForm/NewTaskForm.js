import React, { useState } from 'react';
import './NewTaskForm.css';

function NewTaskForm ({ onItemAdded }) {

  const [label, setLabel] = useState('')

  const onSubmit = (ev) => {
    ev.preventDefault();
    onItemAdded(label);
    setLabel('')
  };

  const onChange = (ev) => {
    setLabel(ev.target.value)
  };

    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            className="new-todo"
            onChange={onChange}
            placeholder="What needs to be done?"
            // eslint-disable-next-line react/destructuring-assignment
            value={label}
          />
        </form>
      </header>
    );
}

export default NewTaskForm

