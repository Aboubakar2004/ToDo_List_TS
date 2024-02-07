const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

interface Task{
  id: number,
  // title: string,
  // description: string,
  // completed: boolean,
  name:string,
  email:string,
  phone:string,
}

let tasks: Task[] = [
  // {
  //   id: 1,
  //   title: "task1",
  //   description: "Description de la tache 1",
  //   completed: false,
  // },
  // {
  //   id: 2,
  //   title: "task2",
  //   description: "Description de la tache 2",
  //   completed: false,
  // },
  // {
  //   id: 3,
  //   title: "task3",
  //   description: "Description de la tache 3",
  //   completed: false,
  // },
  // {
  //   id: 4,
  //   title: "task4",
  //   description: "Description de la tache 4",
  //   completed: false,
  // },
  // {
  //   id: 5,
  //   title: "task5",
  //   description: "Description de la tache 5",
  //   completed: false,
  // },



 
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '456-789-0123' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '789-012-3456' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', phone: '012-345-6789' },
    { id: 5, name: 'Emily Davis', email: 'emily@example.com', phone: '345-678-9012' },
    { id: 6, name: 'Michael Wilson', email: 'michael@example.com', phone: '678-901-2345' },
    { id: 7, name: 'Sarah Lee', email: 'sarah@example.com', phone: '901-234-5678' },
    { id: 8, name: 'David Martinez', email: 'david@example.com', phone: '234-567-8901' },
    { id: 9, name: 'Karen Taylor', email: 'karen@example.com', phone: '567-890-1234' },
    { id: 10, name: 'Daniel Anderson', email: 'daniel@example.com', phone: '890-123-4567' }
  
  
  
];

app.get("/tasks", function (req: any, res: { json: (arg0: Task[]) => void; }) {
  res.json(tasks);
});

app.get("/tasks/:id", function (req: { params: { id: string; }; }, res: { json: (arg0: Task) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
  const taskId = parseInt(req.params.id, 10);
  const task = tasks.find((task) => task.id === taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Tâche non trouvée" });
  }
});

app.post("/tasks", function (req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }) {
  const newTask = req.body;
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put("/tasks/:id", function (req: { params: { id: string; }; body: any; }, res: { json: (arg0: { message: string; }) => void; }) {
  const taskId = parseInt(req.params.id, 10);
  const updatedTask = req.body;
  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, ...updatedTask } : task
  );
  res.json({ message: "Tâche mise à jour avec succès" });
});

app.delete("/tasks/:id", function (req: { params: { id: string; }; }, res: { json: (arg0: { message: string; }) => void; }) {
  const taskId = parseInt(req.params.id, 10);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.json({ message: "Tâche supprimée avec succès" });
});

app.listen(port, function () {
  console.log(`Le serveur écoute sur le port ${port}`);
});
