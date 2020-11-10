
import {RiCloseCircleLine} from 'react-icons/ri'

function Todo({todos, completeTodo, removeTodo}) {

        return todos.map((todo, index) => (
        <div key={index} className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
            <RiCloseCircleLine  onClick={() => removeTodo (todo.id)} 
            className='delete-icon'/>  
            </div>
        </div> 
    ))
}

export default Todo
