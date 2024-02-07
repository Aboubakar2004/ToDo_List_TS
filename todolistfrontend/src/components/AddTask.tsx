import React, { useState } from "react";
import TaskDetails from "./TaskDetails";

interface ListProps {}

function List(props: ListProps) {
  const [task, setTask] = useState<string>("");
  const [click, setClick] = useState<boolean>(false);
  const [tasklist, setTasklist] = useState<{ task: string; subTasks: string[] }[]>([]);
  const [count, setCount] = useState<number>(0);
  const [newFields, setNewFields] = useState<{ id: number; value: string }[]>([]);

  function handleClick(): void {
    const newTask = { task, subTasks: newFields.map((field) => field.value) };
    setTasklist([...tasklist, newTask]);
    setTask("");
    setNewFields([]);
    setClick(true);
  }

  function RemoveTask(item: string): void {
    setTasklist(tasklist.filter((task) => task.task !== item));
  }

  function Count(): void {
    setCount(count + 1);
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
    <div>
      <div>
        <input
          placeholder="Entrez une tâche"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="text-black"
        />
        <div className="space-x-4">
          <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
            Ajouter
          </button>
          <button onClick={addField} className="bg-green-500 text-white px-4 py-2 rounded">
            Ajouter une sous-tâche
          </button>
          {newFields.map((field) => (
            <input
              key={field.id}
              placeholder="Ajouter une sous-tâche"
              value={field.value}
              onChange={(e) => handleChangeLowTask(field.id, e.target.value)}
              className="text-black"
            />
          ))}
        </div>
        {click && (
          <ul>
            {tasklist.map((task, index) => (
              <li key={index}>
                <div>
                  <h1>{task.task}</h1>
                  <h2>Complétion de la tâche</h2>
                  <h3>{count} / {task.subTasks ? task.subTasks.length : 0}</h3>
                  <button onClick={() => RemoveTask(task.task)}>
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
