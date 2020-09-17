import React from "react"
import { todoReducer } from "../reducers/todoReducer";

import Todo from "./Todo"

const TodoList = (props) => {

    return (
        <div className="todo-list">
            {props.todoList.map((todo) => (
                <Todo 
                    key={todo.id}
                    todo={todo}
                    completed={todo.completed}
                />
            ))}
        </div>
    )
}

export default TodoList;