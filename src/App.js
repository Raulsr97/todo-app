import './App.css';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';
import TodoItem from './components/TodoItem';
import TodoCreate from './components/TodoCreate';

const defaultTodos = [
  {text: 'aprender ingles', completed: true},
  {text: 'aprender python', completed: false},
  {text: 'aprender js', completed: true},
  {text: 'aprender reactjs', completed: false}
]

function App() {
  return (
    <div className='App'>
    <div className='todo-form'>
      <p>ToDo App</p>
      <TodoCreate />
      <CreateTodoButton />
    </div>
    <div className='todo-container'>
      <div className='counter-container'>
          <TodoCounter 
            completed={45}
            total={67}
          />
      </div>
    <TodoSearch />
    <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            text={todo.text} 
            key={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
    </div>
   </div>
  );
}



export default App;

