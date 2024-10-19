import React from 'react'

export default function (props) {
    const { index, onDelete } = props;
  return (
    <button 
            onClick={() => onDelete(index)} // Call the delete function with the index
            className="ml-4 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            Delete
          </button>
  )
}
