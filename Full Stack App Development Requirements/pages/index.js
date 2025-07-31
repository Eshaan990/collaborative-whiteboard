import { useState, useEffect } from 'react'

export default function Home() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // Load todos from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('todos')
    if (saved) setTodos(JSON.parse(saved))
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input.trim(), done: false }])
      setInput('')
    }
  }

  const toggleTodo = idx => {
    setTodos(
      todos.map((todo, i) =>
        i === idx ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  const removeTodo = idx => {
    setTodos(todos.filter((_, i) => i !== idx))
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-row">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx} className={todo.done ? 'done' : ''}>
            <span onClick={() => toggleTodo(idx)}>{todo.text}</span>
            <button onClick={() => removeTodo(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}