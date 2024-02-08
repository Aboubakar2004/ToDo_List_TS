import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";

const TaskStep: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleVisibility}
      >
        <div className="flex items-center text-[#ffffff6e]">
          <TfiMenuAlt />
          <p>Progress</p>
        </div>
        <div>3/7</div>
      </div>
      {isVisible && (
        <div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" />
            <p>Étape</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" />
            <p>Étape</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" />
            <p>Étape</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" />
            <p>Étape</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" />
            <p>Étape</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" />
            <p>Étape</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" />
            <p>Étape</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskStep;
