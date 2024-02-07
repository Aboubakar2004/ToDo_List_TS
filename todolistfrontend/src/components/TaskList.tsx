import React from "react";
import AllTasks from "./AllTasks";
import InProgressTasks from "./InProgressTasks";
import DoneTasks from "./DoneTasks";
import TasksDeleted from "./TasksDeleted";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TaskGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="border rounded-md flex flex-col p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus />
            <Link to="/addtask">
            <div>Add New task</div>
</Link>
          </div>
        </div>
        <AllTasks />
      </div>
      <div className="border rounded-md flex flex-col p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus />
            <Link to="/addtask">
            <div>Add New task</div>
</Link>
          </div>
        </div>
        <InProgressTasks />
      </div>
      <div className="border rounded-md flex flex-col p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus />
            <Link to="/addtask">
            <div>Add New task</div>
</Link>
          </div>
        </div>
        <DoneTasks />
      </div>
      <div className="border rounded-md flex flex-col p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus />
            <Link to="/addtask">
            <div>Add New task</div>
</Link>
          </div>
        </div>
        <TasksDeleted />
      </div>
    </div>
  );
};

export default TaskGrid;
