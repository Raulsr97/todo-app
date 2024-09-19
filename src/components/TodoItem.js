import '../styles/TodoItem.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function TodoItem(props) {
    return(
      <li className='todo'>
        <p>{props.text}</p>
        <div>
          <span>
            <CheckCircleOutlineIcon style={{ fontSize: 24, color: '#c57ffe' }} />
          </span>
          <span>
            <DeleteOutlineIcon style={{ fontSize: 24, color: '#c57ffe' }} />
          </span>
        </div>
        
      </li>
    )
}

export default TodoItem