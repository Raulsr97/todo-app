import '../styles/CreateTodoButton.css'

function CreateTodoButton() {
    return(
        <button onClick={(event) => {
            console.log('le diste click');
            console.log(event);
            
        }}>
            Create Todo
        </button>
    )
}

export default CreateTodoButton