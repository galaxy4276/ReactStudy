import React, { useCallback, useRef, useReducer } from 'react';
import Template from './components/Template';
import Insert from './components/Insert';
import ListOne from './components/List';


function createBulkTodos() {
  const array = [];
  for(let i = 0; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    });
  }

  return array;
}


function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo );
    default:
      return todos;
  }
}


function App() {
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
  );

  const onToggle = useCallback(
    
    id => {
      dispatch({ type: 'TOGGLE', id });
    }, []
  );


  return (
    <Template>
      <Insert onInsert={ onInsert } />
      <ListOne todos={ todos } onRemove={ onRemove } onToggle={ onToggle } />
    </Template>
  );
}

export default App;
