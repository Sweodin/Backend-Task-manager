import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] =
    useState(""); /*----- State for the new task title -----*/

  /*----- Handle form submission -----*/
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      onAddTask(newTaskTitle); /*----- Add the new task -----*/
      setNewTaskTitle(""); /*----- Clear the input field -----*/
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task"
        value={newTaskTitle}
        onChange={(e) =>
          setNewTaskTitle(e.target.value)
        } /*----- Update the task title -----*/
      />
      <button type="submit">Add Task</button> {/*----- Submit button -----*/}
    </form>
  );
};

export default TaskForm;
