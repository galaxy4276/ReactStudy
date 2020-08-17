import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import '../styles/TodoInsert.scss';


const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 호출하는 함수 
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={ onSubmit }>
      <input placeholder="할 일을 입력하세요." 
        value={ value }
        onChange={ onChange }
      />
      <button type="submit" onClick={ onClick }>
        <MdAdd />
      </button>
    </form>
  )
};


export default TodoInsert;