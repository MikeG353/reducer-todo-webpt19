import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm'
import './App.css';
import TodoList from './components/TodoList';
import { initialTodoState, todoReducer } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState)
  
  return (
    <div className="App">
      <div className="header">
        <h1>Reducer Todo List:</h1>
        <TodoForm dispatch={dispatch}/>
      </div>
      
      <TodoList 
        todoList={state.todoList}
        dispatch={dispatch}
        
      />
    </div>
  );
}

export default App;
