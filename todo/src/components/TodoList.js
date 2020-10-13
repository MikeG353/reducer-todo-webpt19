import React from "react"
import { CLEAR_COMPLETED } from "../reducers/todoReducer";

import Todo from "./Todo"

const TodoList = (props) => {

    return (
        <div className="todo-list">
            {props.todoList.map((todo) => (
                <Todo 
                    key={todo.id}
                    todo={todo}
                    completed={todo.completed}
                    dispatch={props.dispatch}
                />
            ))}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    props.dispatch({type: CLEAR_COMPLETED})
                }}
            >Clear Completed</button>
        </div>
    )
}

export default TodoList;