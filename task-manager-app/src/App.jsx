import React from "react";
import Navbar from "./components/Navbar/Navbar";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import useTaskManager from "./hooks/useTaskManager";
import "./App.css";

const App = () => {
  /*----- Use the custom hook to manage tasks -----*/

  const { tasks, categories, users, addTask, toggleComplete, deleteTask, updateTask } = useTaskManager();

  return (
    <div className="app">
      <Navbar /> {/* Render the navigation bar */}
      <div className="container">
        <h1 className="app-title">My Tasks</h1> {/* Page title */}
        <TaskForm onAddTask={addTask} categories= {categories} users= {users} /> {/* Form to add new tasks */}
        <TaskList
          tasks={tasks}
          categories= {categories}
          users= {users}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />
      </div>
    </div>
  );
};

export default App;
