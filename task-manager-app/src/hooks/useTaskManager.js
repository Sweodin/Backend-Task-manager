import { useState, useEffect } from "react";

const initialCategories = ["Shopping", "Kids", "Appointments", "Work"];
const initialUsers = ["Mom", "Dad"];

const useTaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    /* Load tasks from localStorage if they exist */
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  }); /*----- State to store the list of tasks -----*/

  const [categories] = useState(initialCategories); /*----- State to store the list of categories -----*/
  const [users] = useState(initialUsers); /*----- State to store the list of users -----*/

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /*----- Function to add a new task -----*/
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(), /*----- Generate a unique ID for the task -----*/
      title: taskData.title, /*----- Task title -----*/
      category: taskData.category || categories[0],
      assignedTo: taskData.assignedTo || users[0],
      completed: false, /*----- Default task status -----*/
      createdAt: new Date().toISOString(),
      dueDate: taskData.dueDate || null,
      priority: taskData.priority || "Medium",
    };
    setTasks(prevTasks => [...prevTasks, newTask]); /*----- Add the new task to the list -----*/
  };

  /*----- Function to toggle the completion status of a task -----*/
  const toggleComplete = (id) => {
    setTasks(prevTasks =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  /*----- Function to delete a task -----*/
  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter((task) => task.id !== id)); /*----- Remove the task with the given ID -----*/
  };

  const updateTask = (id, updateData) => {
    setTasks(prevTasks =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updateData } : task
      )
    );
  };

  const getTasksByCategory = (category) => {
    return tasks.filter((task) => task.category === category);
  };

  const getTasksByUser = (user) => {
    return tasks.filter((task) => task.assignedTo === user);
  };

  return {
    tasks,
    categories,
    users,
    addTask,
    toggleComplete,
    deleteTask,
    updateTask,
    getTasksByCategory,
    getTasksByUser,
  }; /*----- Expose the state and functions -----*/
};

export default useTaskManager;
