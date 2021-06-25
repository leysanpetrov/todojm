import React from "react";
import "./new-task-form.css"

const NewTaskForm = () => {
  // let dateOfCreate = new Date();

  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus/>
      {/*<span>{dateOfCreate}</span>*/}
    </header>
  )
}

export default NewTaskForm