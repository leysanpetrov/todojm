import React from 'react';
import '../../index';
import './task.css';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

const Task = ({ label, date, doDone }) => {
  const resultDate = formatDistanceToNow(date, { includeSeconds: true });
  return (
    <label>
      <span aria-hidden="true" className="description" onClick={doDone}>
        {label}
      </span>
      <span className="created">created {resultDate} ago</span>
    </label>
  );
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  doDone: PropTypes.func.isRequired,
};

export default Task;
