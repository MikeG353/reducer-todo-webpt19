import React from 'react'
import {TOGGLE_COMPLETED} from '../reducers/todoReducer'

const Todo = (props) => {
    return (
        <div 
            className={`todo${props.todo.completed ? " completed" : ""}`}
            onClick={(e)=> {
                console.log("from todo :", props.todo)
                props.dispatch({type: TOGGLE_COMPLETED, payload: props.todo.id})
            }}
        >
            <p>{props.todo.name}</p>
        </div>
    )
}
export default Todo