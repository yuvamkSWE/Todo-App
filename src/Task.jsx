import React from 'react'
import Buttons from './Buttons';

export default function Task(props) {
    const { task, func, index } = props;

  return (
    <div className="bg-gradient-to-r from-blue-950 to-blue-900 w-[500px] px-8 py-2 rounded">
    <div className='flex flex-row justify-between items-center' >
        <h1 class=" text-xl ">{task}</h1>
        <Buttons index={index} onDelete={func} />
    </div>
</div>
  )
}
