import React, {Component} from "react";
import TasksFilter from "../tasks-filter/tasks-filter"
import "./footer.css"

export default class Footer extends Component {

  render() {
    const { countActive } = this.props
    const { filter, onFilterChange, clearCompleted } = this.props
  return (
    <footer className="footer">
      <span className="todo-count"> { countActive } items left</span>
      <TasksFilter filter={ filter}
                   onFilterChange={ onFilterChange }/>
      <button className="clear-completed"
              onClick={ clearCompleted }>
        Clear completed
      </button>
    </footer>
  )
}
}

