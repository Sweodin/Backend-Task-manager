import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <ul className="task-list">
      {/* Map through the tasks and render each one */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id} /*----- Unique key for each task -----*/
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
