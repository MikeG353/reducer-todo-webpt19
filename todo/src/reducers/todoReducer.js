export const ADD_TODO = "ADD_TODO"

export const initialTodoState = {
    todoList: [
        {name: "test Todo", id:Date.now(), completed: false}
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            console.log('state :', state, 'action :', action)
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}