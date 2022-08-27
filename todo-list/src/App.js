import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodo = todos.map((t) => t.id === editTodo.id
        ? (t = { id: t.id, todo })
        : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodo);
      setEditId(0);
      setTodo(" ");
      return;
    }

    if (todo !== " ") {
      setTodos([{ id: '${todo}-${Date.now()}', todo }, ...todos]);
      setTodo("");
    }
  };
  const handleDelete = (id) => {
    let delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };
  const handleEdit = (id) => {
    let editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div>
      <h1>To-Do List</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a Todo'
          className='todo-input' value={todo}
          onChange={(e) => setTodo(e.target.value)} />
        <button className='create'>{editId ? 'Edit' : 'Create'}</button>
      </form>
      <ul className='todo-list'>
        {todos.map((t) => (
          <li className='singleTodo'>
            <span className='todo-content' key={t.id=Math.floor(Math.random()*1000000)}>{t.todo}</span>
            <button onClick={() => handleEdit(t.id)}>Edit</button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;