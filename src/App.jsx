import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  return (
    <div className="App">
      <h1>To-Do List with Redux</h1>
      <AddTask />
      <h2 style={{ marginBottom: "20px" }}>Tasks</h2>
      <ListTask />
    </div>
  );
};

export default App;
