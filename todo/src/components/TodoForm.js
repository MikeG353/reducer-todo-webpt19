import React, { useState } from 'react'
import { ADD_TODO } from '../reducers/todoReducer'

const TodoForm = (props) => {
    // state for form
    const [newTaskText, setNewTaskText] = useState("");

    const handleChanges = (e) => {
        setNewTaskText(e.target.value)
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.dispatch({type: ADD_TODO, payload: newTaskText})}} >
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