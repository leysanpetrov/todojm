// import React, { Component } from 'react'
import React, { useState } from 'react'
import NewTaskForm from '../components/NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'
import './App.css'

function App () {

  let maxId = 100

  // eslint-disable-next-line no-shadow
  const createTodoItem = (label, date) => {
    const todoItem = {
      label,
      date,
      completed: false,
      disabled: true,
      id: (maxId += 1),
    }
    return todoItem
  }

  const [todoData, setTodoData] = useState([
    createTodoItem('Completed task', Date.now()),
    createTodoItem('Editing task', Date.now()),
    createTodoItem('Active task', Date.now()),
  ])

  const [filter, setFilter] = useState('all')

  const addItem = (text) => {
    if (!text.trim().length) {
      return
    }
    const dateNow = Date.now()
    // eslint-disable-next-line no-use-before-define
    const newItem = createTodoItem(text, dateNow)
    setTodoData([...todoData, newItem])
  }

  const onCheckboxClick = (id) => {

    setTodoData(todoData.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    }))
  }

  const onDelete = (id) => {
    setTodoData(todoData.filter((el) => el.id !== id))
  }

  const onEdit = (id) => {
    setTodoData(todoData.map((task) => {
      if (task.id === id) {
        return { ...task, disabled: !task.disabled }
      }
      return task
    }))
  }

  // eslint-disable-next-line no-shadow
  const onFilterChange = (filter) => {
    setFilter(filter)
  }

  const clearCompleted = () => {
    const newArr = todoData.filter((el) => el.completed !== true)
    setTodoData(newArr)
  }

  // eslint-disable-next-line no-shadow
  const filterDo = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => item.completed !== true)
      case 'completed':
        return items.filter((item) => item.completed === true)
      default:
        return items
    }
  }

  const doDisabled = (event, id) => {
    setTodoData(todoData.map((task) => {
      if (task.id === id && event.keyCode === 13) {
        return { ...task, disabled: true }
      }
      return task
    }))
  }

  const visibleItem = filterDo(todoData, filter)
  const countActive = todoData.filter((el) => el.completed !== true).length

  return (
    <section className="todoapp">
      <NewTaskForm onItemAdded={addItem}/>
      <section className="main">
        <TaskList todos={visibleItem}
                  taskDone={onCheckboxClick}
                  onDeleteClick={onDelete}
                  onEditClick={onEdit}
                  doDisabled={doDisabled}
        />
        <Footer
          filter={filter}
          onFilterChange={onFilterChange}
          clearCompleted={clearCompleted}
          countActive={countActive}
        />
      </section>
    </section>
  )
}

export default App

