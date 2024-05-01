import React, { useState, useEffect } from 'react';
import TaskItem from '../TaskItem';
import TaskForm from '../TaskForm';

import './index.css'
function TaskList() {
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://your-api.com/tasks');
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className='task-list'>
      <h1>Task List</h1>
      <TaskForm onAddTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdateStatus={updateTaskStatus}
            onDeleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
