import React, { useContext } from 'react';
import '../styles/TodoSearch.css'
import { TodoContext } from '../context/TodoContext';

function TodoSearch() {

    const {
        searchValue,
        setSearchValue
    } = useContext(TodoContext)

    return(
        <input 
            placeholder="Search a ToDo!" 
            className="todo-input" 
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}>
        </input>
    )
}

export default TodoSearch