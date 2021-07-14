import React, { Component } from 'react'
import NewTaskForm from '../new-task-form/new-task-form'
import TaskList from '../task-list/task-list'
import Footer from '../footer/footer'
import './app.css'

export default class App extends Component {

  maxId = 100

  state = {
    todoData: [
      this.createTodoItem('Completed task', Date.now()),
      this.createTodoItem('Editing task', Date.now()),
      this.createTodoItem('Active task', Date.now())
    ],
    filter: 'all'
  }

  createTodoItem (label, date) {
    return {
      label,
      date,
      className: null,
      id: this.maxId++,
    }
  }

  addItem = (text) => {
    const dateNow = Date.now()
    const newItem = this.createTodoItem(text, dateNow)
    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArr,
      }
    })
  }

  onLabelClick = (id) => {
    this.setState(({ todoData }) => {
      const arr = todoData.filter((el) => el.id === id)
      if (arr[0].className === null) {
        arr[0].className = 'completed'
      } else {
        arr[0].className = null
      }
      return {
        todoData: todoData
      }
    })
  }

  onDelete = (id) => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => el.id !== id)
      return {
        todoData: newArr
      }
    })
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  filter (items, filter) {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => item.className !== 'completed')
      case 'completed':
        return items.filter((item) => item.className === 'completed')
      default:
        return items
    }
  }

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => el.className !== 'completed')
      return {
        todoData: newArr
      }
    })
  }

  render () {
    const { todoData, filter } = this.state
    const visibleItem = this.filter(todoData, filter)
    const countActive = todoData.filter((el) => el.className !== 'completed').length
    return (
      <section className="todoapp">
        <NewTaskForm onItemAdded={this.addItem}/>
        <section className="main">
          <TaskList todos={visibleItem}
                    doDone={this.onLabelClick}
                    onDeleteClick={this.onDelete}/>
          <Footer filter={filter}
                  onFilterChange={this.onFilterChange}
                  clearCompleted={this.clearCompleted}
                  countActive={countActive}/>
        </section>
      </section>
    )
  }
}
