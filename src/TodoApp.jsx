import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

export default function TodoApp() {
  const [todo, setTodo] = useState(() => {
    // Load todos from local storage on initial render
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  // Function to handle adding the task
  function handleSetTodo() {
    if (newTodo.trim() !== '') {
      setTodo([...todo, newTodo]); // Add the new task to the todo array
      setNewTodo(''); // Clear the input field after adding
    }
  }

  // Function to delete a task
  function handleDeleteTodo(index) {
    const updatedTodos = todo.filter((_, i) => i !== index); // Remove the task at the specified index
    setTodo(updatedTodos); // Update the todo state
  }

  return (
    <div className='bg-gradient-to-r from-blue-800 to-blue-950'>
      <div className='flex flex-col items-center h-screen'>
        <h1 className='text-7xl text-center mx-auto py-4 text-white'>Todo App</h1>

        <div className='py-10 relative flex flex-row items-center justify-center'>
          <input 
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} 
            className=" w-[400px]  sm:w-[500px] h-[50px] px-3 rounded-3xl py-3 font-bold text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            placeholder="Task"
          />
          <button 
            className="absolute overflow-hidden sm:w-[100px] right-0.5 rounded-3xl h-[47px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 focus:outline-none sm:text-sm sm:leading-5"
            onClick={handleSetTodo}
          >
            Add Task
          </button>
        </div>

        {/* Passing the todo array and delete function as props to TodoList */}
        <TodoList array={todo} onDelete={handleDeleteTodo} />
      </div>
    </div>
  );
}