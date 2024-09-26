import '../styles/TodoItem.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function TodoItem({ text, onComplete, onDelete, isCompleted }) {
    return(
      <li className={ isCompleted ? 'todo-completed' : 'todo'} >
        <p>{text}</p>
        <div>
          <span className=''>
            <CheckCircleOutlineIcon className='check-icon' onClick={onComplete}/>
          </span>
          <span className=''>
            <DeleteOutlineIcon className='delete-icon' onClick={onDelete}/>
          </span>
        </div>
        
      </li>
    )
}

export default TodoItem