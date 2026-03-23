import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import TaskList from "./components/TaskList";

function App() {
  const tasks = [
    { id: 1, title: "Buy groceries", priority: "high", done: false },
    { id: 2, title: "Read for 30 minutes", priority: "low", done: false },
    { id: 3, title: "Go for a walk", priority: "med", done: true },
  ];

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
            onToggle={(id) => console.log("toggle", id)}
            onDelete={(id) => console.log("delete", id)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
