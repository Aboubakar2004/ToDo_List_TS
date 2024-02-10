// TaskStep.tsx
import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";

interface TaskStepProps {
  subTasks: string[];
  taskId: number; // Ajoutez cette ligne pour définir taskId
}

const TaskStep: React.FC<TaskStepProps> = ({ subTasks, taskId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [agreement, setAgreement] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setAgreement(event.target.checked);
      setCount(count + 1);
      doneTask()
    } else {
      setAgreement(event.target.checked);
      setCount(count - 1);
    }
  };

  const doneTask = () => {
    if (count === subTasks.length) {
      // Mettez à jour la tâche pour la marquer comme terminée
      fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: true }),
      })
        .then(response => response.json())
        .then(updatedTask => {
          // Gérer la réponse si nécessaire
          console.log('Task marked as completed:', updatedTask);
        })
        .catch(error => {
          console.error('Error updating task:', error);
        });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleVisibility}
      >
        <div className="flex items-center text-[#ffffff6e]">
          <TfiMenuAlt />
          <p>Progress</p>
        </div>
        <div>
          {count}/{subTasks.length}
        </div>
      </div>
      {isVisible && (
        <div>
          {subTasks.map((subTask, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agreement"
                onChange={handleChange}
              />
              <p>{subTask}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStep;
