import React from 'react'
import './App.css';
import Header from './components/Header';
import NewToDo from './components/NewToDo';
import ListToDo from './components/ListToDo';
import {v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function App() {
  let initialTodos = [
    {
      id: uuidv4(),
      title: "First Part",
      done: false,
    },
    {
      id: uuidv4(),
      title: "Second Part",
      done: false,
    },
    {
      id: uuidv4(),
      title: "Third Part",
      done: false,
    }
  ]
  
  const [todos, setTodos] = useState(() => {
    return initialTodos;
  })

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(),title: todo, completed: false, checked: false}]);
  }

  return (
    <div className="App">
    <Header />
    <NewToDo addTodo={addTodo} />
    <ListToDo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
