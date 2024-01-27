import { ChangeEvent, FC, useState } from 'react'
import './App.css'
import { todoTypes } from './TodoTypes'
import TodoItems from './components/TodoItems'

const App : FC =() =>  {

  const [task, setTask] = useState<string>("")
  const [workDay, setWorkDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<todoTypes[]>([])


  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value)      
    }
    else {
      setWorkDay(Number(event.target.value))
    }
  }

  const addTask = () : void => {
    const newTask = {todoName:task, workDay:workDay};
    setTodoList([...todoList, newTask]);
    setTask("")
    setWorkDay(0)
    console.log(todoList);
    
  }

  const deleteTask = (nameToDelete:string) => {
    setTodoList(todoList.filter((task) => {
      return task.todoName !== nameToDelete
    }))
  }


  return (
    <div className='m-20 justify-center items-center mt-5'>
      <div>
        <input 
          className="bg-gray-50 border border-gray-950 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 "
          onChange={handleChange}
          type="text"
          placeholder='Task giriniz'
          value={task}
          name='task'/>
        <br />
        <input 
          className="bg-gray-50 border border-gray-950 text-gray-900 text-sm rounded-lg 
           focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 "
          onChange={handleChange}
          type="number"
          placeholder='Kaç günlük'
          value={workDay}
          name='workDay' />
<br />
        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-950 hover:bg-gray-100 hover:text-blue-600 focus:z-10 focus:ring-4 focus:ring-gray-200 '
         onClick={addTask} >TASK EKLE</button>
      </div>
      <div>
        {todoList.map((task:todoTypes, index:number) => {
          return <TodoItems task={task} key={index} deleteTask={deleteTask}/> 
        })}
      </div>
    </div>
  )
}

export default App
