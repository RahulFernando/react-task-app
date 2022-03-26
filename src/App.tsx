import './App.css';

// components
import NewTask from './pages/newTask';
import TaskList from './pages/taskList';

function App() {
  return (
    <div className="App">
      <NewTask />
      <TaskList />
    </div>
  );
}

export default App;
