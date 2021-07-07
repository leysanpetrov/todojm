import React, {Component} from "react";
import "../../index"
import "./task-list.css"
import Task from "../task/task"

export default class TaskList extends Component {

  render() {
    const { todos, doDone, onDeleteClick } = this.props
    const elements = todos.map((item) => {
      const { id, label, className } = item
        return (
          <li key={id} className={ className } >
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <Task label={label}
                    doDone={() => doDone(id)}
              />
              <button className="icon icon-edit"
              >
              </button>
              <button className="icon icon-destroy"
                      onClick={() => onDeleteClick(id)}>
              </button>
            </div>
            <input type="text" className="edit" value="Editing task"/>
          </li>
        )
      }
    )
    return (
      <ul className="todo-list">
        {elements}
      </ul>
    )
  }
}
