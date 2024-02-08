import React from "react";
import AllTasks from "./AllTasks";
import InProgressTasks from "./InProgressTasks";
import DoneTasks from "./DoneTasks";
import TasksDeleted from "./TasksDeleted";
import { FaCirclePlus } from "react-icons/fa6";

const TaskList: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 px-5">
      <div className="rounded-lg flex flex-col gap-3 p-5 bg-[#24262C] border">
        <div className="flex items-center justify-between">
          <div className="text-[#ffffff6e]">All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus className="text-[#ffffff6e]" />
            <div>Add New task</div>
          </div>
        </div>
          <AllTasks />
      </div>
      <div className="rounded-lg flex flex-col gap-3 p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus />
            <div>Add New task</div>
          </div>
        </div>
        <InProgressTasks />
      </div>
      <div className="rounded-lg flex flex-col gap-3 p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus />
            <div>Add New task</div>
          </div>
        </div>
        <DoneTasks />
      </div>
      <div className="rounded-lg flex flex-col gap-3 p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus />
            <div>Add New task</div>
          </div>
        </div>
        <TasksDeleted />
      </div>
    </div>
  );
};

export default TaskList;