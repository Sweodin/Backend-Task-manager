import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask, categories = [], users = [] }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    category: categories[0] || '',
    assignedTo: users[0] || '',
    dueDate: '',
    priority: 'medium',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.title.trim()) {
      onAddTask(taskData);
      setTaskData({
        title: '',
        category: categories[0] || '',
        assignedTo: users[0] || '',
        dueDate: '',
        priority: 'medium',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={taskData.title}
        onChange={handleChange}
        placeholder="Enter task title"
        className="task-input"
        required
      />
      
      <select
        name="category"
        value={taskData.category}
        onChange={handleChange}
        className="task-select"
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        name="assignedTo"
        value={taskData.assignedTo}
        onChange={handleChange}
        className="task-select"
      >
        {users.map(user => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>

      <input
        type="date"
        name="dueDate"
        value={taskData.dueDate}
        onChange={handleChange}
        className="task-input"
      />

      <select
        name="priority"
        value={taskData.priority}
        onChange={handleChange}
        className="task-select"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit" className="add-task-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
