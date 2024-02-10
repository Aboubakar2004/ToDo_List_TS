// DoneTasks.tsx
import React from 'react';

interface Tasks {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface DoneTasksProps {
  doneTasks: Tasks[];
}
function DoneTasks({ doneTasks }: DoneTasksProps) {
  return (
    <div>
      {/* Utilisez doneTasks dans votre composant DoneTasks */}
      {doneTasks.map((task) => (
        <div key={task.id}>
          {/* Affichez les tâches terminées selon vos besoins */}
          <p>{task.title} - {task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DoneTasks;