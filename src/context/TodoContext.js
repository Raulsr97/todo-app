import React from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage'
import { useState } from 'react'

const TodoContext = React.createContext()

// function Provider({ children}) {
//   // Logica de la aplicacion
//   return (
//     <TodoContext.Provider value={{
//       // Recibe todas las props de la aplicacion
//     }}>
//       { children }
//     </TodoContext.Provider>
//   )

// }

// export { contexto, provedor }

function TodoProvider ({ children }) {
      // Estados
  const [newTodo, setNewTodo] = useState('')
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
      const todoText = todo.text || ''
      const search = searchValue || ''
      return todoText.toLowerCase().includes(search.toLowerCase())
    }
  )

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
  
  const manejarCambio = evento => { 
    setNewTodo(evento.target.value)
  }
  const agregarTarea = () => {
    if(newTodo.trim() !== '') {

      const nuevaTarea ={
        text: newTodo,
        completed: false
      }

      const newTodos = [...todos, nuevaTarea]
      saveTodos(newTodos)
      setNewTodo('')
    }
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
        deleteTodo,
        newTodo,
        setNewTodo,
        manejarCambio,
        agregarTarea
    }}>
        {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }


