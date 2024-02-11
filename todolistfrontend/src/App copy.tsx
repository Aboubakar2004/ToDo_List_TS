import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
// import TaskForm from "./components/TaskForm";
// import AddTask from "./components/AddTask";


const App: React.FC = () => {
  return (
        <Routes>
           <Route path="/" element={<Home />} />
          {/* <Route path="/form" element={<TaskForm />} />
          <Route path="/addtask" element={<AddTask />} />  */}


      
        </Routes>
  );
};

export default App;