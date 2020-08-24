import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline
} from 'react-icons/md';
import cl from 'classnames';
import '../styles/TodoListItem.scss';


const TodoListItem = ({ todo, onToggle, onRemove, style }) => {
  const { text, checked, id } = todo;

  return (
    <div className="TodoList-virtualized" style={style}>
      <div className="TodoListItem" onDoubleClick={ () => onToggle(id) }>
        <div className={cl("checkbox", { checked })}>
          { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
        <div className="text">{ text }</div>
        </div>
        <div className="remove" onClick={ () => onRemove(id) }>
          <MdRemoveCircleOutline/>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);