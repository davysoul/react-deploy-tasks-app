import {useContext} from 'react'
import TaskCard from './TaskCard'
import { TaskContext } from "../context/TaskContext";

function TaskList(props) {
   const {tasks} = useContext(TaskContext)

    if(tasks.length===0){
        return <h1 className='text-white text-4xl font-bold text-center'>Il n y a pas des taches disponibles</h1>
    }
  return (
    
    <div className='grid grid-cols-4 gap-2 ml-60'>
        {tasks.map((task) =>(
           <TaskCard task={task} key={task.id} />
     ))}
     
    </div>
    
  )
}

export default TaskList