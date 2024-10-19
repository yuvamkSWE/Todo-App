import React from 'react';
import Buttons from './Buttons';

export default function Task(props) {
    const { task, func, index } = props;

    return (
        <div className="bg-gradient-to-r from-blue-950 to-blue-900 sm:w-[500px] w-full max-w-[350px] sm:max-w-[500px] px-4 sm:px-8 py-2 rounded">
            <div className='flex flex-row justify-between items-center'>
                <div className="flex-1 pr-2 sm:pr-4 overflow-hidden">
                    <h1 className="text-lg sm:text-xl truncate">{task}</h1>
                </div>
                <div className="flex-shrink-0">
                    <Buttons index={index} onDelete={func} />
                </div>
            </div>
        </div>
    );
}