import '../styles/TodoList.css'

function TodoList (props) {
    return(
        <ul className='list-container'>
            {props.children}
        </ul>
    )
}

export default TodoList