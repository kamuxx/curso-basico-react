
import { useState, useEffect, useContext } from 'react'

import TaskCard from '../compontents/TaskComponents/TaskCard.component'
import TaskForm from '../compontents/TaskComponents/TaskForm.component'
import { useTaskContext } from '../context/TaskContext'

function TaskList() {
    const { taskData, storeTasks, editTask, deleteTask, editingTask } = useTaskContext();

    // Cada vez que `tasks` cambie, lo imprimimos
    useEffect(() => {
        console.log('✅ tasks actualizado →', taskData);
    }, [taskData]);

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-4xl font-bold text-gray-700/80'>/Tasks</h1>
            <hr className='my-4 border border-gray-300' />
            <div className='grid grid-rows-2 md:grid-cols-3 gap-4'>
                <div className='md:col-span-1 w-full flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold text-gray-700/80'>Add Task</h2>
                    <TaskForm className='w-full'/>
                </div>
                <div className='md:col-span-2 w-full flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold text-gray-700/80'>Task List</h2>
                    <div className='flex flex-col gap-4'>
                        {taskData && taskData.length ? taskData.map((task, i) => (
                            <TaskCard key={i} task={task} deleteTask={deleteTask} editTask={editTask} />
                        )) : <div className=' bg-white p-4 rounded-md shadow-md text-center xl font-semibold text-gray-700/80'>No tasks found</div>}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TaskList