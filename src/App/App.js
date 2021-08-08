import React, { Component } from 'react';
import NewTaskForm from '../components/NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';
import './App.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Completed task', Date.now()),
      this.createTodoItem('Editing task', Date.now()),
      this.createTodoItem('Active task', Date.now()),
    ],
    filter: 'all',
  };

  addItem = (text) => {
    if ( !text.trim().length ) {
      return
    }
    const dateNow = Date.now();
    const newItem = this.createTodoItem(text, dateNow);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  onCheckboxClick = (id) => {
    this.setState(({ todoData }) => {
      const item = todoData.find((el) => el.id === id);
      if (!item.completed) {
        item.completed = true;
      } else {
        item.completed = false;
      }
      return {
        todoData,
      };
    });
  };

  onDelete = (id) => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => el.id !== id);
      return {
        todoData: newArr,
      };
    });
  };

  onEdit = (id) => {
    this.setState(({ todoData }) => {
      const task = todoData.find((el) => el.id === id);
      if (task.disabled) {
        task.disabled = false;
      }
      else task.disabled = true;
      return task.disabled
    });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => el.completed !== true);
      return {
        todoData: newArr,
      };
    });
  };

  filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => item.completed !== true);
      case 'completed':
        return items.filter((item) => item.completed === true);
      default:
        return items;
    }
  }

  doDisabled = (event,id) => {
    this.setState(({ todoData }) => {
      const task = todoData.find((el) => el.id === id);
      if (event.keyCode === 13) {
        task.disabled = true;
      }
      return task.disabled
    });
  }

  createTodoItem(label, date) {
    const todoItem = {
      label,
      date,
      completed: false,
      disabled: true,
      id: (this.maxId += 1),
    };
    return todoItem;
  }

  render() {
    const { todoData, filter } = this.state;
    const visibleItem = this.filter(todoData, filter);
    const countActive = todoData.filter((el) => el.completed !== true).length;
    return (
      <section className="todoapp">
        <NewTaskForm onItemAdded={this.addItem} />
        <section className="main">
          <TaskList todos={visibleItem}
                    taskDone={this.onCheckboxClick}
                    onDeleteClick={this.onDelete}
                    onEditClick={this.onEdit}
                    doDisabled={this.doDisabled}
            />
          <Footer
            filter={filter}
            onFilterChange={this.onFilterChange}
            clearCompleted={this.clearCompleted}
            countActive={countActive}
          />
        </section>
      </section>
    );
  }
}
