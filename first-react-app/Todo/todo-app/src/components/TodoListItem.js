import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import '../styles/TodoListItem.scss';


const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, checked, text } = todo;
  console.log(`checked: ${checked}\ntext: ${text}`);

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onDoubleClick={ () => onToggle(id) }>
        { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
      <div className="text">{ text }</div>
      </div>
      <div className="remove" onClick={ () => onRemove(id) }>
          <MdRemoveCircleOutline />
      </div>
    </div>
  );
};


export default TodoListItem;