import React, { useState } from 'react'
import './Task.css'
import '../../TaskList/TaskList.css'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import TaskTimer from '../TaskTimer/TaskTimer'

function Task ({ label, onDeleteClick, id, date, taskDone, disabled, completed, doDisabled }) {
  const [labelInner, setLabelInner] = useState(label)
  const [isPause, setIsPause] = useState(true)
  const [timer, setTimer] = useState('00:00:00')
  const [displayTime, setDisplayTime] = useState(0)
  const [timerInterval, setTimerInterval] = useState(0)

  const timeToString = (time) => {
    const diffInHrs = time / 3600000
    const hh = Math.floor(diffInHrs)

    const diffInMin = (diffInHrs - hh) * 60
    const mm = Math.floor(diffInMin)

    const diffInSec = (diffInMin - mm) * 60
    const ss = Math.floor(diffInSec)

    const formattedHH = hh.toString().padStart(2, '0')
    const formattedMM = mm.toString().padStart(2, '0')
    const formattedSS = ss.toString().padStart(2, '0')

    return `${formattedHH}:${formattedMM}:${formattedSS}`
  }

  const start = () => {
    setIsPause(false)
    const startTime = Date.now() - displayTime
    setTimerInterval(setInterval(() => {
      setDisplayTime(Date.now() - startTime)
      setTimer(timeToString(Date.now() - startTime))
    }, 1000))
  }

  const pause = () => {
    setIsPause(true)
    clearInterval(timerInterval);
  }

  const onChange = (ev) => {
    setLabelInner(ev.target.value)
  }

  const deleteEmptyLabel = (ev) => {
    if (!ev.target.value.trim().length && ev.keyCode === 13) {
      onDeleteClick(id)
    }
  }

  const resultDate = formatDistanceToNow(date, { includeSeconds: true })

  return (
    <React.Fragment>
      <input
        className="toggle"
        type="checkbox"
        onChange={taskDone}
        checked={completed}
      />
      <label>
        <input aria-hidden="true" className="description" disabled={disabled}
               onChange={onChange}
               onKeyUp={(event) => doDisabled(event, id)}
               onKeyDown={deleteEmptyLabel}
               value={labelInner}
        />
        <TaskTimer isPause={isPause}
                   disabled={disabled}
                   timer={timer}
                   start={start}
                   pause={pause}
        />
        <span className="created">created {resultDate} ago</span>
      </label>
    </React.Fragment>
  )
}

Task.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  taskDone: PropTypes.func.isRequired,
}

export default Task

