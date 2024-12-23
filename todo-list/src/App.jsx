import "./TodoList.css"

function App() {
  return (
    <div className="container">
      <div className="todo-container">
        <h1>To-Do - List</h1>
        <input
          type="text"
          className="task-input"
          placeholder="Add a new task..."
        />
        <button type="button" className="add-btn">Add</button>
      </div>
    </div>
  )
}

export default App
