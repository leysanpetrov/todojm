import React, { Component } from 'react'
import './Task.css'
import '../../TaskList/TaskList.css'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import TaskTimer from '../TaskTimer/TaskTimer'

export default class Task extends Component {

  state = {
    // eslint-disable-next-line react/destructuring-assignment
    labelInner: this.props.label,
    play: true,
    // pause: false
  }

  onChange = (ev) => {
    this.setState({
      labelInner: ev.target.value
    })
  }

  deleteEmptyLabel = (ev) => {
    if (!ev.target.value.trim().length && ev.keyCode === 13) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.onDeleteClick(this.props.id)
    }
  }

  timerClick = () => {
    console.log("timerClick")
    this.setState({
      play: false,
      // pause: true
    })
  }

  render () {
    const { id, date, taskDone, disabled, completed, doDisabled } = this.props
    const {labelInner, play } = this.state
    const resultDate = formatDistanceToNow(date, { includeSeconds: true })
    return (
      <>
        <input
          className="toggle"
          type="checkbox"
          onChange={taskDone}
          checked={completed}
        />
        <label>
          <input aria-hidden="true" className="description" disabled={disabled}
                 onChange={this.onChange}
                 onKeyUp={(event) => doDisabled(event, id)}
                 onKeyDown={this.deleteEmptyLabel}
                 value={ labelInner }
          />
          <TaskTimer play={ play }
                     // pause={ pause }
                     timerClick={this.timerClick}/>
          <span className="created">created {resultDate} ago</span>
        </label>
      </>
    )
  }
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  taskDone: PropTypes.func.isRequired,
}

