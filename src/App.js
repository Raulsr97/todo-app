import './App.css';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';
import TodoItem from './components/TodoItem';

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
      <CreateTodoButton />
    </div>
    <div className='todo-container'>
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
      <TodoCounter 
        completed={45}
        total={67}
      />
    </div>
   </div>
  );
}



export default App;

