import React, {Component} from "react";
import NewTaskForm from '../new-task-form/new-task-form'
import TaskList from '../task-list/task-list'
import Footer from '../footer/footer'
import "./app.css"

export default class App extends Component{

  render() {

    return (
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList />
          <Footer />
        </section>
      </section>
    )
  }
}
