import React from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage'
import { useState } from 'react'

const TodoContext = React.createContext()

function TodoProvider ({ children }) {
      // Estados
  const [searchValue, setSearchValue] = useState('')
  const {
    item: todos , 
    saveItem: saveTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_V1', [])

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
    <TodoContext.Provider value={{
        searchValue,
        setSearchValue,
        loading,
        error,
        completedTodos,
        searchedTodos,
        totalTodos,
        completeTodo,
        deleteTodo
    }}>
        {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }