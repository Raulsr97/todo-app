import '../styles/TodoCounter.css'

function TodoCounter({ total, completed }) {
    return(
        <h1>Has completado <strong>{completed}</strong>  de <strong>{total}</strong> TODOS</h1>
    )
}

export default TodoCounter