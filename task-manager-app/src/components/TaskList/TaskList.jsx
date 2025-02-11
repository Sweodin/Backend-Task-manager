import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = ({ 
  tasks = [], 
  categories = [], 
  users = [], 
  onToggleComplete, 
  onDelete, 
  onUpdate 
}) => {
  const [filters, setFilters] = useState({
    category: 'all',
    assignedTo: 'all',
    completed: 'all'
  });

  const filterTasks = () => {
    return tasks.filter(task => {
      const categoryMatch = filters.category === 'all' || task.category === filters.category;
      const userMatch = filters.assignedTo === 'all' || task.assignedTo === filters.assignedTo;
      const completedMatch = filters.completed === 'all' || 
        (filters.completed === 'completed' ? task.completed : !task.completed);
      
      return categoryMatch && userMatch && completedMatch;
    });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredTasks = filterTasks();

  return (
    <div className="task-list-container">
      <div className="filters">
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <select
          name="assignedTo"
          value={filters.assignedTo}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="all">All Users</option>
          {users.map(user => (
            <option key={user} value={user}>{user}</option>
          ))}
        </select>

        <select
          name="completed"
          value={filters.completed}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </div>

      <div className="tasks-grid">
        {filteredTasks.length === 0 ? (
          <p className="no-tasks">No tasks found</p>
        ) : (
          filteredTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
