import React, { useState, useCallback } from 'react';
import '../styles/Insert.scss';
import { MdAdd } from 'react-icons/md';

const Insert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    e => {
      setValue(e.target.value);
    }, []
  );

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    }, [onInsert, value]
  );


  return (
    <form className="Insert" onSubmit={ onSubmit }>
      <input placeholder="할 일을 입력하세요." 
        onChange={ onChange }
        value={ value }
      />
      <button type="submit" onClick={ onSubmit }>
        <MdAdd />
      </button>
    </form>
  );  
};

export default Insert;