import React from "react";
import "./TaskTimer.css"

const TaskTimer = ({ play, timerClick }) => {


    const buttonPlay = <button aria-label="icon-play"
                               type="button"
                               className="icon icon-play"
                               onClick={() => console.log("Hi")} />
    const buttonPause = <button aria-label="icon-pause"
                                type="button"
                                className="icon icon-pause"
                                onClick={ timerClick }
                                />
    const buttonActive = play ? buttonPlay : buttonPause

    return (
      <span className="description">
        { buttonActive }
                  12:25
                </span>
    )
  }

  export default TaskTimer