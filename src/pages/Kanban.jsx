import { useState } from 'react';

const initialTasks = {
  todo: ['Write docs', 'Plan meeting'],
  inprogress: ['Build dashboard'],
  done: ['Deploy app'],
};

export default function Kanban() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {Object.entries(tasks).map(([column, items]) => (
        <div key={column} className="bg-white dark:bg-gray-800 rounded p-4 shadow">
          <h2 className="text-xl font-semibold capitalize mb-4">{column}</h2>
          {items.map((task, i) => (
            <div key={i} className="bg-blue-100 dark:bg-blue-900 p-2 rounded mb-2">
              {task}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}