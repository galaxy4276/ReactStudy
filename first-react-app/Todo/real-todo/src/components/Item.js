import React from 'react';
import '../styles/Item.scss';
import {
  MdRemoveCircleOutline,
  MdCheckBoxOutlineBlank,
  MdCheckBox
} from 'react-icons/md';
import cl from 'classnames';


const Item = ({ todo, onToggle, onRemove }) => {
  const { text, id, checked } = todo;

  return (
    <div className="Item">
      <div className={cl("checkbox", { checked })} onClick={ () => onToggle(id) }>
        { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
        <div className="text">{ text }</div>
      </div>
      <div className="remove" onClick={ () => onRemove(id) }>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(Item);