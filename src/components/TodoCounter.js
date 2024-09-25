import { useContext } from 'react'
import '../styles/TodoCounter.css'
import { TodoContext } from '../context/TodoContext'

function TodoCounter() {

    const {
        completedTodos,
        totalTodos
    } = useContext(TodoContext)

    return(
        <h1>Has completado <strong>{completedTodos}</strong>  de <strong>{totalTodos}</strong> TODOS</h1>
    )
}

export default TodoCounter