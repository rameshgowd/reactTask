import React from 'react'; 

import './index.css'

function TaskItem({ task, onUpdateStatus, onDeleteTask }) {
  const handleStatusChange = (event) => {
    onUpdateStatus(task.id, event.target.value);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <li className ="task-item"  key={task.id}>
      <label className='task-label'>
        <input type="checkbox" checked={task.status === 'completed'} onChange={handleStatusChange} />
        {task.title}
      </label>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;
