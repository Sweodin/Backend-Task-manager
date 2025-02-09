import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onToggleComplete, onDelete, onUpdate }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString();
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'task-priority-high';
      case 'medium':
        return 'task-priority-medium';
      case 'low':
        return 'task-priority-low';
      default:
        return '';
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="task-checkbox"
        />
        
        <div className="task-details">
          <h3 className="task-title">{task.title}</h3>
          <div className="task-metadata">
            <span className={`task-priority ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            <span className="task-category">{task.category}</span>
            <span className="task-assigned">Assigned to: {task.assignedTo}</span>
            {task.dueDate && (
              <span className="task-due-date">Due: {formatDate(task.dueDate)}</span>
            )}
          </div>
        </div>
      </div>

      <div className="task-actions">
        <button
          onClick={() => onDelete(task.id)}
          className="delete-btn"
          aria-label="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
