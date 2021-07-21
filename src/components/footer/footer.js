import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../tasks-filter/tasks-filter';
import './footer.css';

const Footer = ({ filter, onFilterChange, clearCompleted, countActive }) => (
  <footer className="footer">
    <span className="todo-count"> {countActive} items left</span>
    <TasksFilter filter={filter} onFilterChange={onFilterChange} />
    <button type="button" className="clear-completed" onClick={clearCompleted}>
      Clear completed
    </button>
  </footer>
);

Footer.defaultProps = {
  onFilterChange: () => {},
};

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func,
  clearCompleted: PropTypes.func.isRequired,
  countActive: PropTypes.number.isRequired,
};

export default Footer;
