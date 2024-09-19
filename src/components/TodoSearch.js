import React from 'react';
import '../styles/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
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