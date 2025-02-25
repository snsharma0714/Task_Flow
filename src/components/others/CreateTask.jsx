/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const createTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    
    const [newTask, setNewTask] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault()
        
        setNewTask({taskTitle, taskDate, taskDescription, category,active:false,newTask:true,failed:false,completed:false})
        
        const data = userData
        
        data.forEach(function(elem){
            if(asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
            }
            
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='p-5 bg-[#2e2d2d] mt-7 rounded'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}
            className ='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                        value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-amber-50 bg-gray-400 border-red-400 mb-4' type='text' placeholder='Make a UI design' 
                        />
                        </div>
                    <div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input
                            value={taskDate}
                            onChange={(e)=>{
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-amber-50 bg-gray-400 border-red-400 mb-4' type="date" />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                            <input
                            value={asignTo}
                            onChange={(e)=>{
                                setAsignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-amber-50 bg-gray-400 border-red-400 mb-4' type="text" placeholder='Employee Name' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input
                            value={category}
                            onChange={(e)=>{
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-amber-50 bg-gray-400 border-red-400 mb-4' type="text" placeholder='design, dev, etc' />
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                    value={taskDescription}
                    onChange={(e)=>{
                        setTaskDescription(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-amber-50 bg-gray-400 border-red-400 mb-4' name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </form>
        </div>
    )
}

export default createTask