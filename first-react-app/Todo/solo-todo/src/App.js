import React, { useRef, useState, useCallback, useReducer } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoListInput from './components/TodoListInput';
import TodoList from './components/TodoList';


function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일: ${i}`,
      checked: false
    });
  }
  
  return array;
}


function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      // { type: todo:  { id: 1, text: 'todo', checked: false } }
      return todos.concat(action.todo);
    case 'REMOVE':
      // { type: 'REMOVE', id: 1 }
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo => 
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo );
    default:
      return todos;
  }
}



function App() {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      dispatch({ type: 'INSERT', todo });
      nextId.current++;
    }, []
  );

  const onRemove = useCallback(
    id => {
      dispatch({ type: 'REMOVE', id });
    }, []
  )

  const onToggle = useCallback(
    id => {
      dispatch({ type: 'TOGGLE', id });
    }, []
  );


  return (
    <TodoListTemplate >
      <TodoListInput onInsert={ onInsert }/>
      <TodoList todos={ todos } onRemove={ onRemove } onToggle={ onToggle }/>
    </TodoListTemplate>
  );
}


export default App;
