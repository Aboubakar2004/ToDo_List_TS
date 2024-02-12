import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
<<<<<<< HEAD
// import TaskForm from "./components/TaskForm";
// import AddTask from "./components/AddTask";
=======
import TaskForm from "./components/TaskForm";
import AddTask from "./components/AddTask";
>>>>>>> 9315b5481933fd9a31882d9c7aee99ad26904585
import Login from "./connexion/Login";
import Signup from "./connexion/Signup";


const App: React.FC = () => {
  return (
        <Routes>
          <Route path='/'element={<Login/>}/>
          <Route path='/signup'element={<Signup/>}/>
          <Route path="/home" element={<Home />} />
<<<<<<< HEAD
          {/* <Route path="/form" element={<TaskForm />} />
          <Route path="/addtask" element={<AddTask />} /> */}
   
=======
          <Route path="/form" element={<TaskForm />} />
          <Route path="/addtask" element={<AddTask />} />
       
>>>>>>> 9315b5481933fd9a31882d9c7aee99ad26904585
        </Routes>
  );
};

export default App;