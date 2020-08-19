import React, { useCallback, useRef, useReducer } from 'react';
import Template from './components/Template';
import Insert from './components/Insert';
import ListOne from './components/List';


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

      setTodos(() => todos.concat(todo));
      nextId.current++;
    }, []
  );


  return (
    <Template>
      <Insert onSubmit={ onInsert } />
      <List todos={ todos } />
    </Template>
  );
}

export default App;
