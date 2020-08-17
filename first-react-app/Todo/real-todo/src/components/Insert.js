import React, { useState, useCallback } from 'react';
import '../styles/Insert.scss';
import { MdAdd } from 'react-icons/md';

const Insert = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    e => {
      setValue(e.target.value);
    }, []
  );


  return (
    <div className="Insert">
      <input placeholder="할 일을 입력하세요." 
        onChange={ onChange }
      />
      <button type="submit">
        <MdAdd />
      </button>
    </div>
  );
};

export default Insert;