import React from 'react'

interface TaskDetailsProps {
    tasktitle : string;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ tasktitle }) =>  {
  return (
    <div>
        <h1>{tasktitle}</h1>
    </div>
  )
}

export default TaskDetails