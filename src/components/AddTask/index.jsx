import React, { useState } from 'react'
import Button from '../Button'
import './styles.css'

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData("")
  }

  return (
    <div className="add-task">
      <input
        onChange={handleInputChange}
        value={inputData}
        type="text"
        placeholder="Digite uma tarefa..."
      />
      <Button onClick={handleAddTaskClick}>Add</Button>
    </div>
  );

}

export default AddTask;