import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <li className="task-item">
      {/*----- Task title with line-through if completed -----*/}

      <span className={task.completed ? "completed" : ""}>{task.title}</span>
      <div className="task-buttons">
        {/*----- Button to toggle task completion -----*/}

        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Mark Incomplete" : "Mark Done"}
        </button>

        {/*----- Button to delete the task -----*/}

        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
