import { useContext } from 'react'
import '../styles/TodoCounter.css'
import { TodoContext } from '../context/TodoContext'

function TodoCounter() {
    
    const {
        completedTodos,
        totalTodos
    } = useContext(TodoContext)

    return(
        <h1>You have completed <strong>{completedTodos}</strong>  of <strong>{totalTodos}</strong> ToDoS</h1>
    )
}

export default TodoCounter