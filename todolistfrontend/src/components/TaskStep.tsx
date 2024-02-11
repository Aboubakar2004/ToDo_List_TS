import React, { useState, useEffect } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

interface TaskStepProps {
  subTasks: string[];
  taskId: number;
  title: string;
}

const TaskStep: React.FC<TaskStepProps> = ({ subTasks, taskId, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [agreement, setAgreement] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  const updateAgreement = () => {
    setAgreement(count === subTasks.length);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }

    updateAgreement();
  };

  const handleContinue = () => {
    fetch("http://localhost:3001/completedTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: taskId,
        title: title,
        description: "Task Description",
        completed: false,
        subTasks: subTasks || [],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Task completed successfully", data);
        
        // Mettez à jour l'état local en supprimant la tâche complétée
        // Cela dépend de la structure exacte de votre état local
        // Vous pouvez utiliser setState ou une fonction similaire ici
        // par exemple, setTasks(updatedTasks);
        
        // Redirigez vers la route souhaitée
        window.location.href = "/";
      })
      .catch((error) => console.error("Error completing task:", error));
  };

  useEffect(() => {
    updateAgreement();
  }, [count, subTasks.length]);

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
      <button
        disabled={!agreement}
        onClick={handleContinue}
        className={`py-2 px-4 rounded ${
          agreement
            ? "bg-green-500 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Continuer
      </button>
    </div>
  );
};

export default TaskStep;
