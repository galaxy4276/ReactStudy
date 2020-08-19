import React, { useState, useCallback, useRef } from 'react';
import Template from './components/Template';
import Insert from './components/Insert';
import List from './components/List';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '테스트용 Developed By React Web FrameWork',
      checked: false,
    },
    {
      id: 2,
      text: '테스트용 Developed By React Web FrameWork',
      checked: true,
    }
  ]);

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
