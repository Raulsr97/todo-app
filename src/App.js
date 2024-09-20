import React from 'react';
import './App.css';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';
import TodoItem from './components/TodoItem';
import TodoCreate from './components/TodoCreate';
import { useState } from 'react';

const defaultTodos = [
  {text: 'aprender ingles', completed: true},
  {text: 'aprender python', completed: false},
  {text: 'aprender js', completed: true},
  {text: 'aprender reactjs', completed: false}
]

function App() {

  // Estados
  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState(defaultTodos)

  // Estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  return (
    <div className='App'>
    <div className='todo-form'>
      <p>ToDo App</p>
      <TodoCreate />
      <CreateTodoButton />
    </div>
    <div className='todo-container'>
      <div className='counter-container'>
          <TodoCounter 
            completed={completedTodos}
            total={totalTodos}
          />
      </div>
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
    <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            isCompleted={todo.completed}
            text={todo.text} 
            key={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
          />
        ))}
      </TodoList>
      
    </div>
   </div>
  );
}



export default App;

