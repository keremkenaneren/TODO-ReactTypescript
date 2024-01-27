import { todoTypes } from "../TodoTypes"

type PropsType = {
  task: todoTypes
  deleteTask(nameToDelete:string): void
}
export default function TodoItems({task , deleteTask}:PropsType) {
  return (
    <div className="border border-black w-48 text-center m-5 p-6 rounded-lg">
      <p>{task.todoName}</p>
      <p>{task.workDay}</p>
      <button className=" py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-950 hover:bg-gray-100 hover:text-blue-600 focus:z-10 focus:ring-4 focus:ring-gray-200 "
       onClick={()=>{deleteTask(task.todoName)}}>SİL</button>
    </div>
  )
}
