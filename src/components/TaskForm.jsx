import React, { useState } from "react";

function TaskForm({ onAdd, onCancel }) {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("med");

  function handleInput(e) {
    setTitle(e.target.value);
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validation
    if (!title.trim()) {
      setError("Please enter a task title");
      return;
    }

    onAdd({ title: title.trim(), priority });

    setTitle("");
    setPriority("med");
    setError("");
  }

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <h3>New Task</h3>

        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => handleInput(e)}
          autoFocus
        />

        {error && <p className="error">{error}</p>}

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="med">Medium</option>
          <option value="low">Low</option>
        </select>

        <div className="form-buttons">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="primary">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
