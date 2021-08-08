import React  from 'react';
import './TasksFilter.css';

const  TasksFilter = ({ filter, onFilterChange }) => {
 const  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];
    const newButtons = buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const className = isActive ? 'selected' : "";
      return (
        <li key={label}>
          <button type="button" className={className} onClick={() => onFilterChange(name)}>
            {label}
          </button>
        </li>
      );
    });
    return <ul className="filters">{newButtons}</ul>;
}

export default TasksFilter