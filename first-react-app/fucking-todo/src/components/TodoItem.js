import React from 'react';
import '../styles/TodoItem.scss';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline
} from 'react-icons/md';
import cl from 'classnames';



const TodoItem = ({ todo, onRemove, onToggle }) => {
  const { text, id, checked } = todo;

  return (
    <div className="TodoItem" onDoubleClick={ () => onToggle(id) }>
      <div className={cl("checkbox", {checked})}>
        { (checked) ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
        <div className="text">{ text }</div>
      </div>
      <div className="remove" onClick={ () => onRemove(id) }>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoItem;