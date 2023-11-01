"use client";

import { useState } from "react";
import { tasksData } from "../../data";
import TaskItem from "../../../components/challenge-5/Task";
import { IconAddBoxFill } from "../../../components/challenge-5/Icons";
import { Task } from "./types";
import { formatDateTime } from "./utils";

function Page() {
  const [tasks, setTasks] = useState<Task[]>(tasksData);
  const [newTask, setNewTask] = useState('');

  function updateTask(id: number, checked: boolean) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          task.completed = checked;
        }
        return task;
      });
    });
  }

  function deleteTask(id: number) {
    setTasks((prevTasks) => prevTasks.filter(element => element.id !== id));
  }

  function createTask() {
    setTasks([...tasks, { id: tasks.length + 1, title: newTask, completed: false, createdAt: new Date().toDateString() }]);
    setNewTask('');
  }

  return (
    <main className="bg-gray-200 flex w-full min-h-screen items-center justify-center">
      <div className="w-[500px] border rounded-lg overflow-hidden bg-white">
        <div className='bg-pink-600  p-6 flex rounded-t-md items-center justify-between text-white'>
          <div className='flex items-center'>
            <h2 className='text-5xl font-semibold mr-1'>{formatDateTime().day}</h2>
            <span className='p-0 text-sm font-semibold'>{formatDateTime().month}<br />{formatDateTime().year}</span>
          </div>
          <div>
            <h2 className='p-0 text-xl font-semibold'>{formatDateTime().hour}</h2>
            <span className='p-0 text-sm font-bold'>{formatDateTime().dayOfWeek}</span>
          </div>
        </div>

        <div className='mx-4 mt-4 p-6'>
          {tasks.length ?
            tasks.map((element: Task) => <TaskItem key={element.id} task={element} updateTask={updateTask} deleteTask={deleteTask} />)
            : <div className="text-gray-400 text-center">No Tasks to do yet!</div>}
        </div>

        <div className="bg-white p-4 flex items-center space-x-3 rounded-b-md">
          <textarea
            rows={2}
            className={`flex-1 px-4 py-2 border outline-none rounded-md `}
            placeholder="Add a new task..."
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          ></textarea>
          <button
            className="text-center text-3xl font-semibold outline-none p-0
             mb-auto"
            onClick={createTask}
          >
            <IconAddBoxFill className="text-gray-400 hover:text-gray-700" />
          </button>
        </div>
      </div>
    </main>
  )
}

export default Page