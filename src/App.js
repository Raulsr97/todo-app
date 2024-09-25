import React from 'react';
import './App.css';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';
import TodoItem from './components/TodoItem';
import TodoCreate from './components/TodoCreate'
import { LoadingTodos } from './components/LoadingTodos';
import { ErrorTodos } from './components/ErrorTodos';
import { EmptyTodos } from './components/EmptyTodos';
import { TodoContext } from './context/TodoContext';
import { useContext } from 'react';

// const defaultTodos = [
//   {text: 'aprender ingles', completed: true},
//   {text: 'aprender python', completed: false},
//   {text: 'aprender js', completed: true},
//   {text: 'aprender reactjs', completed: false}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')


function App() {

  const {
    loading,
    error,
    completeTodo,
    deleteTodo,
    searchedTodos

  } = useContext(TodoContext)

  return (
      <div className='App'>
      <div className='todo-form'>
        <p>ToDo App</p>
        <TodoCreate />
        <CreateTodoButton />
      </div>
      <div className='todo-container'>
        <div className='counter-container'>
            <TodoCounter />
        </div>
      <TodoSearch />
      <TodoList>
          {loading && <LoadingTodos />}
          {error  && <ErrorTodos />}
          {(!loading && searchedTodos.length == 0) && <EmptyTodos />}

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

