import React, { useState } from 'react'
import './App.css'


function App() { 
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const navlist = ['abour', 'contact', 'sell']

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }

    setList([...list, newTodo]);

    setInput("");
  }

  const cancelTodo = (id) =>{
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <br/><br/>
      <button onClick={() => addTodo(input)}>Add</button>
      <ul id='ulMaster'> 
        {list.map((todo) => (
          <li id='items' key={todo.id}>
            <p>{todo.todo}</p>
            <button id='cancel' onClick={() => cancelTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default App