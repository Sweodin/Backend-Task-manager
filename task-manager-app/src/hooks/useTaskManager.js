import { useState } from "react";

const useTaskManager = () => {
  const [tasks, setTasks] = useState(
    []
  ); /*----- State to store the list of tasks -----*/

  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1 /*----- Generate a unique ID for the task -----*/,
      title /*----- Task title -----*/,
      completed: false /*----- Default task status -----*/,
    };
    setTasks([...tasks, newTask]); /*----- Add the new task to the list -----*/
  };

  /*----- Function to toggle the completion status of a task -----*/

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  /*----- Function to delete a task -----*/

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    ); /*----- Remove the task with the given ID -----*/
  };

  return {
    tasks,
    addTask,
    toggleComplete,
    deleteTask,
  }; /*----- Expose the state and functions -----*/
};

export default useTaskManager;
