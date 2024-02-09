
import React, { useState, useEffect } from "react";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import TaskStep from "./TaskStep";

interface Tasks {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const AllTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data: Tasks[]) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const handleDelete = (taskId: number) => {
    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // log the deletion message
        setTasks(tasks.filter((task) => task.id !== taskId));
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <div className="rounded-md flex flex-col gap-4">
      {tasks.map((task) => (
        <ul
          key={task.id}
          className="flex flex-col bg-[#292B31] rounded-md p-3 gap-5"
        >
          <li>
            <strong>{task.title}</strong>
            <p className="text-[#ffffff6e]">{task.description}</p>
          </li>
          <li className="flex flex-col gap-2">
            <div className="progress_bar h-1 bg-[#ffffff10] rounded-full">
              <div className="bg-[#FFA048] w-7 h-full rounded-full"></div>
            </div>
            <TaskStep />
          </li>
          <li className="flex justify-between">
            <div className="bg-[#ffffff06] rounded-full px-3 py-1 text-[#989CAA] w-28 grid place-items-center">
              06 Jan 2024
            </div>
            <div className="flex items-center gap-1 text-2xl">
              <div
                className="delete text-red-700 cursor-pointer"
                onClick={() => handleDelete(task.id)}
              >
                <MdDelete />
              </div>
              <div className="edit text-green-700 cursor-pointer">
                <LiaEdit />
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AllTasks;
