import { useContext } from 'react'
import '../styles/TodoCreate.css'
import { TodoContext } from '../context/TodoContext'

function TodoCreate() {

    const {
        newTodo,
        manejarCambio
    } = useContext(TodoContext)

    return(
        <input 
            className='create-input' 
            placeholder="Create a new ToDo!"
            value={newTodo}
            onChange={manejarCambio}
        >

        </input>
    )
}

export default TodoCreate