import React from 'react';
import '../index';
import './TaskList.css';
import PropTypes from 'prop-types';
import Task from '../components/Task/Task';

const TaskList = ({ todos, taskDone, onDeleteClick, onEditClick, doDisabled }) => {
const element = todos.map((item) => {
  const { id, label, date, disabled, completed } = item;

  let doClassName = ""
    if (!completed) {
      doClassName += " task";
    } else {
      doClassName += " task_completed";
    }
    if (disabled) {
      doClassName += " task";
    } else {
      doClassName += " task_border";
    }

  return (
    <li key={id} className={doClassName}>
      <div className="view">
        <Task label={label}
              date={date}
              taskDone={() => taskDone(id)}
              id={id}
              disabled={ disabled }
              completed={ completed }
              doDisabled={ doDisabled }
              onDeleteClick={ onDeleteClick }

        />
        <button aria-label="icon-edit"
                type="button"
                className="icon icon-edit"
                onClick={() => onEditClick(id)}

        />
        <button
          aria-label="icon-destroy"
          type="button"
          className="icon icon-destroy"
          onClick={() => onDeleteClick(id)}
        />
      </div>
      <input type="text" className="edit" value="Editing task" onChange={() => {}}/>
    </li>
  );
})
  return <ul className="todo-list"> { element } </ul>;
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  taskDone: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TaskList;
