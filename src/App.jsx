import { useState } from "react";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import TaskList from "./components/TaskList";

const Initial_Tasks = [
  { id: 1, title: "Buy groceries", priority: "high", done: false },
  { id: 2, title: "Read for 30 minutes", priority: "low", done: false },
  { id: 3, title: "Go for a walk", priority: "med", done: true },
];

function App() {
  const [tasks, setTasks] = useState(Initial_Tasks);

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, done: !task.done } : task;
      }),
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  function handleAddClick() {
    console.log("Add Task button clicked");
  }
  return (
    <>
      <div className="app">
        <Header onAddClick={handleAddClick} />

        <div className="container">
          <TaskList
            tasks={tasks}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
