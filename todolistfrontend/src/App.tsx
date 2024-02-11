import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import TaskForm from "./components/TaskForm";
import AddTask from "./components/AddTask";
import Login from "./connexion/Login";
import Signup from "./connexion/Signup";


const App: React.FC = () => {
  return (
        <Routes>
          <Route path='/'element={<Login/>}/>
          <Route path='/signup'element={<Signup/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<TaskForm />} />
          <Route path="/addtask" element={<AddTask />} />
       
        </Routes>
  );
};

export default App;