import React from 'react';
import './App.css';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';
import TodoItem from './components/TodoItem';
import TodoCreate from './components/TodoCreate';
import { useLocalStorage } from './Hooks/useLocalStorage';
import { useState, useEffect } from 'react';

// const defaultTodos = [
//   {text: 'aprender ingles', completed: true},
//   {text: 'aprender python', completed: false},
//   {text: 'aprender js', completed: true},
//   {text: 'aprender reactjs', completed: false}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')

function App() {

  // Estados
  const [searchValue, setSearchValue] = useState('')
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

  // Estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )

  // console.log('Log 1');

  // Lo que este dentro de una funcion useEffect se renderizara hasta el ultimo
  // useEffect(() => {
  //   console.log('log 2');
    
  // })

  // Si le pasamos un array vacio al final solo se va a renderizar una vez
  // useEffect(() => {
  //   console.log('log 2');
  // }, [])

  
  // si le pasamos algun argumento se va a renderizar hasta que cierto evento suceda
  // useEffect(() => {
  //   console.log('log 2');
    
  // }, [totalTodos])

  // console.log('log 3 ');

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos.splice(todoIndex, 1)

    saveTodos(newTodos)
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
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
    </div>
   </div>
  );
}



export default App;

