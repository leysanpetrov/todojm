import React, { Component } from 'react'
import TasksFilter from '../tasks-filter/tasks-filter'
import './footer.css'
import PropTypes from 'prop-types'

export default class Footer extends Component {

  static defaultProps = {
    onFilterChange: () => {},
  }

  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func,
    clearCompleted: PropTypes.func.isRequired,
    countActive: PropTypes.number.isRequired
  }

  render () {
    const { filter, onFilterChange, clearCompleted, countActive } = this.props
    return (
      <footer className="footer">
        <span className="todo-count"> {countActive} items left</span>
        <TasksFilter filter={filter}
                     onFilterChange={onFilterChange}/>
        <button className="clear-completed"
                onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    )
  }
}

