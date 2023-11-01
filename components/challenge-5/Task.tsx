import { Task } from "../../app/(challenges)/challenge-5/types";
import { IconDeleteLeft } from "./Icons";

function TaskItem({ task, updateTask, deleteTask }: { task: Task, updateTask: (id: number, checked: boolean) => void, deleteTask: (id: number) => void }) {
  function onCheckedChange(checked: boolean) {
    updateTask(task.id, checked);
  }

  function onDeleteTask() {
    deleteTask(task.id)
  }
  return (

    <div key={task.id} className="flex">
      <label htmlFor={`task-${task.id}`} className={`flex w-full items-center gap-3 border-l-[3px] pl-4 py-3 pr-4 cursor-pointer hover:bg-gray-50 ${task.completed ? 'border-l-green-600 bg-gray-50' : 'border-l-red-600'}`}>
        <input checked={task.completed} onChange={(e) => onCheckedChange(e.target.checked)} className='w-5 h-5 rounded-full checked:accent-pink-600 cursor-pointer' type='checkbox' id={`task-${task.id}`} />
        <label htmlFor={`task-${task.id}`} className={`cursor-pointer text-gray-600 text-sm font-semibold${task.completed ? ' decoration-pink-600 line-through' : ''}`}>{task.title}</label>
        <button onClick={onDeleteTask} className="ml-auto"><IconDeleteLeft className="text-gray-400 hover:text-gray-700" /></button>
      </label>

    </div>
  )
}

export default TaskItem