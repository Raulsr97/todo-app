import React from "react";
import AssignmentIcon from '@mui/icons-material/Assignment';
import '../styles/EmptyTodos.css'

function EmptyTodos() {
    return(
        <div className="empty-container">
            <h2 className="title">Crea un nuevo ToDo!</h2>
            <span><AssignmentIcon className="list-icon" /></span>
        </div>
    )
}

export { EmptyTodos }