import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';



function App() {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(0);


  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    }, [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked } : todo)
      );
    }, [todos]
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={ onInsert } />
        <TodoList todos={ todos } onRemove={ onRemove } onToggle={ onToggle } />
      </TodoTemplate>
    </div>
  );
}


export default App;
