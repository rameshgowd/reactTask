import React, { useState } from 'react';
import './index.css'
function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) {
      onAddTask({ id: Math.random(), title, status: 'pending' });
      setTitle('');
    }
  };

  return (
    <form  className="task-form" onSubmit={handleSubmit}>
      <label>
        New Task:
        <input className="task-form input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <button className='button' type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
