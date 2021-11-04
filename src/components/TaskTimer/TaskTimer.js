import React from "react";
import "./TaskTimer.css"

const TaskTimer = ({isPause, timer, start, pause}) => {
    const buttonPlay = <button aria-label="icon-play"
                               type="button"
                               className="icon-play"
                               onClick={()=>start(isPause, timer)} />
    const buttonPause = <button aria-label="icon-pause"
                                type="button"
                                className="icon-pause"
                                onClick={()=>pause(isPause, timer)}
                                />
    const buttonActive = isPause ? buttonPlay : buttonPause

    return (
      <div className="task-timer">
        { buttonActive }
        <div className="timer-text">{ timer }</div>
      </div>
    )
  }

  export default TaskTimer