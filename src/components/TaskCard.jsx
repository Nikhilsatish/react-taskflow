import React from "react";

function TaskCard({ task, onToggle, onDelete }) {
  const { id, title, priority, done } = task;

  return (
    <li className={done ? "task-card done" : "task-card"}>
      <input type="checkbox" checked={done} onChange={() => onToggle(id)} />
      <span className="task-title">{title}</span>
      <span className={`badge ${priority}`}>{priority}</span>
      <button onClick={() => onDelete(id)}>X</button>
    </li>
  );
}

export default TaskCard;
