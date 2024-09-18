import '../styles/TodoItem.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function TodoItem(props) {
    return(
      <li className='todo'>
        <span>v</span>
        <p>{props.text}</p>
        <span>
          <CheckCircleIcon style={{ fontSize: 24, color: '#ffffff' }} />
        </span>
      </li>
    )
}

export default TodoItem