// List.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskStep from "./TaskStep";
import Banner from "./Banner";

interface ListProps {
  task?: {
    title: string;
    subTasks: string[];
  };
}

function List(props: ListProps) {
  const [task, setTask] = useState<string>("");
  const [click, setClick] = useState<boolean>(false);
  const [tasklist, setTasklist] = useState<{ id: number; title: string; subTasks: string[] }[]>([]);
  const [count, setCount] = useState<number>(0);
  const [newFields, setNewFields] = useState<{ id: number; value: string }[]>([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => setTasklist(data))
      .catch((error) => console.error("Erreur lors de la récupération des tâches :", error));
  }, []);

  function handleClick(): void {
    const newTask = { title: task, subTasks: newFields.map((field) => field.value) };

    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((addedTask) => {
        setTasklist([...tasklist, addedTask]);
        setTask("");
        setNewFields([]);
        setClick(true);
        navigate("/");
      })
      .catch((error) => console.error("Erreur lors de l'ajout de la tâche :", error));
  }

  function RemoveTask(id: number): void {
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setTasklist(tasklist.filter((task) => task.id !== id));
        } else {
          console.error("Erreur lors de la suppression de la tâche côté serveur");
        }
      })
      .catch((error) => {
        console.error("Erreur réseau lors de la suppression de la tâche :", error);
      });
  }

  function handleChangeLowTask(id: number, value: string): void {
    const updatedFields = newFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setNewFields(updatedFields);
  }

  function addField(): void {
    const newField = { id: newFields.length, value: "" };
    setNewFields([...newFields, newField]);
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-md">
        <input
          placeholder="Entrez une tâche"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full p-2 mb-4 text-black bg-gray-200 rounded-md"
        />
        <div className="space-x-4">
          <button onClick={handleClick} className="btn-primary">
            Ajouter
          </button>
          <button onClick={addField} className="btn-secondary">
            Ajouter une sous-tâche
          </button>
          {newFields.map((field) => (
            <input
              key={field.id}
              placeholder="Ajouter une sous-tâche"
              value={field.value}
              onChange={(e) => handleChangeLowTask(field.id, e.target.value)}
              className="w-full p-2 mb-2 text-black bg-gray-200 rounded-md"
            />
          ))}
        </div>
        {click && (
          <ul>
            {tasklist.map((task) => (
              <li key={task.id} className="my-4">
                <div className="bg-gray-700 p-4 rounded-md">
                  <h1 className="text-xl font-bold mb-2 text-white">{task.title}</h1>
                  <TaskStep subTasks={task.subTasks} taskId={task.id} />
                  <button onClick={() => RemoveTask(task.id)} className="btn-danger mt-2">
                    Supprimer la tâche
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default List;
