import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import '../styles/TodoListInput.scss';


const TodoListInput = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value)
    }, []
  );

  const onClick = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    }, [value, onInsert]
  );
  
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    }, [value, onInsert]
  )

  return (
    <form className="TodoListInput" onSubmit={ onSubmit }>
      <input placeholder="할 일을 입력하세요"
        onChange={ onChange }
        value={ value }
      />
      <button type="submit" onClick={ onClick } >
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoListInput;