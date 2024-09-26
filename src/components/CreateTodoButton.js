import { useContext } from 'react';
import '../styles/CreateTodoButton.css'
import { TodoContext } from '../context/TodoContext';

function CreateTodoButton() {

    const {
        agregarTarea
    } = useContext(TodoContext)

    return(
        <button onClick={agregarTarea}>
            Create Todo
        </button>
    )
}

export default CreateTodoButton