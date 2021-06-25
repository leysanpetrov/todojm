import React, {Component} from "react";
import "../../index"
import "./task-list.css"
import Task from "../task/task"

export default class TaskList extends Component {

 state = {
   todoData: [
     { label: 'Completed task', className: null, id: 1 },
     { label: 'Editing task', className: null, id: 2 },
     { label: 'Active task', className: null, id: 3 }
   ],
   done: false
 }

  onLabelClick = (id ) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      if ( todoData[idx].className === null) {
        todoData[idx].className = "completed"
      }
      else {
        todoData[idx].className = null
      }
      return {
        todoData: todoData
      };
    })
  }

  onDelete = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const before = todoData.slice(0,idx)
      const after = todoData.slice(idx+1)
      const newArr = [...before,...after]
      return {
        todoData: newArr
      }
    })
  }

  render() {
    const { todoData } = this.state

    const elements = todoData.map((item) => {
      const { id, label, className } = item
        return (
          <li key={id} className={ className } >
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <Task label={label}
                    doDone={() => this.onLabelClick(id)}
              />
              <button className="icon icon-edit"
              >
              </button>
              <button className="icon icon-destroy"
              onClick={() => this.onDelete(id)}>
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
