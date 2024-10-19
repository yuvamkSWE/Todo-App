import React, { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState([]); // For the list of todos
  const [newTodo, setNewTodo] = useState(''); // For the input value

  // Function to handle adding the task
  function handleSetTodo() {
    if (newTodo.trim() !== '') { // Prevent adding empty tasks
      setTodo([...todo, newTodo]); // Add the new task to the todo array
      setNewTodo(''); // Clear the input field after adding
    }
  }

  return (
    <div className='bg-gradient-to-r from-blue-800 to-blue-950'>
      <div className='flex flex-col items-center h-screen'>
        <h1 className='text-7xl text-center mx-auto py-4 text-white'>Todo App</h1>

        <div className='py-10 relative flex flex-row items-center justify-center'>
          <input 
            type="text"
            value={newTodo} // Bind the input value to the state
            onChange={(e) => setNewTodo(e.target.value)} // Update state on input change
            className="w-[200px] sm:w-[500px] h-[50px] px-3 rounded-3xl py-3 font-bold text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            placeholder="Task"
          />
          <button 
            className="absolute w-[100px] right-0.5 rounded-3xl h-[47px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 focus:outline-none sm:text-sm sm:leading-5"
            onClick={handleSetTodo} // Add task on button click
          >
            Add Task
          </button>
        </div>

        
      </div>
    </div>
  );
}
