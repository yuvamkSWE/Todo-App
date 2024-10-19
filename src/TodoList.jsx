import React from 'react';
import Task from './Task';

export default function TodoList(props) {
  const { array, onDelete } = props; // Destructure the props

  return (
    <div className="text-white text-lg mt-4 flex flex-col gap-4">
      {array.map((task, index) => (
         <Task task={task} func={onDelete} index={index} />
        
      ))}
    </div>
  );
}
