import React from 'react'
import Task from '../Task';
import './styles.css'

const TaskList = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  return (
    <div className="task-list">
      {tasks.map(task =>
        <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      )}
    </div>
  )
}

export default TaskList;