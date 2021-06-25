import React, {Component} from "react";
import "../../index.js"
import "./task.css"
import { formatDistanceToNow } from "date-fns";

// import NewTaskForm from '../new-task-form/new-task-form';

export default class Task extends Component {

  render () {
   const { label, doDone } = this.props;

    let resultData = formatDistanceToNow(
      new Date(2015, 0, 1, 0, 0, 15),
      {includeSeconds: true}
    )

    return (
      <label>
        <span className="description"
              onClick={ doDone }
        >
          {label}
        </span>
        <span className="created">created { resultData } seconds ago</span>
      </label>
    )
  }
}

  // Время создания задачи должно быть классом Date
  // function getDateOfCreate () {
  //   dateOfCreate
  // }

  // let dateOfCreate = new Date();

