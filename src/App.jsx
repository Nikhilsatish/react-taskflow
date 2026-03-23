import Header from "./components/Header";
import TaskCard from "./components/TaskCard";

function App() {

   const fakeTask = { id: 1, title: 'Buy groceries', priority: 'high', done: false }


  function handleAddClick() {
    console.log("Add Task button clicked");
  }
  return (
    <>
      <div className="app">
        <Header onAddClick={handleAddClick} />

        <ul>
          <TaskCard
            task={fakeTask}
            onToggle={() => console.log('Task toggled')}
            onDelete={() => console.log('Task deleted')} />
        </ul>
      </div>
    </>
  );
}

export default App;
