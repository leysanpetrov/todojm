import React from 'react';
import '../../index';
import './task-list.css';
import PropTypes from 'prop-types';
import Task from '../task/task';

const TaskList = ({ todos, doDone, onDeleteClick }) => {
  const elements = todos.map((item) => {
    const { id, label, className, date } = item;
    return (
      <li key={id} className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <Task label={label} date={date} doDone={() => doDone(id)} />
          <button aria-label="icon-edit" type="button" className="icon icon-edit" />
          <button
            aria-label="icon-destroy"
            type="button"
            className="icon icon-destroy"
            onClick={() => onDeleteClick(id)}
          />
        </div>
        <input type="text" className="edit" value="Editing task" />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  doDone: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TaskList;
