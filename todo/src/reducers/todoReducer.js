export const ADD_TODO = "ADD_TODO"
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"

export const initialTodoState = {
    todoList: [
        {name: "test Todo", id:Date.now(), completed: false}
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const newTodoList = [
                ...state.todoList,
                {name: action.payload, id: Date.now(), completed:false}
            ]
            return {
                ...state,
                todoList: newTodoList
            }
        }
        case TOGGLE_COMPLETED: {
            const newTodoList = state.todoList.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }else {
                    return todo
                }
            })
            return {
                ...state,
                todoList : newTodoList
            }
        }
        case CLEAR_COMPLETED: {
            
            return {
                ...state,
                todoList : state.todoList.filter((todo) => {
                    return !todo.completed
                })
            }

        }
        default:
            return state;
    }
}