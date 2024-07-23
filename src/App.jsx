import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    task.id = Date.now();
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const markCompleted = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const clearEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} clearEdit={clearEdit} />
      <TaskList tasks={tasks} markCompleted={markCompleted} deleteTask={deleteTask} editTask={setTaskToEdit} />
    </div>
  );
};

export default App;
