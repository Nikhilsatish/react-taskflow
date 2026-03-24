import { useState } from "react";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import TaskList from "./components/TaskList";
import FilterTabs from "./components/FilterTabs";
import TaskForm from "./components/TaskForm";

const Initial_Tasks = [
  { id: 1, title: "Buy groceries", priority: "high", done: false },
  { id: 2, title: "Read for 30 minutes", priority: "low", done: false },
  { id: 3, title: "Go for a walk", priority: "med", done: true },
];

function App() {
  const [tasks, setTasks] = useState(Initial_Tasks);
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);

  const visibleTasks = tasks.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, done: !task.done } : task;
      }),
    );
  };

  function handleAdd(task) {
    setTasks([{ ...task, id: Date.now(), done: false }, ...tasks]);
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <>
      <div className="app">
        <Header onAddClick={() => setShowForm(true)} />

        <div className="container">
          <FilterTabs filter={filter} onChange={setFilter} />

          {showForm && (
            <TaskForm onAdd={handleAdd} onCancel={() => setShowForm(false)} />
          )}

          <TaskList
            tasks={visibleTasks}
            filter={filter}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
