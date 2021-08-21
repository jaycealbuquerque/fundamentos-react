import React from 'react'
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'

import './styles.css'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

  return (
    <div
      className="task"
      style={task.completed ? { textDecoration: 'line-through' } : {}}
    >
      <div className="taskTitle">
        <span onClick={() => handleTaskClick(task.id)}>{task.title}</span>
      </div>
      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
        <button
          className="task-details-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div >
  )


  // return <div className="task">

  //   <span>{task.title}</span>

  // </div>

}

export default Task;