var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var port = 3001;
app.use(express.json());
app.use(cors());
var tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description of Task 1",
    completed: false,
    subTasks: ["Subtask 1.1", "Subtask 1.2"],
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description of Task 2",
    completed: false,
    subTasks: ["Subtask 2.1", "Subtask 2.2", "Subtask 2.3"],
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description of Task 3",
    completed: false,
    subTasks: ["Subtask 3.1"],
  },
  {
    id: 4,
    title: "Task 4",
    description: "Description of Task 4",
    completed: false,
    subTasks: [],
  },
  {
    id: 5,
    title: "Task 5",
    description: "Description of Task 5",
    completed: false,
    subTasks: ["Subtask 5.1", "Subtask 5.2", "Subtask 5.3", "Subtask 5.4"],
  },
];
var deletedTasks = [];

// Récupération de toutes les tâches
app.get("/tasks", function (req, res) {
  // Ajout de la propriété subTasksCount dans chaque tâche
  const tasksWithSubTasksCount = tasks.map((task) => ({
    ...task,
    subTasksCount: task.subTasks ? task.subTasks.length : 0,
  }));
  res.json(tasksWithSubTasksCount);
});

// Récupération d'une tâche par son ID
app.get("/tasks/:id", function (req, res) {
  var taskId = parseInt(req.params.id, 10);
  var task = tasks.find(function (task) {
    return task.id === taskId;
  });
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Tâche non trouvée" });
  }
});

// Ajout d'une nouvelle tâche
app.post("/tasks", function (req, res) {
  // Assurez-vous que les données envoyées depuis l'application correspondent à la structure attendue
  var newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed || false,
    subTasks: req.body.subTasks || [],
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Mise à jour d'une tâche par son ID
app.put("/tasks/:id", function (req, res) {
  var taskId = parseInt(req.params.id, 10);
  var updatedTask = req.body;
  tasks = tasks.map(function (task) {
    return task.id === taskId
      ? __assign(__assign({}, task), updatedTask)
      : task;
  });
  res.json({ message: "Tâche mise à jour avec succès" });
});

// Suppression d'une tâche par son ID
app.delete("/tasks/:id", function (req, res) {
  var taskId = parseInt(req.params.id, 10);
  var deletedTask = tasks.find(function (task) {
    return task.id === taskId;
  });
  if (deletedTask) {
    deletedTask.deletedDate = new Date().toLocaleDateString();
    deletedTasks.push(deletedTask);
  }
  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });
  res.json({
    message: "Tâche supprimée avec succès",
    deletedDate: deletedTask ? deletedTask.deletedDate : undefined,
  });
});

// Récupération des tâches supprimées
app.get("/deletedTasks", function (req, res) {
  res.json(deletedTasks);
});

// Démarrage du serveur
app.listen(port, function () {
  console.log("Le serveur écoute sur le port " + port);
});
