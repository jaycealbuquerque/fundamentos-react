import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import Button from '../Button';

import './styles.css'

const TaskDetails = () => {
  const params = useParams();

  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  }

  return (
    <>
      <div className="back-button">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Itaque optio vel odio tempora cumque,
          iste reprehenderit tenetur quam beatae voluptate
          harum in molestiae impedit et enim! Optio.
        </p>
      </div>
    </>
  );
}

export default TaskDetails;