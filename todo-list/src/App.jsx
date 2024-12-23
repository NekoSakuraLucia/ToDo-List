import { useState } from "react"
import "./TodoList.css"

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="container">
      <div className="todo-container">
        <h1>To-Do - List</h1>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="task-input"
          placeholder="Add a new task..."
        />
        <button type="button" className="add-btn" onClick={handleAddTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            <span
              onClick={() => handleToggleTask(task.id)}
              className="task-text"
            >
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(task.id)} className="delete-btn">
              &#10005;
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
