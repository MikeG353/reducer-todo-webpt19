import React, { useReducer, useState } from 'react'
import { 
    todoReducer,
    ADD_TODO } from '../reducers/todoReducer'

const TodoForm = () => {
    // state for form
    const [newTaskText, setNewTaskText] = useState("");
    const [state, dispatch] = useReducer(todoReducer)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: ADD_TODO, payload: newTaskText})
    }
    const handleChanges = (e) => {
        setNewTaskText(e.target.value)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="todo"
                value={newTaskText}
                onChange={handleChanges}
            />
            <button>Add</button>

        </form>
    )
}

export default TodoForm